/*========================================
        Import Dependencies
========================================*/
import { StyleSheet, Text, View } from 'react-native'
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Svg, { Path } from "react-native-svg"
/*========================================
        Import Styles
========================================*/
import colors from "../../misc/colors"



const Stack = createNativeStackNavigator()



const NavBar = () => {

    return (

        
        <View style={[styles.tabBar,{ paddingBottom: "20%"}]} >
            {/* <View style={styles.selected}>
                    <View style={styles.selectedCircle}></View>
                    <View style={styles.selectedBar}></View>
                    <View style={styles.selectedCornerLeft}></View>
                    <View style={styles.selectedCornerRight}></View>
                </View>
                <View stye={styles.routes}></View> */}
            <Svg
                // xmlns="http://www.w3.org/2000/svg"
                width={110}
                height={60}
                viewBox="0 0 110 60"
                // fill="none"
                // {...props}
                style={styles.activeBackground}
            >
                <Path
                    fill="#afedd8"
                    d="M20 0H0c11.046 0 20 8.954 20 20v5c0 19.33 15.67 35 35 35s35-15.67 35-35v-5c0-11.046 8.954-20 20-20H20z"
                />
            </Svg>
        </View>
    )
}

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