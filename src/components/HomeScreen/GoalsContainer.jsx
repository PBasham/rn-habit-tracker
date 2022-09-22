/*========================================
        Import Dependencies
========================================*/
import { useState } from "react"
import { StyleSheet, Text, View, FlatList } from 'react-native'
import colors from "../../misc/colors"
import HeaderOne from "../Text/HeaderOne"

const GoalsContainer = () => {

    const [todaysGoals, SetTodaysGoals] = useState([{id: "namecreatedDate", name: "Hello", yes:"no", created: ""}])

    return (
        <View style={styles.goalsContainer}>
            <View style={styles.backgroundView}>
            </View>
            {todaysGoals.length > 0 ?
                <FlatList data={todaysGoals} >
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