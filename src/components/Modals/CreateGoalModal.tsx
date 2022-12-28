// Dependencies --------------------------------------------------
import React, { useState, useRef } from 'react'
import FC, { Dimensions, Modal, Platform, Pressable, StyleSheet, Text, TextInput, View } from 'react-native'
import colors from "../../misc/colors"
import { StandardAntBtn } from "../buttons"
import { CheckBoxRnd } from "../CheckBox"
// datepicker ---------------
import DateTimePicker from '@react-native-community/datetimepicker';
// components --------------------------------------------------
import ControlBar from "../ControlBar/ControlBar"

import { getDate } from "../../misc/helpers"


interface CreateGoalModalProps {
    visible: boolean
    closeGoalModal: () => void
    addGoal: (goal: object) => void
}

export const CreateGoalModal = (props: CreateGoalModalProps) => {
    // props --------------------------------------------------
    const { visible, closeGoalModal, addGoal } = props
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
    const [dueDate, setDueDate] = useState<any>(() => {
        let date = new Date()
        date.setDate(date.getDate() + 1)
        return date
    }
    )
    const [dueTime, setDueTime] = useState<any>(() => {
        let date = new Date()
        date.setHours(12)
        date.setMinutes(0)
        return date
    })
    // show and saved date / time for goal
    const [inpDueDate, setInpDueDate] = useState<string>(() => {
        let date = new Date()
        date.setDate(date.getDate() + 1)
        return `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`
    })
    const [inpDueTime, setInpDueTime] = useState<string>(() => {

        return `12:00PM`
    })

    const handleClose = () => {
        setDueDate(() => {
            let date = new Date()
            date.setDate(date.getDate() + 1)
            return date
        })
        setDueTime(() => {
            let date = new Date()
            date.setHours(12)
            date.setMinutes(0)
            return date
        })

        setInpDueDate(() => {
            let date = new Date()
            date.setDate(date.getDate() + 1)
            return `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`
        })
        setInpDueTime(() => {return `12:00PM`})
        if (specificTIme) setSpecificTIme(false)
    }

    const handleCreateGoal = () => {
        let newGoal = {
            id: Date.now(),
            createdOn: getDate(),
            action: inpAction,
            what: inpWhat,
            qty: 0,
            goalQty: inpQty,
            dueDate: inpDueDate,
            specificTime: specificTIme,
            dueTime: specificTIme ? inpDueTime : null,
            complete: false,
        }

        addGoal(newGoal)
        handleClose()
        closeGoalModal()
    }

    const handleCheckBoxPress = () => {
        setSpecificTIme(!specificTIme)
    }

    // convert time to am/pm
    const converTimeToAMPM = (time: Date) => {
        let hh: number = time.getHours()
        let m: number = time.getMinutes()
        let s: number = time.getSeconds()
        let tt: string = "AM"

        if (hh >= 12) {
            hh = hh - 12
            tt = "PM"
            if (hh === 0) hh = 12
        }

        return `${hh.toString().padStart(2, "0")}:${m.toString().padStart(2, "0")}${tt}`

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
            setDueDate(currentDateTime)
            setInpDueDate(() => {
                return `${currentDateTime.getMonth() + 1}/${currentDateTime.getDate()}/${currentDateTime.getFullYear()}`
            })
            let fDate = (tempDateTime.getMonth() + 1) + "/" + tempDateTime.getDate() + "/" + tempDateTime.getFullYear()

        } else {
            setDueTime(currentDateTime)
            setInpDueTime(() => {
                let newTime = converTimeToAMPM(currentDateTime)
                return newTime
            })
            let fTime = `${tempDateTime.getHours()}:${tempDateTime.getMinutes()}`
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
            * [x] set default date to current + 1
            * [] On date update, update show value.
         * [] Add time picker to by [time input] 
            * [] set default time to 12pm
            * [] On time update, update show value
         * [] When create goal is pressed, add item to storage and state.
    ========================================*/

    return (
        <Modal visible={visible} animationType="slide" transparent={true} >
            <View style={styles.container} >
                <ControlBar onBackPress={() => {
                    handleClose()
                    closeGoalModal()
                    }} />
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
                            <Text style={styles.inpText}>{inpDueDate}</Text>
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
                            <Text style={[styles.inpText, specificTIme ? null : styles.textInactive]} >{inpDueTime}</Text>
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
                    <StandardAntBtn
                        backColor={
                            inpAction.length && inpQty.length && inpWhat.length ?
                                colors.general.light : colors.general.lightBlueTransparent
                        }
                        fontSize={32} text="Create Goal" onPress={inpAction.length && inpQty.length && inpWhat.length ? handleCreateGoal : null} />
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
        // paddingVertical: 5,
        height: 40,
        borderWidth: 1,
        backgroundColor: colors.general.lightTransparent,


        fontSize: 24,
        textAlign: "center",
    },
    inpText: {
        flex: 1,
        fontSize: 24,
        textAlign: "center",
        textAlignVertical: "center"
    },
    inactive: {
        backgroundColor: colors.general.lightBlueTransparent,
    },
    textInactive: {
        color: colors.text.darkTransparent
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