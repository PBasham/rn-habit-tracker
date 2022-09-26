import { StyleSheet, Text, View } from 'react-native'
import colors from "../../misc/colors"

const NavBar = () => {
    return (
        <View style={styles.container} >
            <View style={styles.selected}>
                <View style={styles.selectedCircle}></View>
                <View style={styles.selectedBar}></View>
                <View style={styles.selectedCornerLeft}></View>
                <View style={styles.selectedCornerRight}></View>
            </View>
            {/* <View stye={styles.routes}></View> */}
        </View>
    )
}

export default NavBar

const styles = StyleSheet.create({
    container: {
        flex: 4,
        position: "absolute",
        bottom: 0,
        left: 0,
        right: 0,
        flexDirection: "row",
        marginHorizontal: "auto",
        height: "10%",
        backgroundColor: colors.mintgreen,
    },
    selected: {
        position: "absolute",
    },
    selectedCircle: {
        width: "20%",
        aspectRatio: 1,
        borderRadius: 50,
        backgroundColor: colors.light,
    },
    selectedBar: {
        backgroundColor: colors.light,
    },
    selectedCornerLeft: {
        backgroundColor: colors.light,
    },
    selectedCornerRight: {
        backgroundColor: colors.light,
    },
})