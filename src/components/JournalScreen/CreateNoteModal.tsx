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



    const [noteTitle, setNoteTitle] = useState<string>("")
    const [noteDesc, setNoteDesc] = useState<string>("")



    const handleOnChange = (text, valueFor) => {
        if (valueFor === "title") setNoteTitle(text)
        if (valueFor === "desc") setNoteDesc(text)
    }

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

    console.log(noteTitle, noteDesc);
    

    return (
        <Modal visible={visible} animationType="slide" >
            <View style={styles.container}>
                <StandardAntBtn style={styles.closeModalBtn} antIconName="down" onPress={handleClose} size={24} />
                <TextInput
                value={noteTitle}
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
                <RoundIconBtn antIconName="check" style={styles.addButton} onPress={handleAddNote}/>
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
    },
    input: {
        paddingHorizontal: 10,
        paddingVertical: 5,
        width: width - 50,
        fontSize: 16,
        color: colors.general.dark,
        borderBottomWidth: 2,
        borderBottomColor: colors.general.darkTransparent,
        backgroundColor: colors.general.accentBlue,
    },
    title: {
        height: 40,
        marginBottom: 15,
        fontWeight: "bold",
    },
    description: {
        textAlign: "left",
        justifyContent: "flex-start",
        alignItems: "flex-start",
        minHeight: 100,
    },
    closeModalBtn: {
        position: "absolute",
        top: 0,
        left: 0,
        marginTop: 20,
        marginLeft: 25,
    },
    modalBG: {
        flex: 1,
        zIndex: -1,
    },
    addButton: {
        position: "absolute",
        top: 0,
        right: 0,
        marginTop: 20,
        marginRight: 25,
        backgroundColor: colors.button.lightBlue,
    },
})