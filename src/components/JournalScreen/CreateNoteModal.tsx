/*========================================
        Import Dependencies
========================================*/
import React, { FC } from 'react'
import { View, StyleSheet, Modal } from 'react-native'
import { RoundIconBtn, StandardAntBtn } from "../buttons"

interface CreateNoteModalProps {
    visible: boolean
    closeNoteDetail: () => void
}

export const CreateNoteModal: FC<CreateNoteModalProps> = ({ visible, closeNoteDetail }) => {

    return (
        <Modal visible={visible} style={styles.container} animationType="slide" >
            <StandardAntBtn style={styles.closeModalBtn} antIconName="down" onPress={closeNoteDetail} size={24} />
        </Modal>
    )
}

const styles = StyleSheet.create({
    container: {

    },
    closeModalBtn: {
        position: "absolute",
        top: 0,
        left: 0,
        marginTop: 20,
        marginLeft: 25,
    }
})