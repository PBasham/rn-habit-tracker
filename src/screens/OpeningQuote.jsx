/*========================================
        Import Dependencies
========================================*/
import { useState } from "react"
import { Dimensions, ImageBackground, Modal, StatusBar, StyleSheet, Text, View } from 'react-native'
/*========================================
        Import Styles
========================================*/
import colors from "../misc/colors"
// Import Image
import { OpeningScreen } from "../../assets/imgs/images"
import { StandardAntBtn } from "../components/buttons/StandardAntBtn"


export const OpeningQuote = () => {

    /*==== Variables ====*/

    /*==== useState ====*/
    const [modalVisable, setModalVisable] = useState(true)
    /*==== useEffect ====*/

    /*==== Functions START ====*/
    const handleModalClose = () => {
        console.log("ive been pressed!")
        setModalVisable(false)
    }
    /*==== Functions END ====*/

    return (
        <>
            <StatusBar hidden={true} />
            <Modal visible={modalVisable} animationType='fade' >
                <ImageBackground source={OpeningScreen} resizeMode="cover" style={styles.backgroundImage}>
                    <View style={styles.container}>
                        <View style={styles.quoteBox}>
                            <Text style={styles.quoteText}>Set piece of mind as your highest goal, and organize your life around it.</Text>
                            <Text style={[styles.quoteText, styles.quoteName]}>- Brian Tracey</Text>
                        </View>
                        <View style={styles.buttonContainer}>
                            <StandardAntBtn
                                style={styles.button}
                                text={"Let's go"}
                                onPress={handleModalClose}
                            // antIconName={"arrowright"}
                            />
                        </View>
                    </View>
                </ImageBackground>
            </Modal>
        </>
    )
}

/*========================================
        StyleSheet
========================================*/
// Variables
const width = Dimensions.get('window').width - 100


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "rgba(0,0,0,.3)",
    },
    backgroundImage: {
        flex: 1,
    },
    quoteBox: {
        position: "absolute",
        bottom: "50%",
        justifyContent: "flex-start",
        padding: 20,
        width,
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
    buttonContainer: {
        position: "absolute",
        bottom: "25%"
    },
})