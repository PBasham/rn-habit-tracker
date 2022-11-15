/*========================================
        Import Dependencies
========================================*/
import React, { FC } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import colors from "../../misc/colors"

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
    onPress: () => void
}

export const GoalCard: FC<GoalCardProps> = ({ goal }) => {

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
        <View style={styles.goalCard}>
            <Text style={styles.what} >{goal.what}</Text>
            <Text style={styles.qty} >{goal.qty}/{goal.goalQty}</Text>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {

    },
    goalCard: {

        flexDirection: "row",

        marginVertical: 10,
        padding: 20,

        backgroundColor: colors.general.light,

        fontSize: 18,

        elevation: 5,
        shadowColor: colors.general.shadow,
    },
    what: {

    },
    qty: {
        marginLeft: "auto",
    },
})