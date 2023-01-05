// Dependencies --------------------------------------------------
import React, { useState, useRef, useEffect } from 'react'
import FC, { Dimensions, Modal, Platform, Pressable, StyleSheet, Text, TextInput, View } from 'react-native'
import { StandardAntBtn } from "../buttons"
// datepicker ---------------
import DateTimePicker from '@react-native-community/datetimepicker';
// components --------------------------------------------------
import ControlBar from "../ControlBar/ControlBar"
import { InputWithTitle } from "../input/InputWithTitle"
// misc/helpers --------------------------------------------------
import { formatDate, getDate } from "../../misc/helpers"
import { fonts } from "../../misc/fonts"
import colors from "../../misc/colors"
import { HeaderTwo } from "../Text";
import { ColorPicker } from "../ColorPicker/ColorPicker";



interface CreateGoalModalProps {
    visible: boolean
    closeGoalModal: () => void
    addGoal: (goal: object) => void
}

export const CreateGoalModal = (props: CreateGoalModalProps) => {
    // props --------------------------------------------------
    const { visible, closeGoalModal, addGoal } = props
    // dateTimePicker --------------------------------------------------
    // datePicker open
    const [datePickerOpen, setDatePickerOpen] = useState<boolean>(false)
    // show and saved date / time for goal
    const [inpDueDate, setInpDueDate] = useState<any>(() => {
        let date = new Date()
        date.setDate(date.getDate() + 1)
        return date
    })

    const handleClose = () => {
        setInpDueDate(() => {
            let date = new Date()
            date.setDate(date.getDate() + 1)
            return date
        })
    }

    const handleCreateGoal = () => {
        let newGoal = {
            id: Date.now(),
            createdOn: getDate(),

            title: goalTitle,
            desc: goalDesc,

            color: "",
            category: "",

            qty: 0,
            goalQty: goalDetail.qty,
            measure: goalDetail.measure,

            dueDate: formatDate(inpDueDate),

            complete: false,
        }
        console.log(newGoal)
        addGoal(newGoal)
        handleClose()
        closeGoalModal()
    }

    const handleCheckBoxPress = () => {
        // setSpecificTIme(!specificTIme)
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
        }
        if (hh === 0) hh = 12

        return `${hh.toString().padStart(2, "0")}:${m.toString().padStart(2, "0")}${tt}`

    }

    const theColors = Object.keys(colors.cardColors).map((current, idx) => (
        <Pressable
            key={current + colors.cardColors[current]}
            style={[
                { backgroundColor: colors.cardColors[current] },
                selectedColor === current ? styles.colorBallSelected : null,
                styles.colorBall,
            ]}
            onPress={() => setSelectedColor(current)}
        >
        </Pressable>
    ))

    /*========================================
            DateTimePicker
    ========================================*/
    const onChange = (selectedDateTime: object) => {
        const currentDateTime = selectedDateTime || inpDueDate
        setDatePickerOpen(Platform.OS === "ios")
        setGoalDue((current) => {
            return { ...current, dueDate: currentDateTime }
        })
    }

    const handleDatePress = () => {
        setDatePickerOpen(true)
    }

    const [goalTitle, setGoalTitle] = useState("")
    const [goalDesc, setGoalDesc] = useState("")
    const [selectedColor, setSelectedColor] = useState<string>("white")
    const [goalDetail, setGoalDetail] = useState({
        qty: null,
        measure: null,
    })
    const [goalDue, setGoalDue] = useState({
        dueDate: new Date(),
    })

    return (
        <Modal visible={visible} animationType="slide" transparent={true} >
            <View style={styles.container} >
                <ControlBar
                    barTitle="New Goal"
                    onBackPress={() => {
                        handleClose()
                        closeGoalModal()
                    }} />
                <View style={styles.contentContainer}>
                    <View>
                    </View>
                    <View style={styles.inputGroup}>
                        <InputWithTitle
                            title="TITLE"
                            onChangeText={setGoalTitle}
                            value={goalTitle}
                            pressableDetail={false} />
                        <InputWithTitle title="DESC" onPress={() => null} value={goalDesc} pressableDetail={true} />
                    </View>
                    <ColorPicker header="Card Color" selectedColor={selectedColor} selectColor={setSelectedColor}/>
                    <View style={styles.inputGroup}>
                        <InputWithTitle title="Goal" onPress={() => null} value={`${goalDetail.qty} ${goalDetail.measure}`} pressableDetail={true} />
                        <InputWithTitle title="Due Date" onPress={handleDatePress} value={formatDate(goalDue.dueDate)} pressableDetail={true} />
                    </View>
                </View>
                <StandardAntBtn
                    style={{ padding: 10, }}
                    backColor="white"
                    width={"50%"}
                    fontSize={fonts.body.size} text="Create Goal" onPress={handleCreateGoal} />
            </View>

            {/* datepicker -------------------------------------------------- */}
            {datePickerOpen ?
                <DateTimePicker
                    testID="datePicker"
                    value={goalDue.dueDate}
                    mode="date"
                    onChange={(event, selectedDate) => onChange(selectedDate)}
                />
                :
                null}
            {/* Modals
                Description modal
                Goal detail modal
                Date picker modal

                create task button
             */}
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
        fontSize: fonts.body.size,
    },
    inputGroup: {
        marginBottom: 30,
    },
    input: {
        marginHorizontal: 10,
        marginVertical: 10,
        paddingHorizontal: 10,
        // paddingVertical: 5,
        height: 40,
        borderWidth: 1,
        backgroundColor: colors.general.lightTransparent,


        fontSize: fonts.body.size,
        textAlign: "center",
    },
    inpText: {
        flex: 1,
        fontSize: fonts.body.size,
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

/*========================================
        Old code for component
========================================*/
// {
// <View style={styles.line}>
//                         <Text style={styles.text} >I want to </Text>
//                         <TextInput
//                             style={[styles.input, styles.inputMd]}
//                             placeholder="Read"
//                             // ref={actionRef}
//                             onChangeText={(text) => setInpAction(text)}
//                         />
//                         <TextInput
//                             style={[styles.input, styles.inputSml]}
//                             keyboardType="numeric"
//                             placeholder="1"
//                             // ref={qtyRef}
//                             onChangeText={(qty) => setInpQty(qty)}
//                         />
//                     </View>
//                     <View style={styles.line}>
//                         <TextInput
//                             style={[styles.input, styles.inputLg]}
//                             placeholder="Book"
//                             // ref={whatRef}
//                             onChangeText={(text) => setInpWhat(text)}
//                         />
//                     </View>
//                     <View style={styles.line}>
//                         <Text style={styles.text} >By  </Text>
//                         {/* make this a date picker */}
//                         <Pressable
//                             style={[styles.input, styles.inputMd]}
//                             onPress={handleDatePress}
//                         >
//                             <Text style={styles.inpText}>{formatDate(inpDueDate)}</Text>
//                         </Pressable>
//                     </View>
//                     <View style={styles.line}>
//                         <Text style={styles.text} >Specific time?</Text>
//                         <CheckBoxRnd checked={specificTIme} onPress={handleCheckBoxPress} />
//                         <Pressable
//                             style={[styles.input, styles.inputMd, specificTIme ? null : styles.inactive]}
//                             disabled={!specificTIme}
//                             onPress={handleTimePress}
//                         >
//                             <Text style={[styles.inpText, specificTIme ? null : styles.textInactive]} >{inpDueTime}</Text>
//                         </Pressable>
//                     </View>
//                     {datePickerOpen ?
//                         <DateTimePicker
//                             testID="datePicker"
//                             value={inpDueDate}
//                             mode="date"
//                             onChange={(event, selectedDate) => onChange(selectedDate, "date")}
//                         />
//                         :
//                         null}
//                     {timePickerOpen ?
//                         <DateTimePicker
//                             testID="timePicker"
//                             value={dueTime}
//                             mode="time"
//                             is24Hour={false}
//                             onChange={(event, selectedDate) => onChange(selectedDate, "time")}
//                         />
//                         :
//                         null}
//                     <StandardAntBtn
//                         backColor={
//                             inpAction.length && inpQty.length && inpWhat.length ?
//                                 colors.general.light : colors.general.lightBlueTransparent
//                         }
//                         fontSize={32} text="Create Goal" onPress={inpAction.length && inpQty.length && inpWhat.length ? handleCreateGoal : null} />
//                     }