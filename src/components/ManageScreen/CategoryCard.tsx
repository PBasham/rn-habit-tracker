/*========================================
        Import Dependencies
========================================*/
import React, { FC } from 'react'
            <Text>Category</Text>
            import { View, Text, Pressable, StyleSheet, Dimensions } from 'react-native'
import colors from "../../misc/colors"

interface CategoryCardProps {
    name: string
    goals: any
}

export const CategoryCard: FC<CategoryCardProps> = ({ name, goals }) => {

    return (
        <View style={styles.container}>
            <Text style={styles.categoryText} >{name}</Text>
            {console.log(goals)}
            {goals}
            {/* <Text style={[styles.categoryText, styles.categoryCount]}>0/3</Text> */}
        </View>
    )
}

const width = Dimensions.get("screen").width

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        // paddingHorizontal: 20,
    },
    categoryCard: {
        position: "relative",

        flexDirection: "row",

        marginVertical: 10,
        marginHorizontal: 20,
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 15,
        backgroundColor: colors.general.light,

        elevation: 5,
        shadowColor: colors.general.shadow,
    },
    categoryText: {
        
        marginTop: 20,
        paddingBottom: 10,
        width: width - 50,
        borderBottomWidth: 2,
        borderBottomColor: colors.general.darkTransparent,
        
        fontSize: 24,
        textAlign: "center",
        textAlignVertical: "center",
        color: colors.text.darkTransparent,
    },
    categoryCount: {
        marginLeft: "auto",
    }
})