import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import colors from "../../misc/colors"
import { RoundIconBtn } from "../buttons/RoundIconBtn"
import { StandardAntBtn } from "../buttons/StandardAntBtn"

const ControlBar = () => {
    return (
        <View style={styles.container}>
            {/* Search bar to come */}
            {/* Add item */}
            {/* Additional Settings */}
            <StandardAntBtn antIconName={"dots-three-vertical"}  />
        </View>
    )
}

export default ControlBar

const styles = StyleSheet.create({
    container: {
        marginVertical: 30,
        height: 50,
        width: "100%",
        elevation: 15,
        shadowColor: colors.general.dark,
        backgroundColor: colors.general.accentBlue,
    },
    // buttons: {
    //     backgroundColor: "blue",
    // }
})