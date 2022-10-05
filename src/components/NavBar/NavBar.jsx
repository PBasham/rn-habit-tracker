/*========================================
        Import Dependencies
========================================*/
import { StyleSheet, Text, View, Pressable } from 'react-native'
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Svg, { Path } from "react-native-svg"
/*========================================
        Import Styles
========================================*/
import colors from "../../misc/colors"



const Stack = createNativeStackNavigator()


const NavBar = ({ navigation }) => {
    
    const routes = [
        {
            key: "home",
            name: "Home",
        },
        {
            key: "manage",
            name: "Manage",
        },
        {
            key: "something",
            name: "Something",
        },
        {
            key: "settings",
            name: "Settings",
        },
    ]

    return (

        <View style={[styles.tabBar, { paddingBottom: "20%" }]} >
            <Svg
                width={110}
                height={60}
                viewBox="0 0 110 60"
                style={styles.activeBackground}
            >
                <Path
                    fill={colors.navBar.activeBackground}
                    d="M20 0H0c11.046 0 20 8.954 20 20v5c0 19.33 15.67 35 35 35s35-15.67 35-35v-5c0-11.046 8.954-20 20-20H20z"
                />
            </Svg>

            <View style={styles.tabBarContainer} >
                {routes.map((route, index) => (
                    <TabBarComponent
                        key={route.key}
                        onPress={() => navigation.navigate(route.name)}
                    />
                ))}
            </View>

        </View>
    )
}

// ----------------------------------------------------------------------

const TabBarComponent = ({ onPress }) => {

    return (
        <Pressable onPress={onPress} style={styles.component}>
            <View style={styles.componentCircle} />
            <View style={styles.iconContainer}>
                <Text>?</Text>
            </View>
        </Pressable>
    )
}

// ----------------------------------------------------------------------

export default NavBar

const styles = StyleSheet.create({
    tabBar: {
        height: 50,
        backgroundColor: colors.light,
    },
    activeBackground: {
        position: "absolute",
    },
    tabBarContainer: {
        flexDirection: "row",
        justifyContent: 'space-evenly',
    },
    component: {
        height: 60,
        width: 60,
        marginTop: -5,
    },
    componentCircle: {
        flex: 1,
        borderRadius: 30,
        backgroundColor: "white",
    },
    iconContainer: {
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        justifyContent: 'center',
        alignItems: "center",
    },
    icon: {
        height: 36,
        aspectRatio: 1,
    },
})