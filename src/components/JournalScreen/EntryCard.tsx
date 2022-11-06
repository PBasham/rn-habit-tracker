/*========================================
        Import Dependencies
========================================*/
import { FC } from "react"
import { Pressable, StyleSheet, Text, View, Image, Dimensions } from 'react-native'
import { Entypo } from '@expo/vector-icons';
// Styling --------------------------------------------------
import { trashCanIcon } from "../../../assets/icons/icons"
import colors from "../../misc/colors"

interface EntryCardProps {
    onPress: () => void
    additionalSettings: Boolean
    note: any
}

const EntryCard = ({ onPress, additionalSettings, note }) => {

    const handleDeleteEntry = () => {
        console.log("Confirmation box will pop up.")
    }

    return (
        <Pressable onPress={() => onPress(note)} style={[styles.container]}>
            <View style={[styles.note, additionalSettings ? styles.additionalSettings : null]}>
                {additionalSettings ?
                    <Pressable style={styles.trashCanIcon} onPress={handleDeleteEntry}>
                        <Entypo name="trash" size={24} color={colors.button.textCancel} />
                    </Pressable>
                    : null}
                <Text numberOfLines={2} style={styles.noteTitle}>{note.title}</Text>
                <Text style={styles.noteDate}>{note.createdOn}</Text>
            </View>
        </Pressable>
    )
}

export default EntryCard

const viewWidth = Dimensions.get("screen").width * .0

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        paddingTop: 8,
        paddingBottom: 8,
        width: "100%",
    },
    note: {
        padding: "3%",
        borderRadius: 15,

        minHeight: 60,
        width: "100%",
        
        backgroundColor: colors.general.light,
        
    },
    noteTitle: {
        textAlign: "left",
        fontSize: 20,
        color: colors.text.dark,
        opacity: .8,
        paddingBottom: "1%",
        borderBottomWidth: 1,
        borderBottomColor: colors.general.dark,
    },
    noteDate: {
        marginTop: "auto",
        alignSelf: "flex-end",
        paddingTop: "1%",
        color: colors.text.dark,
        fontSize: 16,
    },
    additionalSettings: {
        width: "95%",
        borderWidth: 1,
        borderRadius: 15,
        borderColor: colors.general.darkTransparent,
    },
    trashCanIcon: {
        position: "absolute",
        top: 0,
        right: 0,
        margin: 8,
        zIndex: 100,
    },
})