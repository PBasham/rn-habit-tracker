/*========================================
        Import Components
========================================*/
import AsyncStorage from "@react-native-async-storage/async-storage";
import { StatusBar } from 'expo-status-bar';
import { createContext, useEffect, useState } from "react";
import { StyleSheet, Text, View, Image } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
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
import { homeIcon, manageIcon, progressIcon, settingsIcon } from "./assets/icons/icons";

const Tab = createBottomTabNavigator()

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

    return (
        <>
            {!user.name ?
                <>
                    <OpeningQuote />
                    < TellMeAboutYourself onFinish={findUser} />
                </>
                :
                <UserContext.Provider value={user}>
                    <NavigationContainer>
                        {/* Because createBottomTabNavigation is used, I can pass the NavBar through this function, to tabBar as props with destructured props that contain "navigation". Yay */}
                        <Tab.Navigator
                            tabBar={(props) => <NavBar {...props} />}
                        >
                            <Tab.Screen
                                name="Home"
                                component={HomeScreen}
                                options={{
                                    tabBarIcon: ({ref}) => <Image
                                        ref={ref}
                                        style={styles.icon}
                                        source={homeIcon}
                                    />
                                }}
                                />
                            <Tab.Screen
                                name="Manage"
                                options={{
                                    tabBarIcon: ({ref}) => <Image
                                        ref={ref}
                                        style={styles.icon}
                                        source={manageIcon}
                                    />
                                }}
                                component={Manage}
                                />
                            <Tab.Screen
                                name="Something"
                                options={{
                                    tabBarIcon: ({ref}) => <Image
                                        ref={ref}
                                        style={styles.icon}
                                        source={progressIcon}
                                    />
                                }}
                                component={Manage}
                                />
                            <Tab.Screen
                                name="Settings"
                                options={{
                                    tabBarIcon: ({ref}) => <Image
                                        ref={ref}
                                        style={styles.icon}
                                        source={settingsIcon}
                                    />
                                }}
                                component={Manage}
                            />
                        </Tab.Navigator>
                    </NavigationContainer>
                </UserContext.Provider>
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
    icon: {
        height: 36,
        width: 36,
    }
});
