export const task = (text, done, id = '') => {
    if (id) return {text, done, id}
    else return {text, done}
}