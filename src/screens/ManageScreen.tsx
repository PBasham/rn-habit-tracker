/*========================================
        Import Dependencies
========================================*/
import { FC, useEffect, useState } from "react"
import { View, Text, StyleSheet, Pressable, FlatList, Dimensions, SectionList } from 'react-native'
// Components --------------------------------------------------
import { StandardAntBtn } from "../components/buttons"
import { GoalCard } from "../components/ManageScreen/GoalCard"
import { CategoryCard } from "../components/ManageScreen/CategoryCard"
import { HeaderOne } from "../components/Text"
// Styles --------------------------------------------------
// import { backgroundOne } from "../../assets/imgs/images.js"
import colors from "../misc/colors.js"

interface ManageScreenProps {
    userGoals: any
    setUserGoals: any
    goalsCategories: any
    setGoalsCategories: any
}

const ManageScreen: FC<ManageScreenProps> = ({ userGoals, setUserGoals, goalsCategories, setGoalsCategories }) => {

    const [currentSort, setCurrentSort] = useState([])

    const categorySort = async () => {
        const sortedGoals = userGoals.sort((a, b) => a.category > b.category ? 1 : -1)
        setCurrentSort(sortedGoals)
    }
    const categorySortRev = () => {
        const sortedGoals = userGoals.sort((a, b) => b.category > a.category ? 1 : -1)
        setCurrentSort(sortedGoals)

    }
    
    useEffect(() => {
        categorySort()
        // categorySortRev()
    }, [])


    const handleUpdateuserGoal = (updatedGoal: any) => {
        console.log("I'll handle the update")
    }

    const handleMarkComplete = (goalId: number) => {
        console.log("This will mark ", goalId, " as complete")

        let updatedGoals = userGoals.map((current => {
            // @ts-ignore
            if (current.id === goalId) {
                console.log("Found it")
                return {
                    ...current,
                    qty: current.goalQty,
                    complete: true,
                }
            }
            return current
        }))

        setUserGoals(updatedGoals)
    }

    return (
        <>
            <View style={styles.container}>
                <HeaderOne style={styles.header} content="My Goals" />
                {userGoals.length ?
                    <FlatList
                        data={currentSort}
                        contentContainerStyle={{ paddingVertical: 20 }}
                        style={styles.userGoalsContainer}
                        keyExtractor={(item, index) => item.id + index}
                        renderItem={({ item }) =>
                            <GoalCard
                                goal={item}
                                onPress={handleUpdateuserGoal}
                                handleMarkComplete={handleMarkComplete}
                            />}
                    />
                    :
                    <></>
                }
                <Pressable onPress={() => console.log("Create new Goal!")} style={styles.createNewBtn}>
                    <Text style={styles.btnText} >Create New Goal</Text>
                </Pressable>
            </View>
        </>
    )
}

export default ManageScreen


const width = Dimensions.get("screen").width

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",

        backgroundColor: colors.general.background,
    },
    header: {
        marginTop: 40,
        opacity: .5,
    },
    userGoalsContainer: {
        flex: 1,
        flexDirection: "column",

        marginTop: 20,
        marginBottom: 20,
        // paddingVertical: 20,
        width: width,
        borderColor: colors.general.darkTransparent,
        borderTopWidth: 2,
        borderBottomWidth: 2,
        backgroundColor: colors.general.lightBlueTransparent,
    },
    createNewBtn: {

        marginTop: "auto",
        marginBottom: 40,
        paddingHorizontal: 15,
        paddingVertical: 10,
        width: "80%",
        borderRadius: 15,
        backgroundColor: "white",

        elevation: 5,
        shadowColor: colors.button.shadow,
    },
    btnText: {
        textAlign: "center",
        fontSize: 32,
        opacity: .5,
    },
})