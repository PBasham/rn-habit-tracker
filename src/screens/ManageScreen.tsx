/*========================================
        Import Dependencies
========================================*/
import { FC } from "react"
import { View, Text, StyleSheet, Pressable, FlatList, Dimensions } from 'react-native'
// Components --------------------------------------------------
import { StandardAntBtn } from "../components/buttons"
import { GoalCard } from "../components/ManageScreen/GoalCard"
import { HeaderOne } from "../components/Text"
// Styles --------------------------------------------------
// import { backgroundOne } from "../../assets/imgs/images.js"
import colors from "../misc/colors.js"

interface ManageScreenProps {
    userGoals: any
    setUserGoals: any
}

const ManageScreen: FC<ManageScreenProps> = ({ userGoals, setUserGoals }) => {

    const handleUpdateuserGoal = (updatedGoal: any) => {
        console.log("I'll handle the update")
    }

    const handleMarkComplete = (goalId: number) => {
        console.log("This will mark ", goalId, " as complete")
    }


    return (
        <>
            {/* <ImageBackground source={backgroundOne} resizeMode="cover" style={styles.backgroundImage}> */}
            {/* <StatusBar /> */}
            <View style={styles.container}>
                <HeaderOne style={styles.header} content="My Goals" />
                {true ?
                    <FlatList
                        style={styles.userGoalsContainer}
                        // @ts-ignore
                        data={userGoals}
                        keyExtractor={item => item.id.toString()}
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
            {/* </ImageBackground> */}
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