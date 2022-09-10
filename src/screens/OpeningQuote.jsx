/*========================================
        Import Dependencies
========================================*/
import { ImageBackground, StyleSheet, Text, View } from 'react-native'
/*========================================
        Import Styles
========================================*/
import colors from "../misc/colors"
// Import Image
import { OpeningScreen } from "../../assets/imgs/images"


export const OpeningQuote = () => {

    /*==== Variables ====*/

    /*==== useState ====*/
    
    /*==== useEffect ====*/
    
    /*==== Functions START ====*/
    
    /*==== Functions END ====*/

    return (
        <View style={styles.container}>
            <ImageBackground source={OpeningScreen} resizeMode="cover" style={styles.backgroundImage}>
                <View style={styles.quoteBox}>
                    <Text style={styles.quoteText}>Set piece of mind as your highest goal, and organize your life around it.</Text>
                    <Text style={[styles.quoteText, styles.quoteName]}>- Brian Tracey</Text>
                </View>
                {/* Button Here */}
            </ImageBackground>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    backgroundImage: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    quoteBox: {
        // margin: "20%",
        justifyContent: "flex-start",
        padding: 20,
        width: "70%",
        height: 175,
        color: colors.light,
        borderRadius: 15,
        backgroundColor: colors.transparentDark,
    },
    quoteText: {
        textAlign: "center",
        lineHeight: 30,
        color: colors.light,
        fontSize: 18,
    },
    quoteName: {
        marginTop: "auto",
        textAlign: "center",
        fontSize: 16,
    },
})