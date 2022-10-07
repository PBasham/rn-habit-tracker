/*========================================
        Import Dependencies
========================================*/
import { useEffect, useReducer } from "react";
import { StyleSheet, Text, View, Pressable, LayoutChangeEvent } from 'react-native'
// svg
import Svg, { Path } from "react-native-svg"
// reanimated
import Animated, {useAnimatedStyle, withTiming, useDerivedValue} from "react-native-reanimated";
/*========================================
        Import Styles
========================================*/
import colors from "../../misc/colors"

// Reanimated --------------------------------------------------

const AnimatedSvg = Animated.createAnimatedComponent(Svg)

// --------------------------------------------------


const NavBar = ({ state: { index: activeIndex, routes }, navigation, descriptors }) => {


    // useEffect(() => {
    // }, [activeIndex])
    
    
    // get information about components position on screen.
    const reducer = (state: any, action: { x: number, index: number }) => {
        return [...state, { x: action.x, index: action.index }]
    }

    const [layout, dispatch] = useReducer(reducer, [])
    console.log("\nActive Index: ", activeIndex,"\nlayout: \n", layout)

    const handleLayout = (event: LayoutChangeEvent, index: number) => {
        dispatch({ x: event.nativeEvent.layout.x, index })
    }

    // Calculations for animation of BottomTabBar --------------------------------------------------

     const xOffset = useDerivedValue(() => {
        // return if the component has not yet finished rendering.
        if (layout.length !== routes.length) return 0

        // 
        return [...layout].find(({ index }) => index === activeIndex)!.x -25
     }, [activeIndex, layout])

     const animatedStyles = useAnimatedStyle(() => {
        return {
            transform: [{ translateX: withTiming(xOffset.value, { duration: 150 }) }],
        }
     })
          

    return (

        <View style={[styles.tabBar, { paddingBottom: "20%" }]} >
            <AnimatedSvg
                width={110}
                height={60}
                viewBox="0 0 110 60"
                style={[styles.activeBackground, animatedStyles]}
            >
                <Path
                    fill={colors.navBar.activeBackground}
                    d="M20 0H0c11.046 0 20 8.954 20 20v5c0 19.33 15.67 35 35 35s35-15.67 35-35v-5c0-11.046 8.954-20 20-20H20z"
                />
            </AnimatedSvg>

            <View style={styles.tabBarContainer} >
                {routes.map((route, index) => (
                    <TabBarComponent
                        key={route.key}
                        onLayout={(e) => handleLayout(e, index)}
                        onPress={() => navigation.navigate(route.name)}
                    />
                ))}
            </View>

        </View>
    )
}

// ----------------------------------------------------------------------

// LOOKATME - Look more into what this is and how it works
type TabBarComponentProps = {
    onLayout: (e: LayoutChangeEvent) => void
    onPress: () => void
}

const TabBarComponent = ({ onPress, onLayout }: TabBarComponentProps) => {

    return (
        <Pressable
            onPress={onPress}
            onLayout={onLayout}
            style={styles.component}
        >
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