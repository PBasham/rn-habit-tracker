/*========================================
        Import Dependencies
========================================*/
import { useEffect, useState } from "react"
import { Dimensions, StyleSheet, Text, View } from 'react-native'
import ControlBar from "../components/JournalScreen/ControlBar"
import { NotesContainer } from "../components/JournalScreen/NotesContainer"
import { HeaderOne } from "../components/Text/"
/*========================================
        Import Styles
========================================*/
import colors from "../misc/colors"

const Journal = () => {

    const [JournalEntries, setJournalEntries] = useState<Object>({})

    const [enableAdditionalSettings, setEnableAdditionalSettings] = useState<Boolean>(false)

    useEffect(() => {
        // Go into AsyncStorage and get users Journal Entries in date order.
        console.log("JournalScreen:\nGetting user Journal Entries")
    }, [JournalEntries])

    const handleEnableAdditionalSettigns = () => {
        setEnableAdditionalSettings(!enableAdditionalSettings)
    }
    const handleDisableAdditionalSettigns = () => {
        setEnableAdditionalSettings(false)
    }

    return (
        <View style={styles.container}>
            <HeaderOne content={"Your thoughts on today?"} style={{ width: width - 50 }} color={colors.text.darkTransparent} />
            {/* Search/filter bar will go here in the future. */}
            <ControlBar enableAdditionalSettings={enableAdditionalSettings} enableSettigns={handleEnableAdditionalSettigns} />
            <NotesContainer
                JournalEntries={JournalEntries}
                additionalSettings={enableAdditionalSettings}
            />
        </View>
    )
}

export default Journal

const width = Dimensions.get("screen").width

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        paddingTop: "15%",
        paddingBottom: "5%",
        backgroundColor: colors.general.background,
    },
})