/*========================================
        Import Dependencies
========================================*/
import React, { FC } from 'react'
import { View, StyleSheet } from 'react-native'
import { HeaderOne, HeaderTwo } from "../Text"
import { GoalCard } from "./GoalCard"

interface GoalContainerProps {
    header: string
    headerTwo: string
    filteredList: any
    containerStyle?: object
    onGoalPress: (goal: object) => void
    handleMarkComplete: (goalId: any) => void
}

export const GoalContainer: FC<GoalContainerProps> = (props: GoalContainerProps) => {

    const { header, headerTwo, filteredList, containerStyle, onGoalPress, handleMarkComplete } = props

    return (
        <>
            <HeaderOne content={header} textAlign="left" style={styles.headerOne}/>
            <View style={styles.goalContainer}>
                {filteredList.length ?
                filteredList.map((current, idx) => {
                    return <GoalCard key={idx} goal={current} onPress={onGoalPress} handleMarkComplete={handleMarkComplete} />
                })
                :
                    <HeaderTwo content={headerTwo} style={styles.headerTwo} />
                }
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    container: {

    },
    headerOne: {
        marginTop: 30,
        marginBottom: 10,
        paddingLeft: 25,
    },
    headerTwo: {
        width: "80%",
    },
    goalContainer: {
        flex: 1,
        justifyContent: "flex-start",
        alignItems: "center",
        minHeight: 300,
    },
})