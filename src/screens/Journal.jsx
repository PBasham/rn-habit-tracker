/*========================================
        Import Dependencies
========================================*/
import { useEffect, useState } from "react"
import { StyleSheet, Text, View } from 'react-native'
import NotesContainer from "../components/JournalScreen/NotesContainer"
import HeaderOne from "../components/Text/HeaderOne"
/*========================================
        Import Styles
========================================*/
import colors from "../misc/colors"

const Journal = () => {

    const [JournalEntries, setJournalEntries] = useState({})

    useEffect(() => {
        // Go into AsyncStorage and get users Journal Entries in date order.
        console.log("JournalScreen:\nGetting user Journal Entries")
    }, [JournalEntries])


    return (
        <View style={styles.container}>
            <HeaderOne content={"Your thoughts on today?"} />
            {/* Search/filter bar will go here in the future. */}
            <View style={styles.searchBar}></View>
            <NotesContainer JournalEntries={JournalEntries}/>
        </View>
    )
}

export default Journal

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: "15%",
        paddingBottom: "5%",
        paddingHorizontal: 25,
        backgroundColor: colors.general.background,
    },
    searchBar: {
        marginTop: 30,
        marginBottom: 30,
        borderBottomWidth: 2,
        borderBottomColor: colors.general.darkTransparent,
    },
})