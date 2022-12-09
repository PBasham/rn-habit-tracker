/*========================================
        Import Dependencies
========================================*/
import React, { FC } from 'react'
import { Modal, View, StyleSheet } from 'react-native'
// components  --------------------------------------------------
import { StandardAntBtn } from "../buttons"
import { HeaderOne } from "../Text"
// style --------------------------------------------------
import colors from "../../misc/colors"

interface AcknowledgeProps {
    visible: boolean
    onConfirm: () => void
    confirmText?: string
    message?: string
}

export const Acknowledge: FC<AcknowledgeProps> = (props: AcknowledgeProps) => {

    const { visible, onConfirm, confirmText, message } = props

    return (
        <Modal visible={visible} animationType="none" transparent={true} >
            <View style={styles.container}>
                <View style={styles.popupBox}>
                    <View style={styles.contentContainer}>

                        <HeaderOne style={styles.content} content={message ? message : "This is a message to acknowledge something."} />
                    </View>

                    <View style={styles.options}>
                        <StandardAntBtn text={confirmText ? confirmText : "Acknowledge"} onPress={onConfirm} fontSize={20} backColor={colors.button.lightBlue} style={styles.popupBtn} />
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