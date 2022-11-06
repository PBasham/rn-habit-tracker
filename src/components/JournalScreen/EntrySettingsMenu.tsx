/*========================================
        Import Dependencies
========================================*/
import React, { FC } from 'react'
import { View, Pressable, StyleSheet, LayoutAnimation, Dimensions, Modal } from 'react-native'


interface EntrySettingsMenuProps {
    open: boolean
    handleSettingsClose: () => void
}

export const EntrySettingsMenu: FC<EntrySettingsMenuProps> = ({ open, handleSettingsClose }) => {
    // Transition --------------------------------------------------

    return (
        <Modal visible={open} transparent={true} animationType="none">
            <Pressable style={StyleSheet.absoluteFillObject} onPress={handleSettingsClose} >

            </Pressable>
            <View style={[styles.container, open ? null : styles.closed]}>
            </View>
        </Modal>
    )
}


const width = Dimensions.get("screen").width
const height = Dimensions.get("screen").height

const styles = StyleSheet.create({
    container: {
        position: "absolute",
        top: 0,
        right: 0,
        backgroundColor: "grey",
        width: 200,
        height: 200,
        // zIndex: 999,
    },
    closed: {
        width: 0,
        height: 0,
    },
})