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
}

export const AdditionalSettingsBtn: FC<AdditionalSettingsBtnProps> = ({ onPress, color, style, size }) => {
    console.log(style);
    
    return (
        <Pressable onPress={onPress} style={[styles.container, ...style]} >
            <Entypo name="dots-three-vertical" size={size || 24} color={color || colors.button.textDark} />
        </Pressable>
    )
}

const styles = StyleSheet.create({
    container: {
    }
})