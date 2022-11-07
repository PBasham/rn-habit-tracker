/*========================================
        Import Dependencies
========================================*/
import AsyncStorage from "@react-native-async-storage/async-storage"
import React, { FC, useContext, useEffect, useState } from 'react'
import { View, Text, StyleSheet, Modal, TextInput, Dimensions, Pressable, Keyboard } from 'react-native'
import { backgroundOne } from "../../../assets/imgs/images"
import { DateContext } from "../../context"
import colors from "../../misc/colors"
import { AdditionalSettingsBtn, RoundIconBtn, StandardAntBtn } from "../buttons"
import { SettingsBtn } from "../buttons/SettingsBtn"
import { EntrySettingsMenu } from "./EntrySettingsMenu"

interface EntryDetailModalProps {
    visible: boolean
    closeCreateNote: () => void
    getDate: () => void
    selectedEntry: any
    setSelectedEntry: any
    createNewJournalEntry: (title: string, desc: string, entryUpdated: boolean) => void
    removeJournalEntry: (id: any) => void
}

export const EntryDetailModal: FC<EntryDetailModalProps> = ({
    visible,
    closeCreateNote,
    selectedEntry,
    setSelectedEntry,
    createNewJournalEntry,
    removeJournalEntry
}) => {

    const settingOptions = [
        {
            name: "Delete",
            action: () => {
                handleSettingsClose()
                removeJournalEntry(selectedEntry.id)
                handleClose()
            }
        },
    ]

    const [entryUpdated, setEntryUpdated] = useState(false)

    const [settingsMenuOpen, setSettingsMenuOpen] = useState<boolean>(false)

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

    const handleOnChange = (text: string, valueFor: string) => {

        setEntryUpdated(true)

        setSelectedEntry((current) => {
            return {
                ...current,
                [valueFor]: text,
            }
        })
    }


    // Handle Modal --------------------------------------------------
    /*= handle back button click =*/
    const handleClose = () => {
        /* Clear values and close modal */
        setSelectedEntry({
            title: "",
            entry: "",
        })
        closeCreateNote()
    }

    const handleBackPress = () => {
        // first check if there is either a title or detail
        let title = selectedEntry.title.trim()
        let entry = selectedEntry.entry.trim()


        /*
        *
        * If there is a title or an entry -- Create the note
            *  if there has not been an update, just close and don't do anything
            * 
            * if there is no title, but there is an entry, set the title to untitled.
        * 
        *  
        * else if there has been an update delete the note
        * 
         */

        if (title || entry) {

            if (!entryUpdated) {
                handleClose()
                return
            }

            if (!title && entry) { title = "Untitled" }

            createNewJournalEntry(title, entry, entryUpdated)

        } else { // -- !title && !entry
            // if there has been an update, createNote (delete)
            // if (entryUpdated) {
                createNewJournalEntry(title, entry, entryUpdated)
            // }

        }
        // else do nothing
        setEntryUpdated(false)
        // handleSettingsClose()
        handleClose()
    }

    // settings menu --------------------------------------------------
    const handleSettingsOpen = () => {
        // Open menu
        setSettingsMenuOpen(true)
    }
    const handleSettingsClose = () => {
        // close menu
        setSettingsMenuOpen(false)
    }


    return (
        <Modal visible={visible} animationType="fade" >
            <View style={styles.container}>
                <View style={styles.entryInfo}>
                    <Text>Created On: {selectedEntry.createdOn ? selectedEntry.createdOn : todaysDate}</Text>
                    {selectedEntry.updatedOn ? <Text>Updated On: {selectedEntry.createdOn}</Text> : null}
                </View>
                {/* View that will hold the back/save/cancel button | title textInput | AdditionalSettings button */}
                <View style={styles.headerBar}>
                    <StandardAntBtn
                        antIconName="left"
                        size={30}
                        onPress={handleBackPress}
                    />
                    <TextInput
                        value={selectedEntry.title}
                        multiline
                        placeholder="Title"
                        style={[styles.input, styles.title]}
                        onChangeText={(text) => handleOnChange(text, "title")}
                    />

                    {/* Settings Button */}
                    <SettingsBtn
                        size={27}
                        onPress={handleSettingsOpen}
                        style={styles.settingsButton}
                    />
                    <EntrySettingsMenu
                        open={settingsMenuOpen}
                        handleSettingsClose={handleSettingsClose}
                        settingOptions={settingOptions}
                    />
                </View>


                <TextInput
                    value={selectedEntry.entry}
                    multiline
                    placeholder="journal entry..."
                    style={[styles.input, styles.entry]}
                    onChangeText={(text) => handleOnChange(text, "entry")}
                />
            </View>

        </Modal>

    )
}

const width = Dimensions.get("screen").width

const styles = StyleSheet.create({
    container: {
        flex: 1,
        position: "relative",
        alignItems: "center",
        backgroundColor: colors.general.accentBlue,
        zIndex: -1,
    },
    entryInfo: {
        justifyContent: "space-between",
        flexDirection: "row",

        alignSelf: "flex-end",

        padding: 10,
        width: "100%",
    },
    headerBar: {
        /* display stuff */
        flexDirection: "row",
        /* position stuff */
        // alignItems: "flex-start",

        /* box-model stuff */
        width: width,
        minHeight: 60,
        borderBottomWidth: 2,
        borderBottomColor: colors.general.darkTransparent,
    },
    input: {},
    title: {
        flex: 1,
        fontSize: 24,
    },
    settingsButton: {
    },
    entry: {
        textAlign: "left",
        textAlignVertical: "top",
        flex: 1,
        width: width,
        padding: 24,
        fontSize: 18,
    },
    modalBG: {
        position: "absolute",
        height: "100%",
        width: "100%",
        zIndex: 1,
        // backgroundColor: "red",
        opacity: .2,
    },
})