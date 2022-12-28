export const getDate = () => {
    const mm = String(new Date().getMonth() + 1).padStart(2, "0")
    const dd = String(new Date().getDate()).padStart(2, "0")
    const yyyy = new Date().getFullYear()
    return `${mm}/${dd}/${yyyy}`
}
