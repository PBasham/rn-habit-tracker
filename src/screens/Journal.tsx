/*========================================
        Import Dependencies
========================================*/
import AsyncStorage from "@react-native-async-storage/async-storage"
import { execArgv } from "process"
import { useEffect, useState, useContext } from "react"
import { Dimensions, StyleSheet, Text, View } from 'react-native'
import ControlBar from "../components/JournalScreen/ControlBar"
import { EntryDetailModal } from "../components/JournalScreen/EntryDetailModal"
import { JournalEntriesContainer } from "../components/JournalScreen/JournalEntriesContainer"
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

    // get the users journal entries from asyncStorage --------------------------------------------------
    const getUserJournalEntries = async () => {
        const result = await AsyncStorage.getItem("journal")
        console.log("Journal Entries: ", result)

        if (result === null) return

        const currentJournal = JSON.parse(result)
        setJournalEntries([...currentJournal])
    }
    // remove single entry --------------------------------------------------
    const removeJournalEntry = (id: any) => {

        console.log("WooHoo!")
        // @ts-ignore
        const updatedJournalEntries = journalEntries.filter((entry) => entry.id !== id)

        console.log("journalEntries: ", journalEntries, "\n")
        console.log("updatedJournalEntries: ", updatedJournalEntries, "\n")


        AsyncStorage.setItem("journal", JSON.stringify(updatedJournalEntries))
        setJournalEntries(updatedJournalEntries)

    }
    // remove multiple entries --------------------------------------------------
    const removeSelectedEntries = (arrSelected: any) => {

        console.log("I'm in removeSelectedEntries()")
        // @ts-ignore
        // const updatedJournalEntries = journalEntries.filter((entry) => entry.id !== id)

        // console.log("journalEntries: ", journalEntries, "\n")
        // console.log("updatedJournalEntries: ", updatedJournalEntries, "\n")


        // AsyncStorage.setItem("journal", JSON.stringify(updatedJournalEntries))
        // setJournalEntries(updatedJournalEntries)

    }
    // add entry to storage --------------------------------------------------
    const createNewJournalEntry = (title: string, entry: string, entryUpdated: boolean) => {
        // User context.date to get todays date
        console.log(selectedEntry)
        let updatedJournalEntries = []
        // @ts-ignore
        if (selectedEntry.id) {
            console.log("Existing entry")

            // @ts-ignore
            if (!title && !entry) {
                // @ts-ignore
                console.log(selectEntry.id)
                // @ts-ignore
                removeJournalEntry(selectedEntry.id)
                return
            } else {

                updatedJournalEntries = journalEntries.map((current => {
                    // @ts-ignore
                    if (current.id === selectedEntry.id) {
                        console.log("Found it")
                        
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
            
            console.log("New entry")
            const newEntry = {
                id: Date.now(),
                createdOn: todaysDate,
                title,
                entry,
            }
            console.log(newEntry)
            updatedJournalEntries = [...journalEntries, newEntry]
        }


        console.log("updatedJournalEntries: ", updatedJournalEntries)

        AsyncStorage.setItem("journal", JSON.stringify(updatedJournalEntries))
        setJournalEntries(updatedJournalEntries)


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
        console.log(`Selected entry: `, entry)
        setSelectedEntry(entry)
        openEntryDetail()
    }


    // Open/Close Modal --------------------------------------------------
    const openEntryDetail = () => { setModalVisable(true) }
    const closeEntryDetail = () => { setModalVisable(false) }
    //  --------------------------------------------------

    return (
        <View style={styles.container}>
            {/* Search/filter bar will go here in the future. */}
            <ControlBar  onPlusPress={openEntryDetail} onEditPress={handleEnableAdditionalSettigns} enableAdditionalSettings={enableAdditionalSettings}  />

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