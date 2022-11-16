/*========================================
        Import Dependencies
========================================*/
import React, { FC } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { rootCertificates } from "tls"
import colors from "../../misc/colors"
import { CheckBox } from "../CheckBox/CheckBox"

interface GoalCardProps {
    goal: {
        id: number
        what: string
        qty: number
        goalQty: number
        timeType: string
        time: string
        days: string[]
        complete: boolean
        category: string
    }
    onPress: (updatedGoal: any) => void
    handleMarkComplete: (goalId: number) => void
}

export const GoalCard: FC<GoalCardProps> = ({ goal, onPress, handleMarkComplete }) => {

    /** goal keys:
     * 
     * id 123
     * what ""
     * goalQty 1
     * qty 0
     * timeType ""
     * time ""
     * days []
     * complete false
     */


    return (
        // change style if completed.
        <View style={[styles.goalCard, goal.complete ? styles.goalCard_complete : null]}>
            <View style={styles.firstSection}>
                <Text numberOfLines={1} style={[styles.category, {color: goal.complete ? colors.text.light : null}]} >{goal.category}</Text>
                <Text numberOfLines={2} style={[styles.what, goal.complete ? styles.goalCard_completeText : null]} >{goal.what}</Text>
            </View>
            <Text style={[styles.qty, {color: goal.complete ? colors.text.light : null}]} >{goal.qty}/{goal.goalQty}</Text>
            <CheckBox onPress={() => handleMarkComplete(goal.id)} checked={goal.complete} />
            {/* checkbox for if it's complete or not */}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {

    },
    goalCard: {

        position: "relative",

        flexDirection: "row",

        marginVertical: 10,
        padding: 20,
        backgroundColor: colors.general.light,

        fontSize: 18,

        elevation: 5,
        shadowColor: colors.general.shadow,
    },
    goalCard_complete: {
        backgroundColor: colors.general.darkTransparent,
    },
    goalCard_completeText: {
        color: colors.text.light,
        textDecorationLine: "line-through",
    },
    firstSection: {
        flexDirection: "column",

        width: "70%",
    },
    category: {
        fontSize: 16,
        color: colors.text.darkTransparent,
        top: -10,
    },
    what: {
        fontSize: 20,
        color: colors.text.dark,
    },
    qty: {
        // marginLeft: "auto",
        padding: 5,
        fontSize: 16,
        textAlign: "center",
        textAlignVertical: "center",
        width: "20%",

        color: colors.text.darkTransparent,
    },
    status: {
    },
})