/*========================================
        Import Dependencies
========================================*/
import { useState } from "react"
import { StyleSheet, Text, View, FlatList } from 'react-native'
import colors from "../../misc/colors"
import { RoundIconBtn } from "../buttons/RoundIconBtn"
import HeaderOne from "../Text/HeaderOne"

const GoalsContainer = () => {

    // const [todaysGoals, SetTodaysGoals] = useState([{id: "namecreatedDate", name: "Hello", yes:"no", created: ""}])
    const [todaysGoals, SetTodaysGoals] = useState([])


    const handleAddTodayGoalPress = () => {
        console.log("This will open the add goal modal!!")
    }

    return (
        <View style={styles.goalsContainer}>
            <RoundIconBtn
                antIconName="plus"
                onPress={handleAddTodayGoalPress}
                style={{
                    position: "absolute",
                    margin: 20,
                    bottom: 0,
                    right: 0,
                    zIndex: 99,
                    elevation: 3,
                }}
            />
            <View style={styles.backgroundView}></View>
            {todaysGoals.length > 0 ?
                <FlatList style={styles.todaysGoalsList} data={todaysGoals} >
                </FlatList>
                :
                <HeaderOne
                    style={{
                        flex: 1,
                        justifyContent: 'center',
                        alignItems: 'center',
                        opacity: .5,
                        marginTop: 20,
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
        padding: 10,
        zIndex: 0,
    },
    backgroundView: {
        position: "absolute",
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        borderRadius: 15,
        backgroundColor: colors.greyish,
        opacity: .2,
        zIndex: -1,
    },
    todaysGoalsList: {
        flex: 1,
    }
})