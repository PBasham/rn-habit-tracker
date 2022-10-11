/*========================================
        Import Dependencies
========================================*/
import React, { FC } from "react";
import { Pressable, StyleSheet, Text, View } from 'react-native'
// Entypo icons
import { Entypo } from '@expo/vector-icons';
/*========================================
        Import Styles
========================================*/
import colors from "../../misc/colors";


interface AdditionalSettingsBtnProps {
    color?: string | string
    style?: any
    size?: number
    onPress: () => void
    cancel: Boolean
}

export const AdditionalSettingsBtn: FC<AdditionalSettingsBtnProps> = ({ onPress, color, style, size, cancel }) => {
    console.log(style);
    
    return (
        <Pressable onPress={onPress} style={[styles.container, ...style]} >
            <Entypo name={cancel ? "cross" : "dots-three-vertical"} size={size || 24} color={cancel ? colors.button.textCancel : color || colors.button.textDark} />
        </Pressable>
    )
}

const styles = StyleSheet.create({
    container: {
    }
})