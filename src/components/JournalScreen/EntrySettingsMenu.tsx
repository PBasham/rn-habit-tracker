/*========================================
        Import Dependencies
========================================*/
import React, { FC } from 'react'
import { View, Text, Pressable, Modal, StyleSheet, Dimensions, LayoutAnimation } from 'react-native'
import Animated from "react-native-reanimated";

import colors from "../../misc/colors";


interface EntrySettingsMenuProps {
    open: boolean
    handleSettingsClose: () => void
}

export const EntrySettingsMenu: FC<EntrySettingsMenuProps> = ({ open, handleSettingsClose }) => {


    LayoutAnimation.easeInEaseOut()

    const settingOptions = [
        {
            name: "Option 1",
            action: () => console.log("An Option")
        },
        {
            name: "Delete",
            action: () => console.log("Delete Entry!")
        },
    ]


    return (
        <Modal transparent={true} visible={open} >
            {/* Background used to close when clicking out of pop up menu */}
            <Pressable style={[styles.modalBG, StyleSheet.absoluteFillObject]} onPress={handleSettingsClose} />
            <View style={open ? styles.popupMenu : styles.closed}>
                {settingOptions.map((option) => (
                    <Pressable onPress={option.action}>
                        {({ pressed }) => (
                            <Text style={[styles.option, pressed ? styles.pressed : null]} >
                                {option.name}
                            </Text>
                        )}
                    </Pressable>
                ))}
            </View>
        </Modal>
    )
}


const width = Dimensions.get("screen").width
const height = Dimensions.get("screen").height

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "violet",
    },
    modalBG: {
    },
    closed: {
        width: 0,
        height: 0,
    },
    popupMenu: {
        /* display stuff */

        /* position stuff */
        position: "absolute",
        justifyContent: 'space-evenly',

        /* box-model stuff */
        marginTop: 20,
        marginRight: 10,
        paddingVertical: 10,
        width: 200,
        backgroundColor: "rgb(61,61,60)",
        borderRadius: 15,
        /* typography stuff */

        /* manipulation stuff */
        top: 0,
        right: 0,

        /* misc stuff */
        overflow: "hidden",
    },
    option: {
        textAlign: "center",
        textAlignVertical: "center",

        minHeight: 40,
        padding: 10,

        fontSize: 24,
        color: colors.text.light,
    },
    pressed: {
        backgroundColor: "rgb(71,71,70)"
    },
})