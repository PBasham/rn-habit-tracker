/*========================================
        Import Dependencies
========================================*/
import { StyleSheet, Text, View } from 'react-native'
/*========================================
        Import Styles
========================================*/
import colors from "../misc/colors"

const Journal = () => {
  return (
    <View styles={styles.container}>
      <Text>Journal</Text>
    </View>
  )
}

export default Journal

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.general.background,
    }
})