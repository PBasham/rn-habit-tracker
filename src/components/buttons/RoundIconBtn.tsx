/*========================================
        Import Dependencies
========================================*/
import { FC } from "react"
import { View, StyleSheet, Pressable } from 'react-native'
import { AntDesign } from "@expo/vector-icons"
/*========================================
        Import Styles
========================================*/
import colors from "../../misc/colors"

interface RoundIconBtnProps {
    antIconName?: any
    size?: any
    iconColor?: any
    style?: any
    onPress: () => void
}

export const RoundIconBtn: FC<RoundIconBtnProps> = ({
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
            // @ts-ignore
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