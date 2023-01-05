/*========================================
        Import Dependencies
========================================*/
import React, { FC, useState } from 'react'
import { View, Text, TextInput, Pressable, StyleSheet, Dimensions } from 'react-native'
// icons --------------------------------------------------
import { AntDesign } from "@expo/vector-icons"
// style / misc --------------------------------------------------
import colors from "../../misc/colors"
import { fonts } from "../../misc/fonts"

interface InputWithTitleProps {
    title: string
    pressableDetail: boolean
}

export const InputWithTitle: FC<InputWithTitleProps> = (props: InputWithTitleProps) => {

    const { title, pressableDetail } = props

    const [goalTitle, setGoalTitle] = useState("")
    const [goalDescription, setGoalDescription] = useState("")

    return (
        <View style={styles.newGoalInput} >
            <Text style={styles.goalLabel} >{title}</Text>
            {pressableDetail ?
                <Pressable style={styles.pressableContainer} >
                    {/* This will open up another modal / screen to go into detail for this.
                ie: qty, incripment, ect...
            */}
                    <Text numberOfLines={1} style={[{ flex: 1}, styles.goalText]}>{goalDescription}</Text>
                    <AntDesign  style={{textAlignVertical: "center"}} name="right" size={16} color={colors.text.darkTransparent} />
                </Pressable>
                :
                <TextInput numberOfLines={1} style={[styles.goalText, {backgroundColor: "rgba(0, 0, 0, .03)",}]} />
            }
        </View>
    )
}

const width = Dimensions.get("screen").width

const styles = StyleSheet.create({
    newGoalInput: {
        flexDirection: "row",
        marginBottom: -1,

        padding: 5,
        width: width - 50,
        backgroundColor: colors.input.blueGrey,
    },
    goalLabel: {
        flex: 1,
        
        paddingHorizontal: 10,

        color: colors.text.darkTransparent,
        fontSize: fonts.input.label,
        textAlign: "left",
        textAlignVertical: "center",
    },
    goalText: {
        flex: 3,
        
        paddingLeft: 5,
        paddingRight: 20,
        
        color: colors.text.darkTransparent,
        fontSize: fonts.input.text,
        textAlign: "left",
    },
    pressableContainer: {
        flex: 3,
        flexDirection: "row",
    },
})