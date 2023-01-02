/*========================================
        Import Dependencies
========================================*/
import React, { FC, useState } from 'react'
import { View, Text, Pressable, StyleSheet } from 'react-native'
// components --------------------------------------------------
import { CheckBox } from "../CheckBox/CheckBox"
// styling --------------------------------------------------
import colors from "../../misc/colors"
// helpers --------------------------------------------------
import { getDate } from "../../misc/helpers"

interface GoalCardProps {
    goal: {
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
    onPress: (goal: any) => void
    handleMarkComplete: (goalId: number) => void
}

export const GoalCard: FC<GoalCardProps> = ({ goal, onPress, handleMarkComplete }) => {

    /** goal keys:
     * 
     * id: 123,
     * createdOn: "1/2/3",
     * what: "Wake up at 6am",
     * qty: 0,
     * goalQty: 3,
     * timeType: "Weekdays",
     * time: "6:00am",
     * days: ["Mon", "Tue", "Wed", "Thu", "Fri"],
     * complete: false,
     * category: "Willpower",
     */

    const [pastDue, setPastDue] = useState(() => {
        return new Date(goal.dueDate) < new Date(getDate())
    })

    /**TODO:
         * [] Add 'red' 'past due' text on top of card?
     */


    return (
        // change style if completed.
        <Pressable
            onPress={() => onPress(goal)}
            style={[
                styles.goalCard,
                goal.complete ? styles.goalCard_complete : null,
                !goal.complete && pastDue ? styles.pastDue : null,
            ]}>
            <View style={styles.firstSection}>
                <Text numberOfLines={2} style={[styles.what, goal.complete ? styles.goalCard_completeText : null]} >{goal.action} {goal.goalQty} {goal.what}</Text>
                <Text numberOfLines={1} style={[styles.category, { color: goal.complete ? colors.text.light : null }]} >{goal.dueDate}</Text>
            </View>
            <Text style={[styles.qty, { color: goal.complete ? colors.text.light : null }]} >{goal.qty}/{goal.goalQty}</Text>
            <CheckBox onPress={() => handleMarkComplete(goal.id)} checked={goal.complete} />
            {/* checkbox for if it's complete or not */}
        </Pressable>
    )
}

const styles = StyleSheet.create({
    container: {

    },
    goalCard: {

        position: "relative",

        flexDirection: "row",

        marginHorizontal: 20,
        marginVertical: 10,

        height: 75,
        padding: 20,
        borderRadius: 15,
        backgroundColor: colors.general.light,

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
        // top: -10,
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
    pastDue: {
        borderColor: "red",
        borderWidth: 1,
    },
})