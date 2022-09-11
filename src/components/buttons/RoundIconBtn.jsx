/*========================================
        Import Dependencies
========================================*/
import { View, StyleSheet, Pressable } from 'react-native'
import { AntDesign } from "@expo/vector-icons"
/*========================================
        Import Styles
========================================*/
import colors from "../../misc/colors"

export const RoundIconBtn = ({
    antIconName,
    size,
    iconColor,
    style,
    onPress,
}) => {


    return (
        <Pressable onPress={onPress} style={styles.button}>
            <AntDesign
                name={antIconName} 
                size={size || 24} 
                color={iconColor || colors.light} 
                style={[styles.icon, {...style}]}
                />
        </Pressable>
    )
}

const styles = StyleSheet.create({
    button: {
        padding: 15,
        borderRadius: 50,
        backgroundColor: colors.blue,
        elevation: 10,
        shadowColor: colors.greyish,
        shadowOffset: 0,
        shadowRadius: 5,
        shadowOpacity: .4,
    },
    icon: {
    }
})