/*========================================
        Import Components
========================================*/
import { StatusBar } from 'expo-status-bar';
import { useState } from "react";
import { StyleSheet, Text, View } from 'react-native';
import { OpeningQuote } from "./src/screens/OpeningQuote";
import TellMeAboutYourself from "./src/screens/TellMeAboutYourself";

export default function App() {

    /*==== Variables ====*/
    
    /*==== useState ====*/
    const [firstTimeOpen, setFirstTimeOpen] = useState(true)
    /*==== useEffect ====*/
    
    /*==== Functions START ====*/
    
    /*==== Functions END ====*/

    return (
        <>
            {firstTimeOpen ? <TellMeAboutYourself /> : null}
            {/* <OpeningQuote /> */}
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
