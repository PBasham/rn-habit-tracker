/*========================================
        Import Dependencies
========================================*/
import { FC, useState } from "react"
import { Dimensions, FlatList, StyleSheet, Text, View } from 'react-native'
// Components --------------------------------------------------
import EntryCard from "./EntryCard"


interface JournalEntriesContainerProps {
    journalEntries: object
    removeJournalEntry: (id: any) => void
    additionalSettings: boolean
    selectEntry: (entry: any) => void
    selectedEntries: number[]
    setSelectedEntries: any
}

export const JournalEntriesContainer: FC<JournalEntriesContainerProps> = (props: JournalEntriesContainerProps) => {

    const { journalEntries, removeJournalEntry, additionalSettings, selectEntry, selectedEntries, setSelectedEntries } = props


    const addToSelected = (id: number) => {
        setSelectedEntries((current) => {
            return [...current, id]
        })
    }
    const removeFromSelected = (id: number) => {
        setSelectedEntries((current) => {
            return current.filter((currentId) => currentId !== id)
        })
    }

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
                    selected={selectedEntries.includes(item.id)}
                    addToSelected={addToSelected}
                    removeFromSelected={removeFromSelected}
                    removeJournalEntry={removeJournalEntry}
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