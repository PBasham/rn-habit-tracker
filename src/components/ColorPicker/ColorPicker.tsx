/*========================================
        Import Dependencies
========================================*/
import React, { FC } from 'react'
import { View, Pressable, StyleSheet, Dimensions } from 'react-native'
// components --------------------------------------------------
import { HeaderTwo } from "../Text"
// misc/style --------------------------------------------------
import colors from "../../misc/colors"

interface ColorPickerProps {
    header?: string
    selectedColor: string
    selectColor: any
}

export const ColorPicker: FC<ColorPickerProps> = (props: ColorPickerProps) => {
    const { header, selectedColor, selectColor} = props

   return (
    <>
       {header.length ? <HeaderTwo content="Card Color" textAlign="left" /> : null}
                    <View style={styles.colorContainer}>
                        {Object.keys(colors.cardColors).map((current, idx) => (
                            <Pressable
                                key={current + colors.cardColors[current]}
                                style={{
                                    borderColor: selectedColor === current ? "black" : "transparent",
                                    backgroundColor: selectedColor === current ? "white" : "transparent",
                                    borderWidth: 2,
                                    padding: 1,
                                    borderRadius: 50,
                                }}
                                onPress={() => selectColor(current)}
                            >
                                <View style={[
                                    { backgroundColor: colors.cardColors[current] },
                                    styles.colorBall,
                                    selectedColor === current ? styles.colorBallSelected : null,
                                ]}></View>
                            </Pressable>
                        ))}
                    </View>
    </>
   )
}

const width = Dimensions.get("screen").width

const styles = StyleSheet.create({
   colorContainer: {
        flexDirection: "row",
        justifyContent: 'space-evenly',
        flexWrap: "wrap",

        marginBottom: 30,
        width: width - 50,
    },
    colorBall: {
        // margin: 5,
        height: 40,
        width: 40,
        borderRadius: 50,
        borderWidth: 2,
        borderColor: "#C4C4C4",

    },
    colorBallSelected: {
        // borderWidth: 4,
        borderColor: "transparent",
    },
})