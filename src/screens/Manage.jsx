import { StatusBar, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Manage = () => {
    return (
        <>
            {/* <StatusBar /> */}
            <View style={styles.container}>
                <Text>Habits</Text>
            </View>
        </>
    )
}

export default Manage

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
})