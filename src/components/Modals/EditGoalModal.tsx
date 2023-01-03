/*========================================
        Import Dependencies
========================================*/
import React, { FC, useState } from 'react'
import { View, Text, StyleSheet, Modal, Dimensions } from 'react-native'
import colors from "../../misc/colors"
import { fonts } from "../../misc/fonts"
import { getDate } from "../../misc/helpers"
import ControlBar from "../ControlBar/ControlBar"
import { HeaderOne, HeaderTwo } from "../Text"

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
        specificTime: boolean
        dueTime: string
        // days: string[]
        complete: boolean
        // category?: string
    }
}

export const EditGoalModal: FC<EditGoalModalProps> = (props: EditGoalModalProps) => {
    const { visible, closeModal, selectedGoal } = props

    const [goalUpdated, setGoalUpdated] = useState(false)

    const handleEdit = () => {

    }

    return (
        <Modal visible={visible} transparent={true} >
            <View style={styles.container}>
                <ControlBar onBackPress={closeModal} onDotsPress
                    ={() => null} />
                <View style={styles.contentContainer}>
                    <HeaderOne
                        content="Your goal is to: "
                        textAlign="left" />
                    <Text style={[styles.text, styles.marginTop]}>{`${selectedGoal.action} ${selectedGoal.goalQty} ${selectedGoal.what} by ${selectedGoal.dueDate}${selectedGoal.specificTime ? ` at ${selectedGoal.dueTime}` : ``}`}</Text>
                    {selectedGoal.dueDate < getDate() ? null : <>
                        <HeaderOne
                            style={styles.marginTop}
                            content="Your goal is currently past due."
                            textAlign="left" />
                        <HeaderTwo
                            style={styles.marginTop}
                            content="No need to worry, You can still work towards this goal!"
                            textAlign="left" />
                    </>}
                </View>
            </View>
        </Modal>
    )
}

const width = Dimensions.get("screen").width

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",

        backgroundColor: colors.general.background
    },
    contentContainer: {
        flex: 1,

        marginTop: "20%",
        width: width - 50,
    },
    text: {
        fontSize: fonts.body.size,
    },
    marginTop: {
        marginTop: 10,
    }
})