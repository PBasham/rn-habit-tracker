/*========================================
        Import Dependencies
========================================*/
import React, { FC } from "react";
import { StyleSheet, Text, View } from 'react-native'
// Entypo icons
import { Entypo } from '@expo/vector-icons';
/*========================================
        Import Styles
========================================*/
import colors from "../../misc/colors";


interface AdditionalSettingsBtnProps {
    color?: string | string;
    style?: object;
}

const AdditionalSettingsBtn: FC<AdditionalSettingsBtnProps> = ({ color, style, children }) => {

    return (
        <View style={[styles.container, {...style}]} >
            <Entypo name="dots-three-vertical" size={24} color={color || colors.button.textDark} />
        </View>
    )
}

export default AdditionalSettingsBtn

const styles = StyleSheet.create({
    container: {
    }
})