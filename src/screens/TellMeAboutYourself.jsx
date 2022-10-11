/*========================================
        Import Dependencies
========================================*/
import React, { useState } from 'react'
import { Dimensions, StatusBar, StyleSheet, Text, TextInput, View, ImageBackground } from 'react-native'
import AsyncStorage from "@react-native-async-storage/async-storage"
/*========================================
        Import Components
========================================*/
import { backgroundOne } from "../../assets/imgs/images.js"
import { RoundIconBtn } from "../components/buttons/RoundIconBtn"
/*========================================
        Import Styles
========================================*/
import colors from "../misc/colors"

const TellMeAboutYourself = ({ onFinish }) => {

    /*==== Variables ====*/

    /*==== useState ====*/
    const [name, setName] = useState("")
    /*==== useEffect ====*/

    /*==== Functions START ====*/
    // get Update username when entering name.
    const handleOnChangeText = (text) => {
        setName(text)
    }

    const handleSubmit = async () => {
        const user = { name: name }
        await AsyncStorage.setItem("habitTrackerUser", JSON.stringify(user))
        if (onFinish) onFinish()
    }
    /*==== Functions END ====*/

    return (
        // <ImageBackground source={backgroundOne} resizeMode="cover" style={styles.backgroundImage}>
        <View style={styles.container}>
            <StatusBar hidden />
            <View style={styles.container}>
                <Text style={styles.generalText}>What's your name?</Text>
                <View style={styles.inputContainer}>
                    <Text style={styles.header}>Name</Text>
                    <TextInput value={name} onChangeText={handleOnChangeText} style={styles.textInput} />
                    {/* <Text style={styles.header}>Birthday</Text>
                    <TextInput value={""} onChangeText={""} style={styles.textInput} /> */}
                </View>

                {name.trim().length > 0 ?
                    <RoundIconBtn
                        antIconName={"right"}
                        iconColor={colors.button.dark}
                        onPress={handleSubmit}
                    />
                    : null}
            </View>
        </View>
        // </ImageBackground>
    )
}

export default TellMeAboutYourself

const width = Dimensions.get('window').width - 100

/*========================================
        StyleSheet
========================================*/
const styles = StyleSheet.create({
    backgroundImage: {
        flex: 1,
    },
    container: {
        flex: 1,
        alignItems: "center",
        paddingTop: "15%",
        paddingBottom: "5%",
        paddingHorizontal: 25,
        backgroundColor: colors.general.background,
    },
    generalText: {
        marginBottom: 75,
        textAlign: "center",
        fontSize: 36,
        lineHeight: 54,
    },
    inputContainer: {
        marginBottom: 25,
    },
    header: {
        marginBottom: 10,
        textAlign: "center",
        fontSize: 30,
        opacity: 0.8,
    },
    textInput: {
        marginBottom: 30,
        padding: 10,
        width,
        height: 50,
        textAlign: "center",
        color: colors.text.darkTransparent,
        fontSize: 20,
        borderColor: colors.general.dark,
        borderRadius: 10,
        backgroundColor: colors.general.light,
    }
})