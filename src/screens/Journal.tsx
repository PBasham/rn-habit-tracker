/*========================================
        Import Dependencies
========================================*/
import AsyncStorage from "@react-native-async-storage/async-storage"
import { useEffect, useState, useContext } from "react"
import { Dimensions, StyleSheet, Text, View } from 'react-native'
import { combineTransition } from "react-native-reanimated"
import ControlBar from "../components/JournalScreen/ControlBar"
import { CreateNoteModal } from "../components/JournalScreen/CreateNoteModal"
import { NotesContainer } from "../components/JournalScreen/NotesContainer"
import { HeaderOne } from "../components/Text/"
// Context --------------------------------------------------
import { DateContext } from "../context"
/*========================================
        Import Styles
========================================*/
import colors from "../misc/colors"





const Journal = () => {

    const todaysDate = useContext(DateContext)

    // States --------------------------------------------------
    const [journalEntries, setJournalEntries] = useState<Array<Object>>([])

    const [modalVisable, setModalVisable] = useState<boolean>(false)

    const [enableAdditionalSettings, setEnableAdditionalSettings] = useState<boolean>(false)


    const getUserJournalEntries = async () => {
        const result = await AsyncStorage.getItem("journal")
        console.log("Journal Entries: ", result)

        if (result === null) return

        const currentJournal = JSON.parse(result)
        setJournalEntries([...currentJournal])
    }

    // sdfsfsdfs --------------------------------------------------

    const createNewJournalEntry = (title: string, desc: string) => {
        // User context.date to get todays date

        const newEntry = {
            id: Date.now(),
            createdOn: todaysDate,
            title,
            desc,
        }
        console.log("Journal: ", journalEntries);
        const updatedJournalEntries = [...journalEntries, newEntry]
        console.log("Updated Journal: ", updatedJournalEntries);
        AsyncStorage.setItem("journal", JSON.stringify(updatedJournalEntries))
        setJournalEntries(updatedJournalEntries)
    }

    // useEffect --------------------------------------------------
    useEffect(() => {
        // Go into AsyncStorage and get users Journal Entries in date order.
        getUserJournalEntries()
    }, [])


    const handleEnableAdditionalSettigns = () => {
        setEnableAdditionalSettings(!enableAdditionalSettings)
    }


    // Open/Close Modal --------------------------------------------------
    const openCreateNote = () => {
        setModalVisable(true)
    }
    const closeCreateNote = () => {
        setModalVisable(false)
    }
    //  --------------------------------------------------

    return (
        <View style={styles.container}>
            <HeaderOne content={"Your thoughts on today?"} style={{ width: width - 50 }} color={colors.text.darkTransparent} />
            {/* Search/filter bar will go here in the future. */}
            <ControlBar openNoteDetail={openCreateNote} enableAdditionalSettings={enableAdditionalSettings} enableSettigns={handleEnableAdditionalSettigns} />
            <NotesContainer
                journalEntries={journalEntries}
                additionalSettings={enableAdditionalSettings}
            />
            <CreateNoteModal visible={modalVisable} closeCreateNote={closeCreateNote} createNewJournalEntry={createNewJournalEntry} />
        </View>
    )
}

export default Journal

const width = Dimensions.get("screen").width

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        paddingTop: "15%",
        paddingBottom: "5%",
        backgroundColor: colors.general.background,
    },
})