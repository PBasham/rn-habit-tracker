/*========================================
        Import Dependencies
========================================*/
import { FC } from "react"
import { Pressable, StyleSheet, Text, View, _View } from 'react-native'
import { AntDesign } from "@expo/vector-icons"
/*========================================
        Import Styles
========================================*/
import colors from "../../misc/colors"

interface StandardAntBtnProps {
    text?: string
    height?: number
    width?: number
    color?: string
    backColor?: string
    bdrRad?: number
    padding?: number
    fontSize?: number
    antIconName?: string
    size?: number
    iconColor?: string
    onPress: () => void
    style?: any
}

export const StandardAntBtn: FC<StandardAntBtnProps> = ({
    text,
    height,
    width,
    color,
    backColor,
    bdrRad,
    padding,
    fontSize,
    antIconName,
    size,
    iconColor,
    onPress,
    style
}) => {


    return (
        <Pressable style={[{ ...style }, styles.btnContainer, {
            // justifyContent: 'center',
            // alignItems: "center",
            padding: padding || 15,
            height: height || 50,
            width: width || "auto",
            borderRadius: bdrRad || 20,
            backgroundColor: backColor || colors.blue,
        }]}
            onPress={onPress}
        >
            <Text style={{
                color: color || colors.pink,
                fontSize: fontSize || 16,
            }}
            >{text}</Text>
            {/* @ts-ignore */}
            <AntDesign name={antIconName} size={size || 24} color={iconColor || colors.light} />
        </Pressable>
    )
}

const styles = StyleSheet.create({
    btnContainer: {
        flexDirection: "row",
        color: "blue",
    }
})