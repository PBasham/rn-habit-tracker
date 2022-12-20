// Dependencies --------------------------------------------------
import React from 'react'
import FC, { Dimensions, Modal, StyleSheet, Text, TextInput, View } from 'react-native'
import colors from "../../misc/colors"
// components --------------------------------------------------
import ControlBar from "../ControlBar/ControlBar"


interface CreateGoalModalProps {
    visible: boolean
    closeGoalModal: () => void
}

export const CreateGoalModal = (props: CreateGoalModalProps) => {
    const { visible, closeGoalModal } = props

    return (
        <Modal visible={visible} animationType="slide" transparent={true} >
            <View style={styles.container} >
                <ControlBar onBackPress={closeGoalModal} />
                <View style={styles.line}>
                    <Text style={styles.text} >I want to </Text>
                    <TextInput style={[styles.input, styles.inputMd]} ></TextInput>
                    <TextInput style={[styles.input, styles.inputSml]} ></TextInput>
                </View>
                {/* <View style={styles.line}>
                    <TextInput style={[styles.input, styles.inputLg]} ></TextInput>
                </View>
                <View style={styles.line}>
                    <Text>By  </Text>
                    <TextInput style={[styles.input, styles.inputMd]} ></TextInput>
                </View> */}
            </View>
        </Modal>
    )
}

const width = Dimensions.get("screen").width

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.general.background,
    },
    line: {
        flexDirection: "row",
        justifyContent: 'center',
        alignItems: "center",
    },
    text: {
        fontSize: 24,
    },
    input: {
        paddingHorizontal: 10,
        paddingVertical: 5,
        backgroundColor: colors.general.lightTransparent,
        borderWidth: 1,
        
        fontSize: 24,
        textAlign: "center",
    },
    inputMd: {
        minWidth: 200,
        
    },
    inputSml: {
        minWidth: 50,
        
    },
    inputLg: {
        minWidth: "100%"
    },
})