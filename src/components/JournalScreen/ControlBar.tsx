/*========================================
        Import Dependencies
========================================*/
import { FC } from "react"
import { StyleSheet, Text, useColorScheme, View } from 'react-native'
/*========================================
        Import Components
========================================*/
import { AdditionalSettingsBtn, StandardAntBtn } from "../buttons"

/*========================================
        Import Styles
========================================*/
import colors from "../../misc/colors"

interface ControlBarProps {
    enableAdditionalSettings: boolean
}

const ControlBar: FC<ControlBarProps> = ({ enableAdditionalSettings }) => {

    const handleAdditionalSettingsClick = () => {
        console.log("handle additional settings!")
    }

    return (
        <View style={styles.container}>
            {/* Search bar to come */}
            {/* Add item */}
            <StandardAntBtn onPress={()=> console.log("Ive been pressed")}/>
            {/* Additional Settings */}
            <AdditionalSettingsBtn onPress={handleAdditionalSettingsClick} style={[styles.settingsBtn]} color={colors.button.dark}/>
        </View>
    )
}

export default ControlBar

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        marginVertical: 30,
        padding: 10,
        height: 50,
        width: "100%",
        elevation: 15,
        shadowColor: colors.general.dark,
        backgroundColor: colors.general.accentBlue,
    },
    buttons: {

    },
    settingsBtn: {
        position: "absolute",
        right: 10,
    }
})