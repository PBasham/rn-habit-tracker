/*========================================
        Import Dependencies
========================================*/
import { FC } from "react"
import { StyleSheet, Text, useColorScheme, View } from 'react-native'
/*========================================
        Import Components
========================================*/
import { AdditionalSettingsBtn, RoundIconBtn, StandardAntBtn } from "../buttons"

/*========================================
        Import Styles
========================================*/
import colors from "../../misc/colors"

interface ControlBarProps {
    enableSettigns: () => void
    enableAdditionalSettings: Boolean
}

const ControlBar: FC<ControlBarProps> = ({ enableSettigns, enableAdditionalSettings }) => {

    const handleAdditionalSettingsClick = () => {
        console.log("handle additional settings!")
        enableSettigns()
    }

    return (
        <View style={styles.container}>
            {/* Search bar to come */}
            {/* Add item */}
            <RoundIconBtn
                size={26}
                style={styles.addNoteBtn}
                antIconName="plus"
                onPress={() => console.log("Ive been pressed")}
                />
            {/* Additional Settings */}
            <AdditionalSettingsBtn
                cancel={enableAdditionalSettings}
                size={26}
                onPress={handleAdditionalSettingsClick}
                style={[styles.settingsBtn]}
                color={colors.button.dark}
            />
        </View>
    )
}

export default ControlBar

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        justifyContent: 'flex-end',
        alignItems: "center",
        marginVertical: 30,
        paddingHorizontal: 20,
        height: 60,
        width: "100%",
        elevation: 15,
        shadowColor: colors.general.dark,
        backgroundColor: colors.general.accentBlue,
    },
    buttons: {

    },
    settingsBtn: {
    },
    addNoteBtn: {
        marginRight: 15,
        elevation: 0,
        backgroundColor: "transparent",
    }
})