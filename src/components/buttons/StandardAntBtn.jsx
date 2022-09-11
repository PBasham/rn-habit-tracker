/*========================================
        Import Dependencies
========================================*/
import { Pressable, StyleSheet, Text, View, _View } from 'react-native'
import { AntDesign } from "@expo/vector-icons"
import colors from "../../misc/colors"

export const StandardAntBtn = ({
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
}) => {


    return (
        <Pressable style={[styles.btnContainer, {
            padding: padding || 15,
            height: height || 50,
            width: width || "auto",
            borderRadius: bdrRad || 20,
            backgroundColor: backColor || colors.blue,
        }]}>
            <Text style={{
                color: color || colors.pink,
                fontSize: fontSize || 16,
            }}
            >{text}</Text>
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