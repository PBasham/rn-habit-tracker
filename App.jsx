/** BUGS
 */
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
// Screens --------------------------------------------------
import HomeScreen from "./src/screens/HomeScreen";
import Manage from "./src/screens/ManageScreen";
import Progress from "./src/screens/Progress";
import Journal from "./src/screens/Journal";
import Settings from "./src/screens/Settings";
// Components --------------------------------------------------
import NavBar from "./src/components/NavBar/NavBar";
import OpeningQuote from "./src/screens/OpeningQuote";
import TellMeAboutYourself from "./src/screens/TellMeAboutYourself";
// context
import { UserContext, DateContext } from "./src/context";
// Styling/misc --------------------------------------------------
import { homeIcon, manageIcon, progressIcon, journalIcon, settingsIcon } from "./assets/icons/icons";
import colors from "./src/misc/colors";

const Tab = createBottomTabNavigator()

// export const UserContext = createContext()

export default function App() {

    // user --------------------------------------------------
    const [user, setUser] = useState({})

    const findUser = async () => {
        const result = await AsyncStorage.getItem("habitTrackerUser")
        console.log("\nfindUser(): App.js result ", result, "\n")
        if (!result) return
        setUser(JSON.parse(result))
    }

    // date --------------------------------------------------
    const [todaysDate, setTodaysDate] = useState("")

    const getDate = async () => {
        const mm = String(new Date().getMonth() + 1).padStart(2, "0")
        const dd = String(new Date().getDate()).padStart(2, "0")
        const yyyy = new Date().getFullYear()

        setTodaysDate(`${mm}/${dd}/${yyyy}`)
    }

    // goals / categories --------------------------------------------------
    const [habitCategories, setHabitCategories] = useState(["Willpower", "Fitness", "Health"])

    const [userGoals, setUserGoals] = useState([])

    const getUserGoals = async () => {
        const result = await AsyncStorage.getItem("habitTrackerGoals")
        // !REMOVE ME -- console.log("User Goals Result: ", result)
        if (!result) return
        setUserGoals(JSON.parse(result))
    }

    // ---- Add Goal ----------------------------------------
    const addGoal = (newGoal) => {
        const updatedGoals = [...userGoals, newGoal]
        AsyncStorage.setItem("habitTrackerGoals", JSON.stringify(updatedGoals))
        setUserGoals((current) => {return updatedGoals})
    }
    // ---- Update goal ----------------------------------------
    const updateGoal = (updatedGoal) => {
        const updatedGoals = userGoals.map((currentGoal) => {
            if (currentGoal.id === updatedGoal.id) {
                return {...updatedGoal}
            }
            return currentGoal
        })
    }
    // ---- Remove Goal ----------------------------------------
    const removeGoal = (id) => {
        const updatedGoals = userGoals.filter((currentGoal) => currentGoal.id !== id)
        setUserGoals(updatedGoals)
    }

    // user history --------------------------------------------------
    const [userHabitHistory, setUserHabitHistory] = useState({})

    const getUserHistory = async () => {
        const result = await AsyncStorage.getItem("userHabitHistory")
        // !REMOVE ME -- 
        console.log("\n getUserHistory(): App.js Result: ", result, "\n")
        if (!result) return
        setUserHabitHistory(JSON.parse(result))
    }

    /*==== Functions END ====*/

    /*==== useEffect ====*/
    useEffect(() => {
        findUser()
        getDate()
        getUserGoals()
        getUserHistory()
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
                <UserContext.Provider value={user} style={styles.container}>
                    <DateContext.Provider value={todaysDate}>
                        <NavigationContainer>
                            {/* Because createBottomTabNavigation is used, I can pass the NavBar through this function, to tabBar as props with destructured props that contain "navigation". Yay */}
                            <Tab.Navigator
                                tabBar={(props) => <NavBar {...props} />}
                                screenOptions={{
                                    headerShown: false,
                                }}
                            >
                                <Tab.Screen
                                    name="Home"
                                    // component={HomeScreen}
                                    options={{
                                        tabBarIcon: ({ ref }) => <Image
                                            ref={ref}
                                            style={styles.icon}
                                            source={homeIcon}
                                        />
                                    }}
                                >
                                    {(props) => <HomeScreen {...props} userGoals={userGoals} />}
                                </Tab.Screen>
                                <Tab.Screen
                                    name="Manage"
                                    // component={Manage}
                                    options={{
                                        tabBarIcon: ({ ref }) => <Image
                                            ref={ref}
                                            style={styles.icon}
                                            source={manageIcon}
                                        />
                                    }}
                                >
                                    {(props) => <Manage {...props}
                                        userGoals={userGoals}
                                        setUserGoals={setUserGoals}
                                        addGoal={addGoal}
                                        updateGoal={updateGoal}
                                        removeGoal={removeGoal}
                                        goalsCategories={habitCategories}
                                        setGoalsCategories={setHabitCategories}
                                    />}
                                </Tab.Screen>
                                <Tab.Screen
                                    name="Progress"
                                    options={{
                                        tabBarIcon: ({ ref }) => <Image
                                            ref={ref}
                                            style={styles.icon}
                                            source={progressIcon}
                                        />
                                    }}
                                    component={Progress}
                                />
                                <Tab.Screen
                                    name="Journal"
                                    component={Journal}
                                    options={{
                                        tabBarIcon: ({ ref }) => <Image
                                            ref={ref}
                                            style={styles.icon}
                                            source={journalIcon}
                                        />
                                    }}
                                />
                                <Tab.Screen
                                    name="Settings"
                                    component={Settings}
                                    options={{
                                        tabBarIcon: ({ ref }) => <Image
                                            ref={ref}
                                            style={styles.icon}
                                            source={settingsIcon}
                                        />
                                    }}
                                />
                            </Tab.Navigator>
                        </NavigationContainer>
                    </DateContext.Provider>
                </UserContext.Provider>
            }
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors.general.background,
    },
    icon: {
        height: 36,
        width: 36,
    }
});
