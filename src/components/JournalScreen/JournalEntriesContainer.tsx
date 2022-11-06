/*========================================
        Import Dependencies
========================================*/
import { FC, useState } from "react"
import { Dimensions, FlatList, StyleSheet, Text, View } from 'react-native'
// Components --------------------------------------------------
import EntryCard from "./EntryCard"


interface JournalEntriesContainerProps {
    additionalSettings: boolean
    journalEntries: object
    selectEntry: (entry: any) => void
}

export const JournalEntriesContainer: FC<JournalEntriesContainerProps> = ({ additionalSettings, journalEntries, selectEntry }) => {

    return (
        /* This will be a map of the users journal entries once I've set that up. */
        <FlatList
            style={styles.JournalEntriesContainer}
            // @ts-ignore
            data={journalEntries}
            keyExtractor={item => item.id.toString()}
            renderItem={({ item }) =>
                <EntryCard
                    additionalSettings={additionalSettings}
                    note={item}
                    onPress={selectEntry}
                />}
        />
    )
}

const width = Dimensions.get("screen").width

const styles = StyleSheet.create({
    JournalEntriesContainer: {
        flex: 1,
        flexDirection: "column",
        width: width - 50,
    },

})