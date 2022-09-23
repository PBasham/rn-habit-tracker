/*========================================
        Import Dependencies
========================================*/
import { Dimensions, Modal, Pressable, ScrollView, StatusBar, StyleSheet, Text, View } from 'react-native'
import { emotionColors } from "../../misc/emotionColors"
import colors from "../../misc/colors"
/*========================================
        Import Components
========================================*/
import HeaderOne from "../Text/HeaderOne"
import { useEffect } from "react"
import { StandardAntBtn } from "../buttons/StandardAntBtn"

const EmotionColorModal = ({ setEmotionModalVisible, setEmotionColor, visible }) => {

    useEffect(() => {
    }, [])

    const handleEmotionLongPress = (emotion) => {

    }

    const handleModalClose = () => {
        console.log("Closing emotion Modal")
        setEmotionModalVisible(false)
    }

    return (
        <>
            <StatusBar hidden={true} />
            <Modal
                visible={visible}
                animationType="slide"
            >
                <StandardAntBtn
                    antIconName={"left"}
                    backColor="white"
                    iconColor={"black"}
                    style={{
                        positon: "absolute",
                        top: 0,
                        left: 0,
                        margin: 15,
                        zIndex: 999,
                    }}
                    onPress={handleModalClose}
                />
                <View style={styles.container}>
                    <HeaderOne style={{ marginBottom: 40, paddingHorizontal: 10, }} content={"Select the word that represents how you feel the best."} />
                    <ScrollView style={styles.scrollContainer}>
                        {emotionColors.map(element => (
                            <View key={element.feeling} style={[{ backgroundColor: element.color }, styles.emotionContainer]}>
                                <HeaderOne content={element.feeling} color={colors.light} />
                            </View>
                        ))}
                    </ScrollView>
                </View>
            </Modal>
        </>
    )
}

export default EmotionColorModal


const width = Dimensions.get("window").width - 50

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginHorizontal: 25,
        paddingTop: "20%",
        backgroundColor: colors.light,
        width: width,
    },
    scrollContainer: {
        flex: 1,
        marginBottom: 20,
        backgroundColor: "rgb(230,230,230)",
        borderRadius: 15,
    },
    emotionContainer: {
        marginHorizontal: 25,
        marginVertical: 5,
        paddingVertical: 20,
        borderWidth: 2,
        borderRadius: 10,
        borderColor: colors.light,
        // width: width - 50,
    }
})












/*========================================
        Code Graveyard
========================================*/

/* Original Emotion bar
<View style={[{ backgroundColor: emotionColor || "white" }, styles.feelingsContainer]}>
                        <TouchableOpacity
                            style={[styles.emotionColor, styles.backgroundGreen]}
                            onPress={() => handleEmotionColorPress("Green")}
                            onLongPress={() => handleLongPress()}
                        >

                        </TouchableOpacity>
                        <TouchableOpacity
                            style={[styles.emotionColor, styles.backgroundYellow]}
                            onPress={() => handleEmotionColorPress("Yellow")}
                            onLongPress={() => handleLongPress()}
                        >

                        </TouchableOpacity>
                        <TouchableOpacity
                            style={[styles.emotionColor, styles.backgroundOrange]}
                            onPress={() => handleEmotionColorPress("Orange")}
                            onLongPress={() => handleLongPress()}
                        >

                        </TouchableOpacity>
                        <TouchableOpacity
                            style={[styles.emotionColor, styles.backgroundRed]}
                            onPress={() => handleEmotionColorPress("Red")}
                            onLongPress={() => handleLongPress()}
                        >

                        </TouchableOpacity>
                        <TouchableOpacity
                            style={[styles.emotionColor, styles.backgroundPurple]}
                            onPress={() => handleEmotionColorPress("Purple")}
                            onLongPress={() => handleLongPress()}
                        >

                        </TouchableOpacity>
                        <TouchableOpacity
                            style={[styles.emotionColor, styles.backgroundBlue]}
                            onPress={() => handleEmotionColorPress("Blue")}
                            onLongPress={() => handleLongPress()}
                        >

                        </TouchableOpacity>
                    </View>

*/