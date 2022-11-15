/*========================================
        Import Dependencies
========================================*/
import React, { FC } from 'react'
import { View, StyleSheet } from 'react-native'

interface GoalCardProps {
    onPress: () => void
    
}

export const GoalCard: FC<GoalCardProps> = ({}) => {

   return (
       <View style={styles.container}>
           
       </View>
   )
}

const styles = StyleSheet.create({
   container: {
       
   }
})