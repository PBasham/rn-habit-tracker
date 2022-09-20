import { StyleSheet, Text } from 'react-native'

/* Custome Text Header Component */
const HeaderOne = ({ style, content, color, textAlign }) => {
    return (
        <Text
            style={[{...style}, styles.headerOne, {
                textAlign: textAlign || "center",
                color: color || "black",
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