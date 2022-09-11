/*========================================
        Import Dependencies
========================================*/
import React, { useState } from 'react'
import { Dimensions, StatusBar, StyleSheet, Text, TextInput, View } from 'react-native'
import { RoundIconBtn } from "../components/buttons/RoundIconBtn"
/*========================================
        Import Styles
========================================*/
import colors from "../misc/colors"

const TellMeAboutYourself = () => {

    /*==== Variables ====*/

    /*==== useState ====*/
    const [user, setUser] = useState("")
    /*==== useEffect ====*/

    /*==== Functions START ====*/
    // get Update username when entering name.
    const handleOnChangeText = text => setUser(text)
    /*==== Functions END ====*/

    return (
        <>
            <StatusBar hidden />
            <View style={styles.container}>
                <Text style={styles.generalText}>What's your name?</Text>
                <View style={styles.inputContainer}>
                    <Text style={styles.header}>Name</Text>
                    <TextInput value={user} onChangeText={handleOnChangeText} style={styles.textInput} />
                    {/* <Text style={styles.header}>Birthday</Text>
                    <TextInput value={""} onChangeText={""} style={styles.textInput} /> */}
                </View>
                <RoundIconBtn antIconName={"right"} size={36} iconColor={colors.blue}/>
                {/* <StandardAntBtn 
                    antIconName={"check"}
                /> */}
            </View>
        </>
    )
}

export default TellMeAboutYourself

const width = Dimensions.get('window').width - 100

/*========================================
        StyleSheet
========================================*/
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "flex-start",
        alignItems: "center",
        padding: 100,
        backgroundColor: colors.lightblue,
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
        height: 40,
        textAlign: "center",
        color: colors.blue,
        fontSize: 20,
        backgroundColor: colors.light,
    }
})