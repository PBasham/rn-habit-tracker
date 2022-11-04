/*========================================
        Import Dependencies
========================================*/
import React, { FC } from "react";
import { Pressable } from 'react-native'
// Entypo icons
import { Entypo } from '@expo/vector-icons';
/*========================================
        Import Styles
========================================*/
import colors from "../../misc/colors";


interface SettingsBtnProps {
    color?: string | string
    style?: any
    margin?: number
    height?: number
    width?: number
    size?: number
    onPress: () => void
}

export const SettingsBtn: FC<SettingsBtnProps> = ({ onPress, color, style, margin, height, width, size }) => {
    console.log(style);

    return (
        <Pressable onPress={onPress} style={[{ ...style }, {
            justifyContent: 'center',
            alignItems: "center",
            margin: margin || 15,
            height: height || 50,
            width: width || "auto",
        }
        ]} >
            <Entypo name={"dots-three-vertical"} size={size || 24} color={color || colors.button.textDark} />
        </Pressable>
    )
}