/** ToDo
     [] Modal: Create component for me!
        [] Add controle bar with back button that will undo anything done.
        [] 
 */
/*========================================
        Import Dependencies
========================================*/
import { FC, useEffect, useState } from "react"
import { View, ScrollView, Modal, StyleSheet, Dimensions } from 'react-native'
import InsetShadow from "react-native-inset-shadow"
// AsyncStorage --------------------------------------------------
import AsyncStorage from "@react-native-async-storage/async-storage"
// Components --------------------------------------------------
import ControlBar from "../components/ControlBar/ControlBar"
import { StandardAntBtn } from "../components/buttons"
import { GoalCard } from "../components/ManageScreen/GoalCard"
import { CategoryCard } from "../components/ManageScreen/CategoryCard"
import { HeaderOne, HeaderTwo } from "../components/Text"
import { CreateGoalModal } from "../components/Modals"
// Styles --------------------------------------------------
import colors from "../misc/colors.js"

interface ManageScreenProps {
    userGoals: any
    setUserGoals: any
    addGoal: (id: number) => void
    updateGoal: (updatedGoal: any) => void
    removeGoal: (id: number) => void
    goalsCategories: any
    setGoalsCategories: any
}

const ManageScreen: FC<ManageScreenProps> = (props: ManageScreenProps) => {

    const { userGoals, setUserGoals, addGoal, updateGoal, removeGoal, goalsCategories, setGoalsCategories } = props


    // Sorting --------------------------------------------------
    // ? maybe use state to keep track of  how the user wants tha manage screen to be sorted.
    // const [manageSort, setManageSort] = useState([])

    const categorySort = async () => {
        const sortedGoals = userGoals.sort((a, b) => a.category > b.category ? 1 : -1)
        setUserGoals(() => { return [...sortedGoals] })
    }
    const categorySortRev = () => {
        const sortedGoals = userGoals.sort((a, b) => b.category > a.category ? 1 : -1)
        setUserGoals(sortedGoals)
    }

    /**Sort Types
     * Category Asc / Des
     * ? % Complete Asc / Des
     * ??
     */

    useEffect(() => {
        categorySort()
    }, [])


    const handleUpdateuserGoal = (updatedGoal: any) => {
        console.log("I'll handle the update")
    }

    const handleMarkComplete = (goalId: number) => {
        let updatedGoals = userGoals.map((current => {
            // @ts-ignore
            if (current.id === goalId) {
                // console.log("Found it")
                return {
                    ...current,
                    qty: current.goalQty,
                    complete: true,
                }
            }
            return current
        }))

        setUserGoals(updatedGoals)
        // AsyncStorage.setItem("")
    }
    // Create Goal Modal --------------------------------------------------
    const [showCreateGoalModal, setShowCreateGoalModal] = useState<boolean>(false)

    const openGoalModal = () => {
        setShowCreateGoalModal(true)
    }
    const closeGoalModal = () => {
        setShowCreateGoalModal(false)
    }

    return (
        <>
            <View style={styles.container}>
                <ControlBar barTitle="Manage Goals" onPlusPress={openGoalModal} />
                <ScrollView style={styles.contentContainer}>
                    {/* actionables -------------------------------------------------- */}
                    {/* Todays Actionables */}
                    <HeaderOne style={styles.headerOne} content={"Todays Actionables"} textAlign={"left"} />
                    <View style={{ height: 300, }}>
                        <InsetShadow>
                            <View style={{ flex: 1, justifyContent: 'center', alignItems: "center" }}>
                                <HeaderTwo content={"Goals that need an action today will show up here."} style={{ width: "80%" }} />
                            </View>
                        </InsetShadow>
                    </View>
                    {/* Upcoming Actionables */}
                    <HeaderOne style={styles.headerOne} content={"Upcoming"} textAlign={"left"} />
                    <View style={{ height: 200, marginBottom: 100 }}>
                        <InsetShadow>
                            <View style={{ flex: 1, justifyContent: "center", alignItems: "center", }}>
                                <HeaderTwo content={"Upcoming goals will show up here."} style={{ width: "80%" }} />
                            </View>
                        </InsetShadow>
                    </View>
                </ScrollView>
            </View>
            <CreateGoalModal visible={showCreateGoalModal} closeGoalModal={closeGoalModal} />
        </>
    )
}

export default ManageScreen


const width = Dimensions.get("screen").width

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.general.background,
    },
    contentContainer: {
        flex: 1,
        paddingBottom: "5%",
    },
    headerOne: {
        marginTop: 30,
        marginBottom: 10,
        paddingLeft: 25,
    },
    // createNewBtn: {

    //     marginTop: "auto",
    //     marginBottom: 40,
    //     paddingHorizontal: 15,
    //     paddingVertical: 10,
    //     width: "80%",
    //     borderRadius: 15,
    //     backgroundColor: "white",

    //     elevation: 5,
    //     shadowColor: colors.button.shadow,
    // },
    btnText: {
        textAlign: "center",
        fontSize: 32,
        opacity: .5,
    },
})