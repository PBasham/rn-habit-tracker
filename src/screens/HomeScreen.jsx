/*========================================
        Import Dependencies
========================================*/
import { StatusBar, StyleSheet, Text, View, ImageBackground, Dimensions } from 'react-native'
import { backgroundOne } from "../../assets/imgs/images.js"

// SCREEN GOALS
// 1. Display the users goals for today.
// 2. If no goals, show pluss button and/or text for adding new goals. Opens Manage Screen or Modal.
// 3. Feelings chart that saves and logs for the day. Changes bar color to selected color.
//?4. Below this will be next habits by day.
// SECTION END

const Manage = () => {
    return (
        <>
            {/* <StatusBar /> */}
            <ImageBackground source={backgroundOne} resizeMode="cover" style={styles.backgroundImage}>
                <View style={styles.container}>
                    <Text style={styles.header} >Home Screen</Text>
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
        marginTop: "10%",
        marginBottom: "5%",
        marginHorizontal: 25,
        backgroundColor: "red",
    },
    header: {
        fontSize: 32,
        fontFamily: "Open sans",
    }
})