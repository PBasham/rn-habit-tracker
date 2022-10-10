// Dependencies --------------------------------------------------
import { StyleSheet, Text } from 'react-native'
// Styling --------------------------------------------------
import colors from "../../misc/colors";

/* Custome Text Header Component */
const HeaderOne = ({ style, content, color, textAlign }) => {
    return (
        <Text
            style={[{...style}, styles.headerOne, {
                textAlign: textAlign || "center",
                color: color || colors.text.dark,
            }]}
        >
            {content}
        </Text>
    )

}

export default HeaderOne

const styles = StyleSheet.create({
    headerOne: {
        fontSize: 32,
    }
});