/*========================================
        Import Dependencies
========================================*/
import { useEffect, useState } from "react"
import { StatusBar, StyleSheet, Text, View, ImageBackground, Dimensions, ScrollView, Pressable, TouchableOpacity } from 'react-native'
/*========================================
        Import Components
========================================*/
import { backgroundOne } from "../../assets/imgs/images.js"
import { RoundIconBtn } from "../components/buttons/RoundIconBtn"
import EmotionColorModal from "../components/HomeScreen/EmotionColorModal.jsx"
import GoalsContainer from "../components/HomeScreen/GoalsContainer.jsx"
import HeaderOne from "../components/Text/HeaderOne.jsx"
import colors from "../misc/colors"

// SCREEN GOALS
// 1. Display the users goals for today.
// 2. If no goals, show pluss button and/or text for adding new goals. Opens Manage Screen or Modal.
// 3. Feelings chart that saves and logs for the day. Changes bar color to selected color.
//?4. Below this will be next habits by day.
// SECTION END

const Manage = ({ user }) => {

    const [selectedEmotion, setSelectedEmotion] = useState({})

    const [greet, setGreet] = useState(null)

    const [emotionModalVisible, setEmotionModalVisible] = useState(false)

    const findGreet = () => {
        const hrs = new Date().getHours()
        if (hrs === 0 || hrs < 12) return setGreet("Morning")
        if (hrs === 1 || hrs < 17) return setGreet("Afternoon")
        setGreet("Evening")
    }

    const handleEmotionBarOpen = () => {
        console.log("Open Emotion Modal!")
        setEmotionModalVisible(true)
    }


    useEffect(() => {
        findGreet()
    }, [])



    return (
        <>
            {/* <StatusBar /> */}
            <ImageBackground source={backgroundOne} resizeMode="cover" style={styles.backgroundImage}>
                <View style={styles.container}>
                    {/* Greeting */}
                    <HeaderOne style={{ marginBottom: 20, }} content={`Good ${greet}, ${user.name}`} />
                    {/* Goals Section */}
                    <HeaderOne style={{ marginBottom: 20, }} content={"Today's Goals"} />
                    <GoalsContainer />
                    {/* Emotion Picker */}
                    <HeaderOne style={{ marginTop: 20, marginBottom: 20, }} content={"How do you feel today?"} />
                    <Pressable
                        onPress={handleEmotionBarOpen}
                        style={[
                            { backgroundColor: selectedEmotion.color || "white" },
                            styles.feelingsContainer
                        ]}
                    >
                        <Text style={{ fontSize: 36, opacity: .5 }}>
                            {selectedEmotion.feeling || `+`}
                        </Text>
                    </Pressable>
                </View>
            </ImageBackground>
            <EmotionColorModal setEmotionModalVisible={setEmotionModalVisible} selectedEmotion={selectedEmotion} setSelectedEmotion={setSelectedEmotion} visible={emotionModalVisible} />
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
        marginTop: "15%",
        marginBottom: "5%",
        marginHorizontal: 25,
    },
    feelingsContainer: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        height: "10%",
        borderRadius: 15,
        borderWidth: 6,
        borderColor: "white",
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