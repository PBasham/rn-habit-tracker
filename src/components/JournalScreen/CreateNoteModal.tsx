/*========================================
        Import Dependencies
========================================*/
import React, { FC, useState } from 'react'
import { View, StyleSheet, Modal, TextInput, Dimensions, Pressable, Keyboard } from 'react-native'
import { backgroundOne } from "../../../assets/imgs/images"
import colors from "../../misc/colors"
import { RoundIconBtn, StandardAntBtn } from "../buttons"

interface CreateNoteModalProps {
    visible: boolean
    closeCreateNote: () => void
    createNewJournalEntry: (title, desc) => void
}

export const CreateNoteModal: FC<CreateNoteModalProps> = ({ visible, closeCreateNote, createNewJournalEntry }) => {


    // You don't need to enter this into state, I will change it after I complete the modal.
    const [noteTitle, setNoteTitle] = useState<string>("")
    const [noteDesc, setNoteDesc] = useState<string>("")



    const handleOnChange = (text, valueFor) => {
        if (valueFor === "title") setNoteTitle(text)
        if (valueFor === "desc") setNoteDesc(text)
    }


    // Handle Modal --------------------------------------------------
    const handleClose = () => {
        /* Clear values and close modal */
        setNoteTitle("")
        setNoteDesc("")
        closeCreateNote()
    }

    const handleAddNote = () => {
        // Add the note
        createNewJournalEntry(noteTitle, noteDesc)
        /* Clear the values and close modal */
        handleClose()
    }


    return (
        <Modal visible={visible} animationType="fade" >
            <View style={styles.container}>
                <TextInput
                    value={noteTitle}
                    multiline
                    placeholder="Title"
                    style={[styles.input, styles.title]}
                    onChangeText={(text) => handleOnChange(text, "title")}
                />
                <TextInput
                    value={noteDesc}
                    multiline
                    placeholder="Note"
                    style={[styles.input, styles.description]}
                    onChangeText={(text) => handleOnChange(text, "desc")}
                />
                {/* Container for Submit / Cancel buttons */}
                <View style={styles.buttonsContainer}>
                    <RoundIconBtn style={styles.closeModalBtn} antIconName="close" onPress={handleClose} size={24} />
                    <RoundIconBtn antIconName="check" style={styles.addButton} onPress={handleAddNote} />
                </View>
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
        paddingTop: "25%",
        paddingHorizontal: 50,
        backgroundColor: colors.general.accentBlue,
    },
    input: {
        paddingHorizontal: 10,
        paddingVertical: 5,
        width: width - 25,
        fontSize: 18,
        color: colors.general.dark,
    },
    title: {
        minHeight: 40,
        marginBottom: 15,
        fontSize: 24,
        borderBottomWidth: 2,
        borderBottomColor: colors.general.darkTransparent,
        
    },
    description: {
        textAlign: "left",
        textAlignVertical: "top",
        justifyContent: "flex-start",
        alignItems: "flex-start",
        flex: 1,
    },
    modalBG: {
        flex: 1,
        zIndex: -1,
    },
    buttonsContainer: {
        position: "absolute",
        bottom: 0,
        right: 0,
        flexDirection: "row",
        marginRight: 25,
        marginBottom: "10%",
    },
    addButton: {
        marginLeft: 20,
    },
    closeModalBtn: {},
})