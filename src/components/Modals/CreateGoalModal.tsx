// Dependencies --------------------------------------------------
import React, { useState, useRef } from 'react'
import FC, { Dimensions, Modal, StyleSheet, Text, TextInput, View } from 'react-native'
import colors from "../../misc/colors"
import { StandardAntBtn } from "../buttons"
import { CheckBoxRnd } from "../CheckBox"
// components --------------------------------------------------
import ControlBar from "../ControlBar/ControlBar"


interface CreateGoalModalProps {
    visible: boolean
    closeGoalModal: () => void
}

export const CreateGoalModal = (props: CreateGoalModalProps) => {
    const { visible, closeGoalModal } = props

    const actionRef = useRef(null)
    const [inpAction, setInpAction] = useState<string>("")
    const qtyRef = useRef(null)
    const [inpQty, setInpQty] = useState<any>("")
    const whatRef = useRef(null)
    const [inpWhat, setInpWhat] = useState<string>("")
    const dueDateRef = useRef(null)
    const [inpDueDate, setInpDueDate] = useState<string>("")
    const [inpDueTime, setInpDueTime] = useState<string>("")

    const [specificTIme, setSpecificTIme] = useState(false)

    const handleCreateGoal = () => {
        console.log(inpAction)
        // console.log(inpQty)
        // console.log(inpWhat)
        // console.log(inpDueDate)
        // console.log(inpDueTime)
    }

    const handleCheckBoxPress = () => {
        setSpecificTIme(!specificTIme)
    }


    /*========================================
            LEFT OFF:
            Trying to ficure out why all of the onChange are sending object instead of text except for inpAction
    ========================================*/
    
    return (
        <Modal visible={visible} animationType="slide" transparent={true} >
            <View style={styles.container} >
                <ControlBar onBackPress={closeGoalModal} />
                <View style={styles.contentContainer}>
                    <View style={styles.line}>
                        <Text style={styles.text} >I want to </Text>
                        <TextInput
                            style={[styles.input, styles.inputMd]}
                            placeholder="Read"
                            ref={actionRef}
                            onChangeText={(text) => setInpAction(text)}
                        />
                        <TextInput
                            style={[styles.input, styles.inputSml]}
                            keyboardType="numeric"
                            placeholder="1"
                            ref={qtyRef}
                            onChange={(qty) => setInpQty(qty)}
                        />
                    </View>
                    <View style={styles.line}>
                        <TextInput
                            style={[styles.input, styles.inputLg]}
                            placeholder="Book"
                            ref={whatRef}
                            onChangeText={(text) => setInpWhat(text)}
                        />
                    </View>
                    <View style={styles.line}>
                        <Text style={styles.text} >By  </Text>
                        <TextInput
                            style={[styles.input, styles.inputMd]}
                            ref={dueDateRef}
                            onChangeText={(text) => setInpDueDate(text)}
                        />
                    </View>
                    <View style={styles.line}>
                        <Text style={styles.text} >Specific time?</Text>
                        <CheckBoxRnd checked={specificTIme} onPress={handleCheckBoxPress} />
                        <TextInput
                            style={[styles.input, styles.inputMd, specificTIme ? null : styles.inactive]}
                            onChangeText={(text) => setInpDueTime(text)}
                            editable={specificTIme}
                        />
                    </View>
                    <StandardAntBtn backColor={colors.button.light} fontSize={32} text="Create Goal" onPress={handleCreateGoal} />
                </View>
            </View>
        </Modal>
    )
}

const width = Dimensions.get("screen").width

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        backgroundColor: colors.general.background,
    },
    contentContainer: {
        flex: 1,
        marginTop: "20%",
        width: width - 50,
    },
    line: {
        flexDirection: "row",
        justifyContent: 'center',
        alignItems: "center",
        flexWrap: "wrap",
    },
    text: {
        fontSize: 24,
    },
    input: {
        marginHorizontal: 10,
        marginVertical: 10,
        paddingHorizontal: 10,
        paddingVertical: 5,
        borderWidth: 1,
        backgroundColor: colors.general.lightTransparent,


        fontSize: 24,
        textAlign: "center",
    },
    inactive: {
        backgroundColor:  colors.general.lightBlueTransparent,
    },
    inputMd: {
        minWidth: 150,

    },
    inputSml: {
        minWidth: 50,

    },
    inputLg: {
        minWidth: "100%"
    },
})