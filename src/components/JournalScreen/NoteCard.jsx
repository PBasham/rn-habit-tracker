import { Pressable, StyleSheet, Text, View } from 'react-native'
import colors from "../../misc/colors"

const NoteCard = ({ onPress }) => {
    return (
        <Pressable onPress={onPress} style={styles.container}>
            <View style={styles.note}>
                <Text style={styles.noteTitle}>Title</Text>
                <Text style={styles.noteDate}>10/10/2022</Text>
            </View>
        </Pressable>
    )
}

export default NoteCard

const styles = StyleSheet.create({
    container: {
        justifyContent: "center",
        alignItems: "center",
        paddingTop: 8,
        paddingBottom: 8,
        width: "100%",
    },
    note: {
        minHeight: 60,
        width: 150,
        // borderRadius: 15,
        padding: "3%",
        width: "100%",
        backgroundColor: colors.general.light
    },
    noteTitle: {
        textAlign: "center",
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
})