/*========================================
        Import Dependencies
========================================*/
import React, { FC, useState } from 'react'
import { View, StyleSheet, Modal, TextInput, Dimensions, Pressable, Keyboard } from 'react-native'
import { backgroundOne } from "../../../assets/imgs/images"
import colors from "../../misc/colors"
import { AdditionalSettingsBtn, RoundIconBtn, StandardAntBtn } from "../buttons"
import { SettingsBtn } from "../buttons/SettingsBtn"

interface EntryDetailModalProps {
    visible: boolean
    closeCreateNote: () => void
    createNewJournalEntry: (title: string, desc: string) => void
}

export const EntryDetailModal: FC<EntryDetailModalProps> = ({ visible, closeCreateNote, createNewJournalEntry }) => {


    const [settingsMenuOpen, setSettingsMenuOpen] = useState(false)

    // You don't need to enter this into state, I will change it after I complete the modal.
    const [entryTitle, setNoteTitle] = useState<string>("")
    const [entryDetail, setNoteDesc] = useState<string>("")



    const handleOnChange = (text: string, valueFor: string) => {
        if (valueFor === "title") setNoteTitle(text)
        if (valueFor === "desc") setNoteDesc(text)
    }


    // Handle Modal --------------------------------------------------
    /*= handle back button click =*/
    const handleClose = () => {
        /* Clear values and close modal */
        setNoteTitle("")
        setNoteDesc("")
        closeCreateNote()
    }

    const handleBackPress = () => {
        // first check if there is either a title or detail
        if (entryTitle.trim() !== "" || entryDetail.trim() !== "") {
            // if yes then save the entry into the user Journal AsyncStorage
            // save note / update note
            createNewJournalEntry(entryTitle, entryDetail)
        }
        // else do nothing
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



    const handleAddNote = () => {
        // Add the note
        createNewJournalEntry(entryTitle, entryDetail)
        /* Clear the values and close modal */
        handleClose()
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
                        value={entryTitle}
                        multiline
                        placeholder="Title"
                        style={[styles.input, styles.title]}
                        onChangeText={(text) => handleOnChange(text, "title")}
                    />
                    {/* Settigngs Button */}
                    <SettingsBtn
                        size={27}
                        onPress={() => console.log("Show settings for entry!")}
                        style={styles.settingsButton}
                    />
                </View>
                <TextInput
                    value={entryDetail}
                    multiline
                    placeholder="journal entry..."
                    style={[styles.input, styles.entry]}
                    onChangeText={(text) => handleOnChange(text, "desc")}
                />
                {/* Container for Submit / Cancel buttons */}
                {/* <View style={styles.buttonsContainer}>
                    <RoundIconBtn style={styles.closeModalBtn} antIconName="close" onPress={handleClose} size={24} />
                    <RoundIconBtn antIconName="check" style={styles.addButton} onPress={handleAddNote} />
                </View> */}
            </View>
            <Pressable onPress={() => Keyboard.dismiss()} style={[styles.modalBG, StyleSheet.absoluteFillObject]} />
        </Modal>
    )
}

const width = Dimensions.get("screen").width

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        backgroundColor: colors.general.accentBlue,
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
        // minHeight: 40,
        // marginVertical: 5,
    },
    settingsButton: {
        // marginLeft: "auto",
        // paddingRight: 24,
        // paddingLeft: 12,
    },
    entry: {
        textAlign: "left",
        textAlignVertical: "top",
        flex: 1,
        width: width,
        padding: 24,
        fontSize: 18,
    },
    // input: {
    //     width: width,
    //     fontSize: 18,
    //     color: colors.general.dark,
    // },
    // title: {
    //     minHeight: 40,
    //     marginBottom: 15,
    //     fontSize: 24,
    //     borderBottomWidth: 2,
    //     borderBottomColor: colors.general.darkTransparent,

    // },
    // description: {
    //     justifyContent: "flex-start",
    //     alignItems: "flex-start",
    //     flex: 1,
    // },
    modalBG: {
        flex: 1,
        zIndex: -1,
    },
    // buttonsContainer: {
    //     position: "absolute",
    //     bottom: 0,
    //     right: 0,
    //     flexDirection: "row",
    //     marginRight: 25,
    //     marginBottom: "10%",
    // },
    // addButton: {
    //     marginLeft: 20,
    // },
})