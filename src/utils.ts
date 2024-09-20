export const saveToLocalStorage = (name: string, data: any) => {
    localStorage.setItem(name, JSON.stringify(data))
}

export const getFromLocalStorage = (name: string) => {
    const todos = localStorage.getItem(name)
    return todos ? JSON.parse(todos) : []
}