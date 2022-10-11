/*========================================
        Import Dependencies
========================================*/
import { FC } from "react"
import { Dimensions, StyleSheet, Text, View } from 'react-native'
/*========================================
        Import Components
========================================*/
import NoteCard from "./NoteCard"
import { RoundIconBtn } from "../buttons"
import colors from "../../misc/colors"


interface NotesContainerProps {
    additionalSettings: Boolean
    JournalEntries: Object
}

export const NotesContainer: FC<NotesContainerProps> = ({ additionalSettings, JournalEntries }) => {

    const onPress = () => {
        console.log("I've been pressed")
    }

    const openNoteDetail = () => {
        console.log("Opening note detail!")
    }

    return (
        <View style={styles.notesContainer}>
            {/* Flatlist */}
            {/* This will be a map of the users journal entries once I've set that up. */}
            <NoteCard additionalSettings={additionalSettings} onPress={openNoteDetail}/>
            <NoteCard additionalSettings={additionalSettings} onPress={openNoteDetail}/>
            <NoteCard additionalSettings={additionalSettings} onPress={openNoteDetail}/>
            <NoteCard additionalSettings={additionalSettings} onPress={openNoteDetail}/>
            <NoteCard additionalSettings={additionalSettings} onPress={openNoteDetail}/>
        </View>
    )
}

const width = Dimensions.get("screen").width

const styles = StyleSheet.create({
    notesContainer: {
        flex: 1,
        flexDirection: "column",
        // flexWrap: "wrap",
        alignItems: "flex-start",
        width: width,
    },

})