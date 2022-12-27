// Dependencies --------------------------------------------------
import React, { useState, useRef } from 'react'
import FC, { Dimensions, Modal, Platform, Pressable, StyleSheet, Text, TextInput, Touchable, View } from 'react-native'
import colors from "../../misc/colors"
import { StandardAntBtn } from "../buttons"
import { CheckBoxRnd } from "../CheckBox"
// datepicker --------------------------------------------------
import DateTimePicker from '@react-native-community/datetimepicker';
// import RNDateTimePicker from "@react-native-community/datetimepicker"
// components --------------------------------------------------
import ControlBar from "../ControlBar/ControlBar"


interface CreateGoalModalProps {
    visible: boolean
    closeGoalModal: () => void
}

export const CreateGoalModal = (props: CreateGoalModalProps) => {
    // props --------------------------------------------------
    const { visible, closeGoalModal } = props
    // action qty what --------------------------------------------------
    const [inpAction, setInpAction] = useState<string>("")
    const [inpQty, setInpQty] = useState<string>("")
    const [inpWhat, setInpWhat] = useState<string>("")
    // specify time checkox --------------------------------------------------
    const [specificTIme, setSpecificTIme] = useState(false)
    // dateTimePicker --------------------------------------------------
    // datePicker open
    const [datePickerOpen, setDatePickerOpen] = useState<boolean>(false)
    // timePicker open
    const [timePickerOpen, setTimePickerOpen] = useState<boolean>(false)
    // states holding dateTimePicker info
    const [dueDate, setDueDate] = useState<any>(new Date())
    const [dueTime, setDueTime] = useState<any>(new Date())
    // show and saved date / time for goal
    const [inpDueDate, setInpDueDate] = useState<string>(() => {
        let date = new Date()
        date.setDate( date.getDate() + 1)
        return `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`
    })
    const [inpDueTime, setInpDueTime] = useState<string>("")


    const handleCreateGoal = () => {
        console.log(inpAction)
        console.log(inpQty)
        console.log(inpWhat)
        console.log(dueDate)
        console.log(dueTime)
    }

    const handleCheckBoxPress = () => {
        setSpecificTIme(!specificTIme)
    }


    /*========================================
            DateTimePicker
    ========================================*/
    const onChange = (selectedDateTime: object, mode: string) => {
        console.log(mode)
        const currentDateTime = selectedDateTime || (mode === "date" ? dueDate : dueTime)
        setDatePickerOpen(Platform.OS === "ios")
        setTimePickerOpen(Platform.OS === "ios")
        
        let tempDateTime = new Date(currentDateTime)

        if (mode === "date") {
            console.log(currentDateTime)
            setDueDate(currentDateTime)
            let fDate = (tempDateTime.getMonth() + 1) + "/" + tempDateTime.getDate() + "/" + tempDateTime.getFullYear()
            
        } else {
            console.log(currentDateTime)
            setDueTime(currentDateTime)
            let fTime = "Hours: " + tempDateTime.getHours() + " | Minutees: " + tempDateTime.getMinutes()
        }
        // console.log(fDate + "(" + fTime + ")")
    }

    const handleDatePress = () => {
        setDatePickerOpen(true)
    }
    const handleTimePress = () => {
        setTimePickerOpen(true)
    }

    /** TODO:
         * [] Add date picker to by [date input] 
         * [] Add time picker to by [time input] 
         * [] When create goal is pressed, add item to storage and state.
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
                            // ref={actionRef}
                            onChangeText={(text) => setInpAction(text)}
                        />
                        <TextInput
                            style={[styles.input, styles.inputSml]}
                            keyboardType="numeric"
                            placeholder="1"
                            // ref={qtyRef}
                            onChangeText={(qty) => setInpQty(qty)}
                        />
                    </View>
                    <View style={styles.line}>
                        <TextInput
                            style={[styles.input, styles.inputLg]}
                            placeholder="Book"
                            // ref={whatRef}
                            onChangeText={(text) => setInpWhat(text)}
                        />
                    </View>
                    <View style={styles.line}>
                        <Text style={styles.text} >By  </Text>
                        {/* make this a date picker */}
                        <Pressable
                            style={[styles.input, styles.inputMd]}
                            onPress={handleDatePress}
                        >
                            <Text>{inpDueDate}</Text>
                        </Pressable>
                    </View>
                    <View style={styles.line}>
                        <Text style={styles.text} >Specific time?</Text>
                        <CheckBoxRnd checked={specificTIme} onPress={handleCheckBoxPress} />
                            <Pressable
                                style={[styles.input, styles.inputMd, specificTIme ? null : styles.inactive]}
                                disabled={!specificTIme}
                                onPress={handleTimePress}
                            >
                                {/* <Text>{}</Text> */}
                            </Pressable>
                    </View>
                    {datePickerOpen ?
                        <DateTimePicker
                            testID="datePicker"
                            value={dueDate}
                            mode="date"
                            onChange={(event, selectedDate) => onChange(selectedDate, "date")}
                        />
                        :
                        null}
                    {timePickerOpen ?
                        <DateTimePicker
                            testID="timePicker"
                            value={dueTime}
                            mode="time"
                            is24Hour={false}
                            onChange={(event, selectedDate) => onChange(selectedDate, "time")}
                        />
                        :
                        null}
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
        height: 40,
        borderWidth: 1,
        backgroundColor: colors.general.lightTransparent,


        fontSize: 24,
        textAlign: "center",
    },
    inactive: {
        backgroundColor: colors.general.lightBlueTransparent,
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