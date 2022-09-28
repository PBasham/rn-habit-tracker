/*========================================
        Import Components
========================================*/
import AsyncStorage from "@react-native-async-storage/async-storage";
import { StatusBar } from 'expo-status-bar';
import { createContext, useEffect, useState } from "react";
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
/*========================================
        Import Screens / Components
========================================*/
import HomeScreen from "./src/screens/HomeScreen";
import Manage from "./src/screens/Manage";
import OpeningQuote from "./src/screens/OpeningQuote";
import TellMeAboutYourself from "./src/screens/TellMeAboutYourself";
import NavBar from "./src/components/NavBar/NavBar";
// context
import { UserContext } from "./src/context/UserContext";

const Stack = createNativeStackNavigator()

// export const UserContext = createContext()

export default function App() {


    /*==== useState ====*/
    const [user, setUser] = useState({})

    /*==== Functions START ====*/
    const findUser = async () => {
        const result = await AsyncStorage.getItem("habitTrackerUser")
        console.log("result ", result)
        if (!result) return
        setUser(JSON.parse(result))
    }
    /*==== Functions END ====*/

    /*==== useEffect ====*/
    useEffect(() => {
        findUser()
        // AsyncStorage.clear()
    }, [])

    // const renderHomeScreen = (props) => <HomeScreen {...props} user={user} />

    return (
        <>
            {/* <OpeningQuote /> */}
            <UserContext.Provider value={user}>
                {!user.name ? <TellMeAboutYourself onFinish={findUser} />
                    :
                    <>
                        <NavigationContainer>
                            <Stack.Navigator
                                tabBar={(props) => <NavBar {...props} />}
                            >
                                <Stack.Screen name="Home" component={HomeScreen} />
                                <Stack.Screen name="Manage" component={Manage} />
                                <Stack.Screen name="Something" component={Manage} />
                                <Stack.Screen name="Settings" component={Manage} />
                            </Stack.Navigator>
                        </NavigationContainer>
                        {/* <NavBar /> */}
                    </>
                }
            </UserContext.Provider>
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
