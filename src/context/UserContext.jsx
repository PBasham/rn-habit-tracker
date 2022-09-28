import { createContext } from "react"

const findUser = async () => {
    const result = await AsyncStorage.getItem("habitTrackerUser")
    console.log("result ", result)
    if (!result) return {}
    return (JSON.parse(result))
}


export const UserContext = createContext({
    user: findUser()
})