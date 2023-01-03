/*========================================
        Imports Dependencies
========================================*/
import AsyncStorage from "@react-native-async-storage/async-storage"
import { useContext, useEffect, useState } from "react"
import { StatusBar, StyleSheet, Text, View, ImageBackground, Dimensions, ScrollView, Pressable } from 'react-native'
// Context
import { DateContext, UserContext } from "../context/"
// components --------------------------------------------------
import EmotionColorModal from "../components/HomeScreen/EmotionColorModal.jsx"
import GoalsContainer from "../components/HomeScreen/GoalsContainer.tsx"
import { HeaderOne, HeaderTwo } from "../components/Text/"
// styling --------------------------------------------------
import colors from "../misc/colors"
// inset shadow --------------------------------------------------
import InsetShadow from 'react-native-inset-shadow'

/** SCREEN GOALS
 * 1. Display the users goals for the day, and upcoming.
 * 2. If no goals, show pluss button and/or text for adding new goals. Opens Manage Screen or Modal.
 * 
 * 3. Feelings chart that saves and logs for the day. Changes bar color to selected color
    * [] When emotion saves, save it with time as well,
    * this will allow for logging of feelings throughout the day being tracked.
    * 
 * ?4. Below this will be next habits by day.
 */


const HomeScreen = ({ navigation, userGoals }) => {

    /** useContext **/
    const user = useContext(UserContext)
    const todaysDate = useContext(DateContext)
    console.log(todaysDate)
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
        // checks if the user has any entries
        if (result === null) return
        // if they do, parse it and set it in state
        const currentFeelingsLog = JSON.parse(result)
        setFeelingsLog(currentFeelingsLog)
        // check if there is already an entry or today. if so, update Bar to respective feeling / color


        if (todaysDate in currentFeelingsLog) {
            // set bar to respective feeling and color
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
        // AsyncStorage.clear()
    }, [])

    /** Functions */
    const handleEmotionPick = (feeling, color) => {

        const todaysEmotion = {
            id: Date.now(),
            feeling: feeling,
            color: color,
        }
        // check if there is already a color logged for today
        const updatedFeelingsLog = { ...feelingsLog, [todaysDate]: todaysEmotion }
        if (todaysDate in feelingsLog) {
            // if so, replace it
        } else {
            // otherwise create it
        }
        AsyncStorage.setItem("feelingsLog", JSON.stringify(updatedFeelingsLog))
        setFeelingsLog(updatedFeelingsLog)
    }

    /*========================================
            Navigation function
    ========================================*/
    const openManageScreen = () => {
        navigation.navigate("Manage", { userGoals: userGoals })
    }

    return (
        <>
            <ScrollView style={styles.container}>
                <View style={styles.contentContainer}>
                    {/* actionables -------------------------------------------------- */}
                    {/* Todays Actionables */}
                    <HeaderOne style={styles.headerOne} content={"Todays Actionables"} textAlign={"left"} />
                    {/* <GoalsContainer openManageScreen={openManageScreen} userGoals={userGoals} /> */}
                    <View style={{ height: 300, }}>
                        <InsetShadow>
                            <View style={{ flex: 1, justifyContent: 'center', alignItems: "center" }}>
                                <HeaderTwo content={"Goals that need an action today will show up here."} style={{ width: "80%" }} />
                            </View>
                        </InsetShadow>
                    </View>
                    {/* daily emotion track -------------------------------------------------- */}
                    {/* Emotion Picker */}
                    <HeaderOne style={styles.headerOne} textAlign={"left"} content={"Keep track of how your feeling"} />
                    <Pressable
                        onPress={handleEmotionBarOpen}
                        style={[
                            { backgroundColor: selectedEmotion.color || "white" },
                            styles.feelingsContainer
                        ]}
                    >
                        <Text style={{ fontSize: 36, color: selectedEmotion.color ? colors.text.lighti : colors.text.darkTransparent }}>
                            {selectedEmotion.feeling || `+`}
                        </Text>
                    </Pressable>
                    {/* Upcoming Actionables */}
                    <HeaderOne style={styles.headerOne} content={"Upcoming"} textAlign={"left"} />
                    <View style={{ height: 200, marginBottom: 100 }}>
                        <InsetShadow>
                            <View style={{ flex: 1, justifyContent: "center", alignItems: "center",}}>
                                <HeaderTwo content={"Upcoming goals will show up here."} style={{ width: "80%" }} />
                            </View>
                        </InsetShadow>
                    </View>
                </View>
            </ScrollView>
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

const width = Dimensions.get('window').width

const styles = StyleSheet.create({
    // backgroundImage: {
    //     flex: 1,
    // },
    container: {
        flex: 1,
        paddingTop: "15%",
        paddingBottom: "5%",
        backgroundColor: colors.general.background,
    },
    contentContainer: {
        
    },
    headerOne: {
        marginTop: 20,
        marginBottom: 10,
        paddingLeft: 25,
    },
    headerTwo: {

    },
    feelingsContainer: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        
        marginBottom: 20,
        marginHorizontal: 25,
        height: 60,
        borderWidth: 2,
        borderColor: colors.general.darkTransparent,
        
        borderRadius: 5,

    },
    emotionColor: {
        flex: 1,
        borderRadius: 15,
        margin: 2,
        opacity: .6,
    },
})