/*========================================
        Import Components
========================================*/
import AsyncStorage from "@react-native-async-storage/async-storage";
import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from "react";
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
/*========================================
        Import Screens / Components
========================================*/
import Manage from "./src/screens/Manage";
import HomeScreen from "./src/screens/HomeScreen";
import OpeningQuote from "./src/screens/OpeningQuote";
import TellMeAboutYourself from "./src/screens/TellMeAboutYourself";
import NavBar from "./src/components/NavBar/NavBar";

const Tab = createNativeStackNavigator()

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

    const renderHomeScreen = (props) => <HomeScreen {...props} user={user} />

    return (
        <>
            {/* <OpeningQuote /> */}
            {!user.name ? <TellMeAboutYourself onFinish={findUser} />
                :
                <>
                    <NavigationContainer>
                        <Tab.Navigator
                            tabBar={(props) => <NavBar {...props} />}
                        >
                            <Tab.Screen name="Home" component={renderHomeScreen} />
                            <Tab.Screen name="Manage" component={Manage} />
                            <Tab.Screen name="Something" component={Manage} />
                            <Tab.Screen name="Settings" component={Manage} />
                        </Tab.Navigator>
                    </NavigationContainer>
                    <NavBar />
                </>
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
