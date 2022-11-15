/*========================================
        Import Dependencies
========================================*/
import React, { FC } from 'react'
import { View, Text, StyleSheet } from 'react-native'
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
        <View style={styles.goalCard}>
            <Text style={styles.what} >{goal.what}</Text>
            <Text style={styles.qty} >{goal.qty}/{goal.goalQty}</Text>
            <CheckBox onPress={() => handleMarkComplete(goal.id)} checked={goal.complete}  />
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
    what: {
        borderWidth: 1,
        borderColor: "pink",
        fontSize: 18,
        width: "70%",
    },
    qty: {
        // marginLeft: "auto",
        padding: 5,
        fontSize: 16,
        textAlign: "center",
        textAlignVertical: "center",
        borderWidth: 1,
        borderColor: "green",
        width: "20%",
    },
    status: {
        
        borderWidth: 1,
        borderColor: "blue",
    },
})