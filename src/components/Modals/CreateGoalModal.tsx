// Dependencies --------------------------------------------------
import React from 'react'
import FC, { Modal, StyleSheet, Text, View } from 'react-native'
import colors from "../../misc/colors"
// components --------------------------------------------------
import ControlBar from "../ControlBar/ControlBar"


interface CreateGoalModalProps {
    visible: boolean
    closeGoalModal: () => void
}

export const CreateGoalModal = (props: CreateGoalModalProps) => {
    const { visible, closeGoalModal } = props

    return (
        <Modal visible={visible} animationType="slide" >
            <View style={styles.container} >
            <ControlBar onBackPress={closeGoalModal}/>
            <Text>CreateGoalModal</Text>
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.general.background,
    }
})