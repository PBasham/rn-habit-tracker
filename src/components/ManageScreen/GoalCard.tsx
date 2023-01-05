/*========================================
        Import Dependencies
========================================*/
import React, { FC, useEffect, useState } from 'react'
import { View, Text, Pressable, StyleSheet, Dimensions } from 'react-native'
// components --------------------------------------------------
import { CheckBox } from "../CheckBox/CheckBox"
// styling --------------------------------------------------
import colors from "../../misc/colors"
// helpers --------------------------------------------------
import { formatDate, getDate } from "../../misc/helpers"
import { color } from "react-native-reanimated"
import { emotionColors } from "../../misc/emotionColors"

interface GoalCardProps {
    goal: {
        id: number

        title: string
        desc: string

        color: string
        category: string

        qty: number
        goalQty: number

        dueDate: string

        complete: boolean
        // days: string[]
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
        // if (goal.specificTime) {
        //     let date = getDate()
        //     let ghh = parseInt(goal.dueTime.slice(0, 2))
        //     let gmm = parseInt(goal.dueTime.slice(3, 5))
        //     let gtt = goal.dueTime.slice(5)
        //     if (gtt === "AM") ghh -= 12
        //     let tempDate = new Date(goal.dueDate)
        //     tempDate.setHours(ghh, gmm)
        //     return tempDate < getDate()
        // }
        return new Date(goal.dueDate) < new Date(formatDate(getDate()))
    })

    return (
        // change style if completed.
        <Pressable style={[styles.goalCardOuter, {backgroundColor: colors.cardColors[goal.color]}]} onPress={() => onPress(goal)}>
            <View style={[
                styles.goalCard,
                goal.complete ? styles.goalCard_complete : null,
                !goal.complete && pastDue ? styles.pastDue : null,
            ]}>
                <View style={styles.firstSection}>
                    <Text
                        numberOfLines={2}
                        style={[styles.what, goal.complete ? styles.goalCard_completeText : null]}
                    >
                        {goal.title}
                    </Text>
                    <Text
                        numberOfLines={1}
                        style={[
                            styles.dueDate,
                            { color: goal.complete ? colors.text.light : null }]} >
                        {`${goal.dueDate}${goal.specificTime ? ` @ ${goal.dueTime}` : ``}`}
                    </Text>
                </View>
                <Text style={[styles.qty, { color: goal.complete ? colors.text.light : null }]} >{goal.qty}/{goal.goalQty}</Text>
                <CheckBox onPress={() => handleMarkComplete(goal.id)} checked={goal.complete} />
                {/* checkbox for if it's complete or not */}
            </View>
        </Pressable>
    )
}

const width = Dimensions.get("screen").width

const styles = StyleSheet.create({
    container: {

    },
    goalCardOuter: {
        width: width - 40,
        height: 60,
        paddingLeft: 10,
        marginVertical: 5,
    },
    goalCard: {
        flex: 1,
        position: "relative",

        flexDirection: "row",

        paddingVertical: 5,
        paddingHorizontal: 10,
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
    dueDate: {
        marginTop: "auto",
        fontSize: 16,
        color: colors.text.darkTransparent,
        // top: -10,
    },
    what: {
        fontSize: 18,
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