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
        // change style if completed.
        <View style={styles.goalCard}>
            <Text style={styles.what} >{goal.what}</Text>
            <Text style={styles.qty} >{goal.qty}/{goal.goalQty}</Text>
            <Text style={styles.status} >{goal.complete}</Text>
            {/* checkbox for if it's complete or not */}
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
        borderWidth: 1,
        borderColor: "pink",
        fontSize: 18,
        // maxWidth: "100%",
    },
    qty: {
        marginLeft: "auto",
        textAlign: "center",
        textAlignVertical: "center",
        borderWidth: 1,
        borderColor: "green",
    },
    status: {
        
        borderWidth: 1,
        borderColor: "blue",
    },
})