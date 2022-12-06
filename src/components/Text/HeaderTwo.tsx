/*========================================
        Import Dependencies
========================================*/
import { FC } from "react";
import { StyleSheet, Text } from 'react-native'
// Styling --------------------------------------------------
import colors from "../../misc/colors";

interface HeaderOneProps {
style?: any
content: string
color?: string
textAlign?: string
}

/* Custome Text Header Component */
export const HeaderOne: FC<HeaderOneProps> = ({ style, content, color, textAlign }) => {
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

const styles = StyleSheet.create({
    headerOne: {
        fontSize: 20,
    }
});