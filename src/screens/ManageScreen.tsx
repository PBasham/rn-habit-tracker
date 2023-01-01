/** // TODO
    ** [x] CreateGoalModal: Create component for me!
    *    [x] Add controle bar with back button that will undo anything done.
    *    [x] Ability to create goal
    ** [] For goals:
    *    [x] Add goal
    *    [] remove goal
    *    [] update goal
    ** [] EditGoalModal:
    *    [] Open for each goal when goal is clicked.
    *    [] Allow for editing each thing...
    *    [] Update goal from this.
    ** [x] Way to identify 'PastDue' actionables under todays actionables.
    *    [x] header? color? what?
    ** [] Added back in categories for goals,
    *    [] Create category cards that will hold all items that have that category,
    *        -- like cards with x/x goals completed for the category
    *        -- this will open up upon click and show the items in that category. 
    *?       -- If done this way, how would this sort out the completed? 
    *?       -- maybe only daily would keep the completed?
    *?        -- Each day in upcoming would contain multiple category cards? or just a *general number of task?
    *       ! Run this by someone for opinions.
    ** [x] Section for complete, below upcoming.
    *    [x] When an item is completed, it should no longer show up on actionables, but a seperate archive section?
    *    [] OR create section below for completed, and add option to archive it seperatly -- Out of view.
    * [] Add time if specific is working correctly.
    * [] ! BREAK down into components.
 */
/*========================================
        Import Dependencies
========================================*/
import { FC, useEffect, useState } from "react"
import { View, ScrollView, Modal, StyleSheet, Dimensions } from 'react-native'
// AsyncStorage --------------------------------------------------
import AsyncStorage from "@react-native-async-storage/async-storage"
// Components --------------------------------------------------
import ControlBar from "../components/ControlBar/ControlBar"
import { StandardAntBtn } from "../components/buttons"
import { GoalCard } from "../components/ManageScreen/GoalCard"
import { CategoryCard } from "../components/ManageScreen/CategoryCard"
import { HeaderOne, HeaderTwo } from "../components/Text"
import { CreateGoalModal } from "../components/Modals"
// helperFunctions --------------------------------------------------
import { getDate } from "../misc/helpers"
// Styles --------------------------------------------------
import colors from "../misc/colors.js"

interface ManageScreenProps {
    userGoals: any
    setUserGoals: any
    addGoal: (goal: object) => void
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
        // removed until categories are re-implimented
        // categorySort()
        // AsyncStorage.setItem("userGoals", "")

    }, [])


    const handleUpdateuserGoal = (updatedGoal: any) => {
        console.log("I'll handle the update")
    }

    const handleMarkComplete = (goalId: number) => {
        // check if qty goal === current qty, if so mark complete, other wise mark incomplete if not already.
        let updatedGoals = userGoals.map((current => {
            // @ts-ignore
            if (current.id === goalId) {
                if (current.complete === true) {
                    return {
                        ...current,
                        qty: current.qtyBeforeComplete,
                        complete: false,
                    }
                } else {
                    return {
                        ...current,
                        qtyBeforeComplete: current.qty,
                        qty: current.goalQty,
                        complete: true,
                    }
                }
            }
            return current
        }))

        setUserGoals(updatedGoals)
        AsyncStorage.setItem("userGoals", JSON.stringify(updatedGoals))
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
                    {/* if there are no goals, height 300, otherwise */}
                    <View style={styles.goalContainer}>
                        {userGoals.filter((current) => 
                                new Date(current.dueDate) <= new Date(getDate()) && !current.complete).length
                        ?
                        <>
                            {

                                userGoals.filter((current) => current.dueDate === getDate()).map((current, idx) => {
                                    return <GoalCard key={idx} goal={current} onPress={() => null} handleMarkComplete={handleMarkComplete} />
                                })
                            }
                            {
                                userGoals.filter((current) => new Date(current.dueDate) < new Date(getDate()) && !current.complete).map((current, idx) => {
                                    return <GoalCard key={idx} goal={current} onPress={() => null} handleMarkComplete={handleMarkComplete} />
                                })
                            }

                        </>
                        :
                        <HeaderTwo content={"Goals that need an action today will show up here."} style={{ width: "80%" }} />}
                    </View>
                    {/* Upcoming Actionables */}
                    <HeaderOne style={styles.headerOne} content={"Upcoming"} textAlign={"left"} />
                    <View style={[styles.goalContainer,]}>
                        {userGoals.filter((current) => new Date(current.dueDate) > new Date(getDate())).length ?
                            userGoals.filter((current) => new Date(current.dueDate) > new Date(getDate())).map((current, idx) => {
                                return <GoalCard key={idx} goal={current} onPress={() => null} handleMarkComplete={handleMarkComplete} />
                            })
                            :
                            <HeaderTwo content={"Upcoming goals will show up here."} style={{ width: "80%" }} />}
                    </View>
                    <HeaderOne style={styles.headerOne} content={"Complete"} textAlign={"left"} />
                    <View style={[styles.goalContainer, { marginBottom: 100 }]}>
                        {userGoals.filter((current) => new Date(current.dueDate) < new Date(getDate()) && current.complete).length ?
                            userGoals.filter((current) => new Date(current.dueDate) < new Date(getDate()) && current.complete).map((current, idx) => {
                                return <GoalCard key={idx} goal={current} onPress={() => null} handleMarkComplete={handleMarkComplete} />
                            })
                            :
                            <HeaderTwo content={"Upcoming goals will show up here."} style={{ width: "80%" }} />}
                    </View>
                    {/** Component
                     * Header:
                     * containerStyle:
                     * list
                     * emptyMessage
                     * 
                     HeaderOne
                     View
                        Check on length of filter
                            if length, filter for those items
                            otherwise give HeaderTwo Message
                     /View
                    
                    
                    
                    */}
                </ScrollView>
            </View>
            <CreateGoalModal visible={showCreateGoalModal} closeGoalModal={closeGoalModal} addGoal={addGoal} />
            {/* Edit goal modal */}
        </>
    )
}
/**
 * goalSection that gets passed a filtered list.
 */
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
    goalContainer: {
        flex: 1,
        justifyContent: "flex-start",
        alignItems: "center",
        minHeight: 300,
    }
})