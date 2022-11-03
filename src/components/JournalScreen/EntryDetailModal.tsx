/*========================================
        Import Dependencies
========================================*/
import React, { FC } from 'react'
import { View, Text, StyleSheet, Modal } from 'react-native'
import colors from "../../misc/colors"

interface EntryDetailModalProps {
    visible: boolean
    entry: any
}

export const EntryDetailModal: FC<EntryDetailModalProps> = ({ visible, entry }) => {

    const { title, desc } = entry

    return (
        <Modal visible={visible} animationType="fade">
            <View style={styles.container}>

                {/* Created on xx/xx/xxxx */}
                {/* Updated on xx/xx/xxxx */}
                {/* title */}
                <Text>{title}</Text>
                {/* description */}
                <Text>{desc}</Text>
                <Text>Entry Detail</Text>
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.general.accentBlue
    }
})