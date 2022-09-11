/*========================================
        Import Dependencies
========================================*/
import { View, StyleSheet } from 'react-native'
import { AntDesign } from "@expo/vector-icons"
import colors from "../../misc/colors"

export const RoundIconBtn = ({
    antIconName,
    size,
    iconColor,
}) => {


    return (
        <View style={styles.button}>
            <AntDesign name={antIconName} size={size || 24} color={iconColor || colors.light} />
        </View>
    )
}

const styles = StyleSheet.create({
    button: {

    }
})