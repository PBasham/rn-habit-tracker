/*========================================
        Import Dependencies
========================================*/
import { StatusBar, StyleSheet, Text, View, ImageBackground } from 'react-native'
/*========================================
        Import Styles
========================================*/
import { backgroundOne } from "../../assets/imgs/images.js"

const Manage = () => {
    return (
        <ImageBackground source={backgroundOne} resizeMode="cover" style={styles.backgroundImage}>
            {/* <StatusBar /> */}
            <View style={styles.container}>
                <Text>Habits</Text>
            </View>
        </ImageBackground>
    )
}

export default Manage

const styles = StyleSheet.create({
    backgroundImage: {
        flex: 1,
    },
    container: {
        flex: 1,
    }
})