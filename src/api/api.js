const axios = require("axios");


const instance = axios.create({
    baseURL: "http://localhost:8000/api"
})
export const setAuthorizationHeader = (token) => {
    if (token) {
        instance.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    } else {
        tokenDelete()
    }
}
const tokenDelete = () => {
    localStorage.removeItem("token")
    delete instance.defaults.headers.common['Authorization'];
}
setAuthorizationHeader(localStorage.getItem("token"))

export const usersApi = {
    usersRegistration(data) {
        return instance.post(`/users`, data)
    },
    usersLogin(data) {
        return instance.post(`/users/login`, data)
    },
    usersLogout() {
        tokenDelete()
    },
    getCurrentUser() {
        return instance.get(`/users/current`)
    }
}

export const tasksApi = {
    getTasks() {
        return instance.get(`/notes`)
    },
    setTask(data) {
        return instance.post(`/notes`, {text: data})
    },
    updateTask(text, id) {
        return instance.put(`/notes`, text)//id отправлять с запросом
    },
    deleteTask(id) {
        return instance.delete(`/notes`, id)
    }
}
