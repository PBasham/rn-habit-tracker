import { createContext } from "react"

// const findUser = async () => {
//     const result = await AsyncStorage.getItem("habitTrackerUser")
//     console.log("result ", result)
//     if (!result) return {}
//     return (JSON.parse(result))
// }


export const UserContext = createContext({
    // user: findUser()
    user: {}
})

// const getDate = async () => {
//     const mm = String(new Date().getMonth() + 1).padStart(2, "0")
//     const dd = String(new Date().getDate()).padStart(2, "0")
//     const yyyy = new Date().getFullYear()

//     return `${mm}/${dd}/${yyyy}`
// }


export const DateContext = createContext({
    // date:  getDate()
    date: ""
})