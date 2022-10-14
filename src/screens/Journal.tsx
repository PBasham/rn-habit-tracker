/*========================================
        Import Dependencies
========================================*/
import { useEffect, useState } from "react"
import { Dimensions, StyleSheet, Text, View } from 'react-native'
import ControlBar from "../components/JournalScreen/ControlBar"
import { CreateNoteModal } from "../components/JournalScreen/CreateNoteModal"
import { NotesContainer } from "../components/JournalScreen/NotesContainer"
import { HeaderOne } from "../components/Text/"
/*========================================
        Import Styles
========================================*/
import colors from "../misc/colors"

const Journal = () => {

    const [JournalEntries, setJournalEntries] = useState<Object>({})

    const [modalVisable, setModalVisable] = useState<boolean>(false)

    const [enableAdditionalSettings, setEnableAdditionalSettings] = useState<boolean>(false)

    useEffect(() => {
        // Go into AsyncStorage and get users Journal Entries in date order.
        console.log("JournalScreen:\nGetting user Journal Entries")
    }, [JournalEntries])

    const handleEnableAdditionalSettigns = () => {
        setEnableAdditionalSettings(!enableAdditionalSettings)
    }

    const openNoteDetail = () => {
        setModalVisable(true)
    }
    const closeNoteDetail = () => {
        setModalVisable(false)
    }

    return (
        <View style={styles.container}>
            <HeaderOne content={"Your thoughts on today?"} style={{ width: width - 50 }} color={colors.text.darkTransparent} />
            {/* Search/filter bar will go here in the future. */}
            <ControlBar openNoteDetail={openNoteDetail} enableAdditionalSettings={enableAdditionalSettings} enableSettigns={handleEnableAdditionalSettigns} />
            <NotesContainer
                JournalEntries={JournalEntries}
                additionalSettings={enableAdditionalSettings}
            />
            <CreateNoteModal visible={modalVisable} closeNoteDetail={closeNoteDetail} />
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