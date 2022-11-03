/*========================================
        Import Dependencies
========================================*/
import { FC, useState } from "react"
import { Dimensions, FlatList, StyleSheet, Text, View } from 'react-native'
/*========================================
        Import Components
========================================*/
import NoteCard from "./NoteCard"
import { RoundIconBtn } from "../buttons"
import colors from "../../misc/colors"


interface NotesContainerProps {
    additionalSettings: boolean
    journalEntries: object
}

export const NotesContainer: FC<NotesContainerProps> = ({ additionalSettings, journalEntries }) => {

    const onPress = (note: any) => {
        console.log("Note: ", note)
    }

    return (
        /* This will be a map of the users journal entries once I've set that up. */
        <FlatList
            style={styles.notesContainer}
            // @ts-ignore
            data={journalEntries}
            keyExtractor={item => item.id.toString()}
            renderItem={({ item }) =>
                <NoteCard
                    additionalSettings={additionalSettings}
                    note={item}
                    onPress={onPress}
                />}
        />
    )
}

const width = Dimensions.get("screen").width

const styles = StyleSheet.create({
    notesContainer: {
        flex: 1,
        flexDirection: "column",
        width: width - 50,
    },

})