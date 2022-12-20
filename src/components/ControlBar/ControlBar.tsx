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
    barTitle?: string
    onBackPress?: () => void
    onPlusPress?: () => void
    onDeletePress?: () => void
    onEditPress?: () => void
    onDotsPress?: () => void

    // enableSettigns: () => void
    editMode?: boolean
    // openNoteDetail: () => void
}

const ControlBar: FC<ControlBarProps> = (props: ControlBarProps) => {

    const { barTitle, onBackPress, onPlusPress, onDeletePress, onEditPress, onDotsPress, editMode } = props

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
            <HeaderOne content={barTitle} />
            {/* if edit is true, turn this into a delete icon and change the function to delete. */}
            {/* Add Button */}
            {onPlusPress ?
                <RoundIconBtn
                    size={26}
                    style={styles.addBtn}
                    antIconName={editMode ? "delete" : "plus"}
                    iconColor={editMode ? colors.button.textCancel : null}
                    onPress={editMode ? onDeletePress : onPlusPress}
                />
                : null}
            {/* Edit Button */}
            {onEditPress ?
                <RoundIconBtn
                    size={26}
                    style={styles.editBtn}  
                    antIconName={editMode ? "close" : "edit"}
                    iconColor={editMode ? colors.button.textCancel : null}
                    onPress={onEditPress}
                />
                : null}
            {/* Additional Settings */}
            {onDotsPress ? <AdditionalSettingsBtn
                cancel={editMode}
                size={26}
                onPress={onDotsPress}
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
        backgroundColor: "transparent",

        elevation: 0,
    },
    editBtn: {
        backgroundColor: "transparent",

        elevation: 0,

    },
    settingsBtn: {
    },
})