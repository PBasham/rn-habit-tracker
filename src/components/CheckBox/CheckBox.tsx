/*========================================
        Import Dependencies
========================================*/
import React, { FC } from 'react'
import { View, Pressable, StyleSheet } from 'react-native'
// Icons --------------------------------------------------
import { Entypo } from '@expo/vector-icons';
// styles --------------------------------------------------
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
            <Pressable onPress={onPress} style={[style, styles.checkbox, checked ? styles.checkbox_checked : null]}>
                {checked ? <Entypo name={"check"} size={20} color={colors.general.light} /> : null}
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
        justifyContent: "center",
        alignItems: "center",

        width: 25,
        aspectRatio: 1,
        borderWidth: 2,
        borderColor: colors.button.grey,
        backgroundColor: colors.button.grey,
        
    },
    checkbox_checked: {
        borderColor: colors.button.greenTransparent,
        backgroundColor: colors.button.green,
    }
})