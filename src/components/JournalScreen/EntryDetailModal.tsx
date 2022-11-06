/*========================================
        Import Dependencies
========================================*/
import AsyncStorage from "@react-native-async-storage/async-storage"
import React, { FC, useEffect, useState } from 'react'
import { View, StyleSheet, Modal, TextInput, Dimensions, Pressable, Keyboard } from 'react-native'
import { backgroundOne } from "../../../assets/imgs/images"
import colors from "../../misc/colors"
import { AdditionalSettingsBtn, RoundIconBtn, StandardAntBtn } from "../buttons"
import { SettingsBtn } from "../buttons/SettingsBtn"
import { EntrySettingsMenu } from "./EntrySettingsMenu"

interface EntryDetailModalProps {
    visible: boolean
    closeCreateNote: () => void
    selectedEntry: any
    setSelectedEntry: any
    createNewJournalEntry: (title: string, desc: string) => void
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
            name: "Option 1",
            action: () => console.log("An Option")
        },
        {
            name: "Delete",
            action: () => {
                handleSettingsClose()
                removeJournalEntry(selectedEntry.id)
                handleClose()
            }
        },
    ]


    const [settingsMenuOpen, setSettingsMenuOpen] = useState<boolean>(false)



    const handleOnChange = (text: string, valueFor: string) => {
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
        if (selectedEntry.title.trim() || selectedEntry.entry.trim()) {
            // if yes then save the entry into the user Journal AsyncStorage
            // save note / update note
            createNewJournalEntry(selectedEntry.title || "Untitled", selectedEntry.entry)
        }
        // else do nothing
        handleSettingsClose()
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
    headerBar: {
        /* display stuff */
        flexDirection: "row",
        /* position stuff */
        // alignItems: "flex-start",

        /* box-model stuff */
        paddingTop: 10,
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