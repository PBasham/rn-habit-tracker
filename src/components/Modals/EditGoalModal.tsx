/*========================================
        Import Dependencies
========================================*/
import React, { FC } from 'react'
import { View, Text, StyleSheet, Modal } from 'react-native'
import colors from "../../misc/colors"
import ControlBar from "../ControlBar/ControlBar"

interface EditGoalModalProps {
    visible: boolean
    closeModal: any
    selectedGoal: object
}

export const EditGoalModal: FC<EditGoalModalProps> = (props: EditGoalModalProps) => {
    const { visible, closeModal, selectedGoal } = props
    console.log(selectedGoal)
    return (
        <Modal visible={visible} transparent={true} >
            <View style={styles.container}>
            <ControlBar onBackPress={closeModal}/>
            <View style={styles.contentContainer}>
                <Text>{selectedGoal.action}</Text>
            </View>
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.general.background
    },
    contentContainer: {
        flex: 1,
        backgroundColor: "red",
    }
})