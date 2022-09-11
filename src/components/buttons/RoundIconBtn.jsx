/*========================================
        Import Dependencies
========================================*/
import { View, StyleSheet } from 'react-native'
import { AntDesign } from "@expo/vector-icons"
/*========================================
        Import Styles
========================================*/
import colors from "../../misc/colors"

export const RoundIconBtn = ({
    antIconName,
    size,
    iconColor,
    style,
}) => {


    return (
        <View style={styles.button}>
            <AntDesign
                name={antIconName} 
                size={size || 24} 
                color={iconColor || colors.light} 
                style={[styles.icon, {...style}]}
                />
        </View>
    )
}

const styles = StyleSheet.create({
    button: {
        padding: 15,
        borderRadius: 50,
        backgroundColor: colors.blue,
        elevation: 10,
        shadowColor: colors.greyish,
        shadowOffset: 0,
        shadowRadius: 5,
        shadowOpacity: .4,
    },
    icon: {
    }
})