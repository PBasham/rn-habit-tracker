/*========================================
        Import Dependencies
========================================*/
import { StyleSheet, Text, View, ScrollView } from 'react-native'
import colors from "../../misc/colors"

const GoalsContainer = () => {
    return (
        <View style={styles.goalsContainer}>
            <ScrollView>
                <Text>You don't currently have any goals for today!</Text>
            </ScrollView>
        </View>
    )
}

export default GoalsContainer

const styles = StyleSheet.create({
    goalsContainer: {
        height: "50%",
        backgroundColor: colors.greyish,
        opacity: .1,
    },
})