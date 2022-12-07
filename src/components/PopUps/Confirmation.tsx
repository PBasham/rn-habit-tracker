/*========================================
        Import Dependencies
========================================*/
import React, { FC } from 'react'
import { Modal, View, StyleSheet } from 'react-native'
import colors from "../../misc/colors"
import { StandardAntBtn } from "../buttons"
import { HeaderOne, HeaderTwo } from "../Text"

interface ConfirmationProps {
    visible: boolean
    onConfirm: () => void
    confirmText?: string
    onCancel: () => void
    cancelText?: string
    message?: string
}

export const Confirmation: FC<ConfirmationProps> = (props: ConfirmationProps) => {

    const { visible, onConfirm, confirmText, onCancel, cancelText, message } = props

    return (
        <Modal visible={visible} animationType="none" transparent={true} >
            <View style={styles.container}>
                <View style={styles.popupBox}>
                    <View style={styles.contentContainer}>

                        <HeaderOne style={styles.content} content={message ? message : "Confirm?"} />
                    </View>

                    <View style={styles.options}>
                        <StandardAntBtn text={confirmText ? confirmText : "Cancel"} onPress={onCancel} fontSize={20} backColor={colors.button.lightBlue} style={styles.popupBtn} />
                        <StandardAntBtn text={cancelText ? cancelText : "Confirm"} onPress={onConfirm} fontSize={20} backColor={colors.button.lightBlue} style={styles.popupBtn} />
                    </View>
                </View>
            </View>

        </Modal>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: colors.general.darkTransparent,
    },
    popupBox: {

        position: "relative",

        alignItems: "center",

        padding: 10,
        width: "80%",
        height: 200,
        backgroundColor: colors.general.light,

        borderRadius: 15,
    },
    contentContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",

    },
    content: {},
    options: {
        flexDirection: "row",
        justifyContent: "center",

        marginTop: "auto",

    },
    popupBtn: {
        paddingHorizontal: 15,

        elevation: 1,
    }
})