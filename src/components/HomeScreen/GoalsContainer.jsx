/*========================================
        Import Dependencies
========================================*/
import { useState } from "react"
import { StyleSheet, Text, View, ScrollView } from 'react-native'
import colors from "../../misc/colors"
import HeaderOne from "../Text/HeaderOne"

const GoalsContainer = () => {

    const [todaysGoals, SetTodaysGoals] = useState([])

    return (
        <View style={styles.goalsContainer}>
            <View style={styles.backgroundView}>
            </View>
            {todaysGoals.length > 0 ?
                <ScrollView>
                </ScrollView>
                :
                <HeaderOne
                    style={{
                        flex: 1,
                        justifyContent: 'center',
                        alignItems: 'center',
                        opacity: .5,
                        padding: 10,
                    }}
                    content={"You don't currently have any goals for today!"}
                />
            }
        </View>
    )
}

export default GoalsContainer

const styles = StyleSheet.create({
    goalsContainer: {
        position: "relative",
        height: "50%",
    },
    backgroundView: {
        position: "absolute",
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: colors.greyish,
        opacity: .2,
    },
})