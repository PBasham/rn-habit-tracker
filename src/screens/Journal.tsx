/** TODO
 * [x] Add confirmation for deletion.
 * [] Add sorting option
 *  [] sort for createdOn
 *  [] sort for updatedOn
 *  [] sort for title
 */
/*========================================
        Import Dependencies
========================================*/
import AsyncStorage from "@react-native-async-storage/async-storage"
import { execArgv } from "process"
import { useEffect, useState, useContext } from "react"
import { Dimensions, StyleSheet, Text, View } from 'react-native'
import { combineTransition } from "react-native-reanimated"
import ControlBar from "../components/JournalScreen/ControlBar"
import { EntryDetailModal } from "../components/JournalScreen/EntryDetailModal"
import { JournalEntriesContainer } from "../components/JournalScreen/JournalEntriesContainer"
import { Confirmation } from "../components/PopUps/Confirmation"
import { HeaderOne } from "../components/Text/"
// Context --------------------------------------------------
import { DateContext } from "../context"
/*========================================
        Import Styles
========================================*/
import colors from "../misc/colors"





const Journal = () => {

    const [todaysDate, setTodaysDate] = useState("")

    const getDate = async () => {
        const mm = String(new Date().getMonth() + 1).padStart(2, "0")
        const dd = String(new Date().getDate()).padStart(2, "0")
        const yyyy = new Date().getFullYear()

        setTodaysDate(`${mm}/${dd}/${yyyy}`)
    }

    useEffect(() => {
        getDate()
    }, [])

    // States --------------------------------------------------
    const [journalEntries, setJournalEntries] = useState<Array<object>>([])

    const [selectedEntry, setSelectedEntry] = useState<object>({
        title: "",
        entry: "",
    })

    const [modalVisable, setModalVisable] = useState<boolean>(false)

    const [enableAdditionalSettings, setEnableAdditionalSettings] = useState<boolean>(false)

    // Need sort methods for entries? --------------------------------------------------    

    // get the users journal entries from asyncStorage --------------------------------------------------
    const getUserJournalEntries = async () => {
        const result = await AsyncStorage.getItem("journal")

        if (result === null) return

        const currentJournal = JSON.parse(result)
        setJournalEntries([...currentJournal])
    }
    // remove single entry --------------------------------------------------
    const removeJournalEntry = (id: any) => {
        // @ts-ignore
        const updatedJournalEntries = journalEntries.filter((entry) => entry.id !== id)
        AsyncStorage.setItem("journal", JSON.stringify(updatedJournalEntries))
        setJournalEntries(updatedJournalEntries)

    }
    // remove multiple entries --------------------------------------------------
    const removeSelectedEntries = () => {
        // @ts-ignore
        const updatedJournalEntries = journalEntries.filter((entry) => !selectedEntries.includes(entry.id))

        AsyncStorage.setItem("journal", JSON.stringify(updatedJournalEntries))

        setJournalEntries(updatedJournalEntries)
        handleEnableAdditionalSettigns()
        setShowConfirmation(false)

    }
    // add entry to storage --------------------------------------------------
    const createNewJournalEntry = (title: string, entry: string, entryUpdated: boolean) => {
        // User context.date to get todays date
        let updatedJournalEntries = []
        // @ts-ignore
        if (selectedEntry.id) {

            // @ts-ignore
            if (!title && !entry) {
                // @ts-ignore
                removeJournalEntry(selectedEntry.id)
                return
            } else {

                updatedJournalEntries = journalEntries.map((current => {
                    // @ts-ignore
                    if (current.id === selectedEntry.id) {
                        return {
                            ...current,
                            title: title,
                            entry: entry,
                            updatedOn: todaysDate
                        }
                    }
                    return current
                }))
            }

        } else {
            // If the user pressed create new entry, then pressed back without adding anything.
            if (!title && !entry) return

            const newEntry = {
                id: Date.now(),
                createdOn: todaysDate,
                title,
                entry,
            }
            updatedJournalEntries = [newEntry, ...journalEntries]
        }

        
        updatedJournalEntries.sort((a, b) => a.id < b.id ? 1 : -1)
        
        AsyncStorage.setItem("journal", JSON.stringify(updatedJournalEntries))
        setJournalEntries(() => {return [...updatedJournalEntries]})


    }
    // useEffect --------------------------------------------------
    useEffect(() => {
        // Go into AsyncStorage and get users Journal Entries in date order.
        getUserJournalEntries()
    }, [])

    // SelectedEntries for additional settings --------------------------------------------------
    const [selectedEntries, setSelectedEntries] = useState([])



    const handleEnableAdditionalSettigns = () => {
        if (enableAdditionalSettings) {
            setSelectedEntries([])
            setEnableAdditionalSettings(false)
        } else {

            setEnableAdditionalSettings(true)
        }

    }

    // select entry for detail --------------------------------------------------
    const selectEntry = (entry: any) => {
        setSelectedEntry(entry)
        openEntryDetail()
    }


    // Open/Close Modal --------------------------------------------------
    const openEntryDetail = () => { setModalVisable(true) }
    const closeEntryDetail = () => { setModalVisable(false) }
    // Open/Close Delete Confirmation Modal --------------------------------------------------
    const [showConfirmation, setShowConfirmation] = useState(false)


    return (
        <View style={styles.container}>
            {/* Search/filter bar will go here in the future. */}
            <ControlBar onPlusPress={openEntryDetail} onDeletePress={() => setShowConfirmation(true)} onEditPress={handleEnableAdditionalSettigns} enableAdditionalSettings={enableAdditionalSettings} />

            {/* onDotsPress={handleEnableAdditionalSettigns} */}

            <JournalEntriesContainer
                onLongPress={handleEnableAdditionalSettigns}
                journalEntries={journalEntries}
                removeJournalEntry={removeJournalEntry}
                additionalSettings={enableAdditionalSettings}
                selectEntry={selectEntry}
                selectedEntries={selectedEntries}
                setSelectedEntries={setSelectedEntries}
            />
            <EntryDetailModal
                visible={modalVisable}
                closeCreateNote={closeEntryDetail}
                getDate={getDate}
                selectedEntry={selectedEntry}
                setSelectedEntry={setSelectedEntry}
                createNewJournalEntry={createNewJournalEntry}
                removeJournalEntry={removeJournalEntry}
            />
        <Confirmation visible={showConfirmation} onConfirm={removeSelectedEntries} onCancel={() => setShowConfirmation(false)} message={"Are you sure you want to delete the selected entries?"} />
        </View>
    )
}

export default Journal

const width = Dimensions.get("screen").width

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        paddingBottom: "5%",
        backgroundColor: colors.general.background,
    },
})