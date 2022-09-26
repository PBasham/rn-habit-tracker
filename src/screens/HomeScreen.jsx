/*========================================
        Import Dependencies
========================================*/
import AsyncStorage from "@react-native-async-storage/async-storage"
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

const Manage = ({ user, navigation }) => {

    /* State */
    const [selectedEmotion, setSelectedEmotion] = useState({})

    const [greet, setGreet] = useState(null)

    const [emotionModalVisible, setEmotionModalVisible] = useState(false)

    const [feelingsLog, setFeelingsLog] = useState({})

    /* Functions */
    const findGreet = () => {
        const hrs = new Date().getHours()
        if (hrs === 0 || hrs < 12) return setGreet("Morning")
        if (hrs === 1 || hrs < 17) return setGreet("Afternoon")
        setGreet("Evening")
    }

    const findFeelingsLog = async () => {
        const result = await AsyncStorage.getItem("feelingsLog")
        console.log("result ", result)
        if (result === null) return
        setFeelingsLog(JSON.parse(result))
        if (`${new Date().getMonth()}/${new Date().getDay()}/${new Date().getFullYear()}` in JSON.parse(result)) {
            console.log("Entry for today exist!")
        }
    }

    const handleEmotionBarOpen = () => {
        setEmotionModalVisible(true)
    }

    /** UseEffect */
    useEffect(() => {
        findGreet()
        findFeelingsLog()
        console.log("feelingsLog: ", feelingsLog)
        // AsyncStorage.clear()
    }, [])

    /** Functions */
    const handleEmotionPick = (feeling, color) => {

        const todaysDate = `${new Date().getMonth()}/${new Date().getDay()}/${new Date().getFullYear()}`

        console.log("date: ", todaysDate)

        const todaysEmotion = {
                id: Date.now(),
                feeling: feeling,
                color: color,
            }
        // check if there is already a color logged for today

        // if so, replace it
        const updatedFeelignsLog = { ...feelingsLog, [todaysDate]: todaysEmotion }
        setFeelingsLog(updatedFeelignsLog)

        // otherwise create it
        AsyncStorage.setItem("feelingsLog", JSON.stringify(updatedFeelignsLog))


        console.log(`todaysEmotion:`, todaysEmotion)
    }


    /*========================================
            Navigation function
    ========================================*/
    const openManageScreen = () => {
        navigation.navigate("Manage")
    }

    return (
        <>
            {/* <StatusBar /> */}
            <ImageBackground source={backgroundOne} resizeMode="cover" style={styles.backgroundImage}>
                <View style={styles.container}>
                    {/* Greeting */}
                    <HeaderOne style={{ marginBottom: 20, }} content={`Good ${greet}, ${user.name}`} />
                    {/* Goals Section */}
                    <HeaderOne style={{ marginBottom: 20, }} content={"Today's Goals"} />
                    <GoalsContainer openManageScreen={openManageScreen} />
                    {/* Emotion Picker */}
                    <HeaderOne style={{ marginTop: 20, marginBottom: 20, }} content={"How do you feel today?"} />
                    <Pressable
                        onPress={handleEmotionBarOpen}
                        style={[
                            { backgroundColor: selectedEmotion.color || "white" },
                            styles.feelingsContainer
                        ]}
                    >
                        <Text style={{ fontSize: 36, color: selectedEmotion.color ? colors.light : colors.transparentDark }}>
                            {selectedEmotion.feeling || `+`}
                        </Text>
                    </Pressable>
                </View>
            </ImageBackground>
            <EmotionColorModal
                visible={emotionModalVisible}
                setEmotionModalVisible={setEmotionModalVisible}
                selectedEmotion={selectedEmotion}
                setSelectedEmotion={setSelectedEmotion}
                handleEmotionPick={handleEmotionPick}
            />
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
        borderWidth: 3,
        borderColor: colors.light,
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