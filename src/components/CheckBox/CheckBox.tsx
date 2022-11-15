/*========================================
        Import Dependencies
========================================*/
import React, { FC } from 'react'
import { View, Pressable, StyleSheet } from 'react-native'
import colors from "../../misc/colors"

interface CheckBoxProps {
    onPress?: (updatedGoal: any) => void
    checked: boolean
    color?: string
    brdColor?: string
    style?: any
}

export const CheckBox: FC<CheckBoxProps> = ({ onPress, checked, color, brdColor, style }) => {

    return (
        <View style={styles.container}>
            <Pressable onPress={onPress} style={[style, checked ? styles.checkbox_checked : null,styles.checkbox]}>

            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: "center",

        padding: 10,
        // width: 50,
        width: "10%",
        height: "100%",

    },
    checkbox: {

        width: 25,
        aspectRatio: 1,
        borderWidth: 2,
        borderColor: colors.button.textDarkTransparent,
        backgroundColor: colors.button.grey,

    },
    checkbox_checked: {
        backgroundColor: "green",
    }
})