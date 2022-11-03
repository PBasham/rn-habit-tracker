/*========================================
        Import Dependencies
========================================*/
import React, { FC } from 'react'
import { View, Text, StyleSheet, Modal } from 'react-native'

interface EntryDetailModalProps {
    visible: boolean
    entry: any
}

export const EntryDetailModal: FC<EntryDetailModalProps> = ({ visible, entry }) => {

    return (
        <Modal visible={visible} animationType="fade">
            <View style={styles.container}>

                {/* Created on xx/xx/xxxx */}
                {/* Updated on xx/xx/xxxx */}
                {/* title */}
                {/* description */}
                <Text>Entry Detail</Text>
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "red",
        zIndex: 999,
    }
})