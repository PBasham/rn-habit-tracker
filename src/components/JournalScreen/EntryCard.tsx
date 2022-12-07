/*========================================
        Import Dependencies
========================================*/
import { FC, useState } from "react"
import { Pressable, StyleSheet, Text, View, Dimensions } from 'react-native'
// components --------------------------------------------------
import { CheckBoxRnd } from "../CheckBox"
// Styling --------------------------------------------------
import colors from "../../misc/colors"

interface EntryCardProps {
    onPress: (arg0:any) => void
    onLongPress: () => void
    selected: boolean
    addToSelected: (id: any) => void
    removeFromSelected: (id: number) => void
    removeJournalEntry: (id: any) => void
    additionalSettings: Boolean
    note: any
}

const EntryCard: FC<EntryCardProps> = (props: EntryCardProps) => {

    const { onPress, onLongPress, selected, addToSelected, removeFromSelected, removeJournalEntry, additionalSettings, note } = props

    const handleDeleteEntry = (id: any) => {
        removeJournalEntry(id)
    }

    const checkboxPress = () => {
        if (selected) {
            removeFromSelected(note.id)
        } else {
            addToSelected(note.id)
        }
    }


    // When long press, add the current to selected in addition to making enable additional settings true.


    // Add to selected --------------------------------------------------

    // Remove from selected --------------------------------------------------


    return (
        <View style={styles.outerContaienr}>
            {additionalSettings ? 
            <CheckBoxRnd onPress={checkboxPress} checked={selected} />
            : null }
            <Pressable onPress={additionalSettings ? checkboxPress : () => onPress(note)} style={[styles.container]} onLongPress={onLongPress} >
                <View style={[styles.note, additionalSettings ? styles.additionalSettings : null]}>
                    <Text numberOfLines={2} style={styles.noteTitle}>{note.title}</Text>
                    <Text style={styles.noteDate}>{note.createdOn}</Text>
                </View>
            </Pressable>
        </View>
    )
}

export default EntryCard

const viewWidth = Dimensions.get("screen").width * .0

const styles = StyleSheet.create({
    outerContaienr: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    checkbox: {
        marginHorizontal: 5,
        backgroundColor: "red",
    },
    container: {
        flex: 1,
        paddingTop: 8,
        paddingBottom: 8,
    },
    note: {
        padding: "3%",
        borderRadius: 5,

        minHeight: 60,
        width: "100%",

        backgroundColor: colors.general.light,

    },
    noteTitle: {
        textAlign: "left",
        fontSize: 18,
        color: colors.text.dark,
        opacity: .8,
        paddingBottom: "1%",
        borderBottomWidth: 1,
        borderBottomColor: colors.general.dark,
    },
    noteDate: {
        marginTop: "auto",
        alignSelf: "flex-end",
        paddingTop: "1%",
        color: colors.text.dark,
        fontSize: 16,
    },
    additionalSettings: {
        borderWidth: 1,
        borderColor: "rgb(200,200,200)",
        elevation: 10,
    },
})