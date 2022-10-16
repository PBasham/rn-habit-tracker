/*========================================
        Import Dependencies
========================================*/
import AsyncStorage from "@react-native-async-storage/async-storage"
import { useContext, useEffect, useState } from "react"
import { StatusBar, StyleSheet, Text, View, ImageBackground, Dimensions, ScrollView, Pressable } from 'react-native'
// Context
import { DateContext, UserContext } from "../context/"
/*========================================
        Import Components
========================================*/
import { backgroundOne } from "../../assets/imgs/images.js"
import { RoundIconBtn } from "../components/buttons/"
import EmotionColorModal from "../components/HomeScreen/EmotionColorModal.jsx"
import GoalsContainer from "../components/HomeScreen/GoalsContainer.jsx"
import { HeaderOne } from "../components/Text/"
/*========================================
        Import Styles
========================================*/
import colors from "../misc/colors"

// SCREEN GOALS
// 1. Display the users goals for today.
// 2. If no goals, show pluss button and/or text for adding new goals. Opens Manage Screen or Modal.
// 3. Feelings chart that saves and logs for the day. Changes bar color to selected color.
//?4. Below this will be next habits by day.
// SECTION END


const HomeScreen = ({ navigation }) => {

    /** useContext **/
    const user = useContext(UserContext)
    const todaysDate = useContext(DateContext)

    console.log("todaysDate ", todaysDate)
    
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

    // gets the users feelingLog
    const findFeelingsLog = async () => {
        const result = await AsyncStorage.getItem("feelingsLog")
        console.log("result ", result)
        // checks if the user has any entries
        if (result === null) return
        // if they do, parse it and set it in state
        const currentFeelingsLog = JSON.parse(result)
        setFeelingsLog(currentFeelingsLog)
        // check if there is already an entry or today. if so, update Bar to respective feeling / color
        

        if (todaysDate in currentFeelingsLog) {
            console.log("Entry for today exist!")
            // set bar to respective feeling and color
            console.log("currentFeelingsLog: ", currentFeelingsLog)
            setSelectedEmotion({
                feeling: currentFeelingsLog[todaysDate].feeling,
                color: currentFeelingsLog[todaysDate].color
            })
        }
    }

    // Opens emotion Modal
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

        console.log(`\n\nCurrent Feelings log: `, feelingsLog, `\n\n`)

        const todaysEmotion = {
            id: Date.now(),
            feeling: feeling,
            color: color,
        }
        // check if there is already a color logged for today
        const updatedFeelingsLog = { ...feelingsLog, [todaysDate]: todaysEmotion }
        if (todaysDate in feelingsLog) {
            // if so, replace it
            console.log("Already an entry for today. Just update the bar.")
        } else {
            // otherwise create it
            console.log("Create new entry for log!")
        }
        console.log("Updated feelings log: ", updatedFeelingsLog)
        AsyncStorage.setItem("feelingsLog", JSON.stringify(updatedFeelingsLog))
        setFeelingsLog(updatedFeelingsLog)



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
            {/* <ImageBackground source={backgroundOne} resizeMode="cover" style={styles.backgroundImage}> */}
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
                        <Text style={{ fontSize: 36, color: selectedEmotion.color ? colors.text.light : colors.text.darkTransparent }}>
                            {selectedEmotion.feeling || `+`}
                        </Text>
                    </Pressable>
                </View>
            {/* </ImageBackground> */}
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

export default HomeScreen


/*========================================
        Styling / Variables for styling
========================================*/

const width = Dimensions.get('window').width - 50

const styles = StyleSheet.create({
    // backgroundImage: {
    //     flex: 1,
    // },
    container: {
        flex: 1,
        paddingTop: "15%",
        paddingBottom: "5%",
        paddingHorizontal: 25,
        backgroundColor: colors.general.background,
    },
    feelingsContainer: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        height: "10%",
        borderRadius: 15,
        borderWidth: 3,
        borderColor: colors.general.light,
    },
    emotionColor: {
        flex: 1,
        borderRadius: 15,
        margin: 2,
        opacity: .6,
    },
})