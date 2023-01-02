/*========================================
        Import Dependencies
========================================*/
import React, { FC } from 'react'
import { View, Text, StyleSheet, Modal } from 'react-native'
import colors from "../../misc/colors"
import { fonts } from "../../misc/fonts"
import ControlBar from "../ControlBar/ControlBar"

interface EditGoalModalProps {
    visible: boolean
    closeModal: any
    selectedGoal: {
        id: number
        action: string
        what: string
        qty: number
        goalQty: number
        // timeType: string
        dueDate: string
        dueTime: string
        // days: string[]
        complete: boolean
        // category?: string
    }
}

export const EditGoalModal: FC<EditGoalModalProps> = (props: EditGoalModalProps) => {
    const { visible, closeModal, selectedGoal } = props
    
    return (
        <Modal visible={visible} transparent={true} >
            <View style={styles.container}>
            <ControlBar onBackPress={closeModal}/>
            <View style={styles.contentContainer}>
                <Text style={styles.text}>{selectedGoal.action}</Text>
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
    },
    text: {
        fontSize: fonts.body.size,
    },
})