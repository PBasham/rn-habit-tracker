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
        <Pressable onPress={onPress}
            style={
                [
                    styles.button,
                    { ...style },
                ]

            }>
            <AntDesign
                name={antIconName}
                size={size || 24}
                color={iconColor || colors.button.textDark}
                style={[styles.icon]}
            />
        </Pressable>
    )
}

const styles = StyleSheet.create({
    button: {
        justifyContent: 'center',
        alignItems: "center",
        borderRadius: 50,
        width: 50,
        height: 50,
        // Shadow --
        elevation: 10,
        shadowColor: colors.button.shadow,
        shadowOffset: {
            width: 0,
            height: 0,
        },
        shadowRadius: 5,
        shadowOpacity: .4,
        // ----------
        background: colors.button.light,
    },
    icon: {
    }
})