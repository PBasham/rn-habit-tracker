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
import { HeaderOne } from "../Text"

interface ControlBarProps {
    onBackPress?: () => void
    onPlusPress?: () => void
    onDotsPress?: () => void

    // enableSettigns: () => void
    enableAdditionalSettings: boolean
    // openNoteDetail: () => void
}

const ControlBar: FC<ControlBarProps> = ({ onBackPress, onPlusPress, onDotsPress, enableAdditionalSettings }) => {

    console.log(onBackPress ? true : false)

    const handleAdditionalSettingsClick = () => {
        console.log("handle additional settings!")
        onDotsPress()
    }

    return (
        <View style={styles.container}>
            {/* Search bar to come */}
            {/* Back button */}
            {onBackPress ?
                <RoundIconBtn
                    size={26}
                    style={styles.backBtn}
                    antIconName="left"
                    onPress={onBackPress}
                />
                :
                <RoundIconBtn
                    size={26}
                    style={styles.backBtn}
                    onPress={() => null}
                />
            }
            <HeaderOne content="Journal" />
            {/* Add Button */}
            {onPlusPress ?
                <RoundIconBtn
                    size={26}
                    style={styles.addBtn}
                    antIconName="plus"
                    onPress={onPlusPress}
                />
                : null}

            {/* Additional Settings */}
            {onDotsPress ? <AdditionalSettingsBtn
                cancel={enableAdditionalSettings}
                size={26}
                onPress={handleAdditionalSettingsClick}
                style={[styles.settingsBtn]}
                color={colors.button.dark}
            />
                : null}

        </View>
    )
}

export default ControlBar

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        justifyContent: 'flex-start',
        alignItems: "center",
        marginBottom: 10,
        paddingHorizontal: 20,
        height: 60,
        width: "100%",
        elevation: 15,
        shadowColor: colors.general.dark,
        backgroundColor: colors.general.accentBlue,
    },

    backBtn: {

        backgroundColor: "transparent",

        elevation: 0,
    },
    addBtn: {
        marginLeft: "auto",
        marginRight: 15,
        backgroundColor: "transparent",

        elevation: 0,
    },
    settingsBtn: {
    },
})