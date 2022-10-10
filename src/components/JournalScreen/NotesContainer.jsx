/*========================================
        Import Dependencies
========================================*/
import { StyleSheet, Text, View } from 'react-native'
/*========================================
        Import Components
========================================*/
import NoteCard from "./NoteCard"
import { RoundIconBtn } from "../buttons/RoundIconBtn"
import colors from "../../misc/colors"


const NotesContainer = ({ JournalEntries }) => {

    const onPress = () => {
        console.log("I've been pressed")
    }

    const openNoteDetail = () => {
        console.log("Opening note detail!")
    }

    return (
        <View style={styles.notesContainer}>
            {/* This will be a map of the users journal entries once I've set that up. */}
            <NoteCard onPress={openNoteDetail}/>
            <NoteCard onPress={openNoteDetail}/>
            <NoteCard onPress={openNoteDetail}/>
            <NoteCard onPress={openNoteDetail}/>
            <NoteCard onPress={openNoteDetail}/>
            <RoundIconBtn
                antIconName="plus"
                onPress={onPress}
                iconColor={colors.button.textDark}
                style={{
                    position: "absolute",
                    margin: 20,
                    bottom: 0,
                    right: 0,
                    zIndex: 99,
                    elevation: 3,
                }}
            />
        </View>
    )
}

export default NotesContainer

const styles = StyleSheet.create({
    notesContainer: {
        flex: 1,
        flexDirection: "column",
        // flexWrap: "wrap",
        alignItems: "flex-start",
        paddingTop: 30,
        borderTopWidth: 2,
        borderTopColor: colors.general.darkTransparent,
    },

})