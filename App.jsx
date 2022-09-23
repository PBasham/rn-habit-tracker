/*========================================
        Import Components
========================================*/
import AsyncStorage from "@react-native-async-storage/async-storage";
import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from "react";
import { StyleSheet, Text, View } from 'react-native';
/*========================================
        Import Screens / Components
========================================*/
import Manage from "./src/screens/Manage";
import HomeScreen from "./src/screens/HomeScreen";
import OpeningQuote from "./src/screens/OpeningQuote";
import TellMeAboutYourself from "./src/screens/TellMeAboutYourself";

export default function App() {


    const [user, setUser] = useState({})
    
    /*==== Functions START ====*/
    const findUser = async () => {
        const result = await AsyncStorage.getItem("habitTrackerUser")
        console.log("result ", result)
        if (!result) return
        setUser(JSON.parse(result))
    }
    /*==== Functions END ====*/
    /*==== Variables ====*/

    /*==== useState ====*/
    const [firstTimeOpen, setFirstTimeOpen] = useState(true)
    /*==== useEffect ====*/
    useEffect(() => {
        findUser()
    }, [])

    /*==== Functions START ====*/

    /*==== Functions END ====*/

    return (
        <>
            {/* <OpeningQuote /> */}
            {/* <Manage /> */}
            {!user.name ? <TellMeAboutYourself onFinish={findUser}/>
            : 
            <HomeScreen user={user}/>
            }
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
