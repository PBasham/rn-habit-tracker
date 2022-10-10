/*========================================
        Import Dependencies
========================================*/
import { StatusBar, StyleSheet, Text, View, ImageBackground } from 'react-native'
/*========================================
        Import Styles
========================================*/
import { backgroundOne } from "../../assets/imgs/images.js"
const Settings = () => {
  return (
    <ImageBackground source={backgroundOne} resizeMode="cover" style={styles.backgroundImage}>
            {/* <StatusBar /> */}
            <View style={styles.container}>
                <Text>Update your settings</Text>
            </View>
        </ImageBackground>
  )
}

export default Settings

const styles = StyleSheet.create({
    backgroundImage: {
        flex: 1,
    },
    container: {
        flex: 1,
    }
})