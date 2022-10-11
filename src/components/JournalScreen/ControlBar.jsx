/*========================================
        Import Dependencies
========================================*/
import { StyleSheet, Text, View } from 'react-native'
/*========================================
        Import Components
========================================*/
import { AdditionalSettingsBtn } from "../buttons"
/*========================================
        Import Styles
========================================*/
import colors from "../../misc/colors"



const ControlBar = () => {
    return (
        <View style={styles.container}>
            {/* Search bar to come */}
            {/* Add item */}
            {/* Additional Settings */}
            <AdditionalSettingsBtn style={[styles.buttons, styles.settingsBtn]}color={"blue"}/>
        </View>
    )
}

export default ControlBar

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        marginVertical: 30,
        height: 50,
        width: "100%",
        elevation: 15,
        shadowColor: colors.general.dark,
        backgroundColor: colors.general.accentBlue,
    },
    buttons: {
        backgroundColor: "blue",
    },
    settingsBtn: {
        position: "absolute",
        left: 0,
    }
})