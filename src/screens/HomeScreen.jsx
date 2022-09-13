/*========================================
        Import Dependencies
========================================*/
import { useEffect, useState } from "react"
import { StatusBar, StyleSheet, Text, View, ImageBackground, Dimensions, ScrollView, Pressable, TouchableOpacity } from 'react-native'
import { backgroundOne } from "../../assets/imgs/images.js"
import { RoundIconBtn } from "../components/buttons/RoundIconBtn"
import GoalsContainer from "../components/HomeScreen/GoalsContainer.jsx"
import colors from "../misc/colors"

// SCREEN GOALS
// 1. Display the users goals for today.
// 2. If no goals, show pluss button and/or text for adding new goals. Opens Manage Screen or Modal.
// 3. Feelings chart that saves and logs for the day. Changes bar color to selected color.
//?4. Below this will be next habits by day.
// SECTION END

const Manage = ({ user }) => {

    const [emotionColor, setEmotionColor] = useState(null)

    const [emotionColorModalOpen, setEmotionColorModalOpen] = useState(false)

    const [greet, setGreet] = useState(null)

    const findGreet = () => {
        const hrs = new Date().getHours()
        if (hrs === 0 || hrs < 12) return setGreet("Morning")
        if (hrs === 1 || hrs < 17) return setGreet("Afternoon")
        setGreet("Evening")
    }

    const handleEmotionColorPress = (color) => {
        console.log(color)
    }
    const handleLongPress = (color) => {
        setEmotionColor(color)
        console.log("Long Press!")
        console.log(Date.now())
        setEmotionColor(color)
    }


    useEffect(() => {
        findGreet()
    }, [])



    return (
        <>
            {/* <StatusBar /> */}
            <ImageBackground source={backgroundOne} resizeMode="cover" style={styles.backgroundImage}>
                <View style={styles.container}>
                    <Text style={styles.header} >{`Good ${greet}, ${user.name}`}</Text>
                    <Text style={styles.header} >Todays Goals</Text>
                    <GoalsContainer />
                    <Text style={styles.header}>How do you feel today?</Text>
                    
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
        marginTop: "15%",
        marginBottom: "5%",
        marginHorizontal: 25,
    },
    header: {
        textAlign: "center",
        fontSize: 25,
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