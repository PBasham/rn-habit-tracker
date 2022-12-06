/*========================================
        Import dependencies
========================================*/
import React, {FC} from "react";
import { View, Pressable, StyleSheet } from "react-native"
// icons --------------------------------------------------
import { Entypo } from '@expo/vector-icons';
// styles --------------------------------------------------
import colors from "../../misc/colors";

interface CheckBoxRndProps {
    onPress?: () => void
    checked: boolean
}

export const CheckBoxRnd: FC<CheckBoxRndProps> = ( props: CheckBoxRndProps) => {
    const { onPress, checked } = props

    return (
        <View style={styles.container}>
            <Pressable style={[checked ? styles.checked : null, styles.checkbox]}>
            {checked ? <Entypo name={"check"} size={20} color={colors.general.light} /> : null}
            </Pressable>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 10,
    },
    checkbox: {
        width: 25,
        aspectRatio: 1,
        borderWidth: 2,
        borderColor: "white",
        borderRadius: 100,
        backgroundColor: colors.button.textDarkTransparent,
    },
    checked: {
        borderColor: "lightblue",
        backgroundColor: "lightblue",
    }
})