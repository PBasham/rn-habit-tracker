/*========================================
        Import Dependencies
========================================*/
import { useState } from "react"
import { StatusBar, StyleSheet, Text, View, ImageBackground, Dimensions, ScrollView, Pressable, TouchableOpacity } from 'react-native'
import { backgroundOne } from "../../assets/imgs/images.js"
import { RoundIconBtn } from "../components/buttons/RoundIconBtn"
import colors from "../misc/colors"

// SCREEN GOALS
// 1. Display the users goals for today.
// 2. If no goals, show pluss button and/or text for adding new goals. Opens Manage Screen or Modal.
// 3. Feelings chart that saves and logs for the day. Changes bar color to selected color.
//?4. Below this will be next habits by day.
// SECTION END

const Manage = () => {

    const [emotionColor, setEmotionColor] = useState(null)




    const handleEmotionColorPress = (color) => {
        console.log(color)
    }
    const handleLongPress = (color) => {
        setEmotionColor(color)
        console.log("Long Press!")
    }

    return (
        <>
            {/* <StatusBar /> */}
            <ImageBackground source={backgroundOne} resizeMode="cover" style={styles.backgroundImage}>
                <View style={styles.container}>
                    <Text style={styles.header} >Todays Goals</Text>
                    <View style={styles.goalsContainer}>
                        <ScrollView>

                        </ScrollView>
                    </View>
                    <Text style={styles.header}>How do you feel today?</Text>
                    <View style={[,styles.feelingsContainer]}>
                        <TouchableOpacity
                            style={[styles.emotionColor, styles.backgroundGreen]}
                            onPress={() => handleEmotionColorPress("Green")}
                            onLongPress={() => handleLongPress()}
                        >

                        </TouchableOpacity>
                        <TouchableOpacity
                            style={[styles.emotionColor, styles.backgroundYellow]}
                            onPress={() => handleEmotionColorPress("Yellow")}
                            onLongPress={() => handleLongPress()}
                        >

                        </TouchableOpacity>
                        <TouchableOpacity
                            style={[styles.emotionColor, styles.backgroundOrange]}
                            onPress={() => handleEmotionColorPress("Orange")}
                            onLongPress={() => handleLongPress()}
                        >

                        </TouchableOpacity>
                        <TouchableOpacity
                            style={[styles.emotionColor, styles.backgroundRed]}
                            onPress={() => handleEmotionColorPress("Red")}
                            onLongPress={() => handleLongPress()}
                        >

                        </TouchableOpacity>
                        <TouchableOpacity
                            style={[styles.emotionColor, styles.backgroundPurple]}
                            onPress={() => handleEmotionColorPress("Purple")}
                            onLongPress={() => handleLongPress()}
                        >

                        </TouchableOpacity>
                        <TouchableOpacity
                            style={[styles.emotionColor, styles.backgroundBlue]}
                            onPress={() => handleEmotionColorPress("Blue")}
                            onLongPress={() => handleLongPress()}
                        >

                        </TouchableOpacity>
                    </View>
                </View>
            </ImageBackground>
        </>
    )
}

export default Manage

const width = Dimensions.get('window').width - 50

const styles = StyleSheet.create({
    backgroundImage: {
        flex: 1,
    },
    container: {
        flex: 1,
        marginTop: "20%",
        marginBottom: "5%",
        marginHorizontal: 25,
    },
    header: {
        textAlign: "center",
        fontSize: 32,
    },
    goalsContainer: {
        height: "50%",
        backgroundColor: colors.greyish,
        opacity: .1,
    },
    feelingsContainer: {
        flexDirection: "row",
        justifyContent: "space-evenly",
        height: "10%",
        borderRadius: 15,
        backgroundColor: colors.light,
    },
    emotionColor: {
        flex: 1,
        borderRadius: 15,
        margin: 2,
        opacity: .6,
    },
    backgroundGreen: {
        backgroundColor: "green",
    },
    backgroundYellow: {
        backgroundColor: "yellow",
    },
    backgroundOrange: {
        backgroundColor: "orange",
    },
    backgroundRed: {
        backgroundColor: "red",
    },
    backgroundPurple: {
        backgroundColor: "purple",
    },
    backgroundBlue: {
        backgroundColor: "blue",
    },
})