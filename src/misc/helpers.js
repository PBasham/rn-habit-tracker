export const getDate = () => {
    const mm = new Date().getMonth() + 1
    const dd = new Date().getDate()
    const yyyy = new Date().getFullYear()
    return new Date()
}
export const formatDate = (date) => {
    const mm = (date.getMonth() + 1).toString().padStart(2, "0")
    const dd = date.getDate().toString().padStart(2, "0")
    const yyyy = date.getFullYear()
    return `${mm}/${dd}/${yyyy}`
}
// export const sortByDueDate = () => {
// }
