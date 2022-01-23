const axios = require("axios");


const instance = axios.create({
    baseURL: "http://localhost:8000/api"
})
export const setAuthorizationHeader = (token) => {
    if (token) {
        instance.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    } else {
        instance.defaults.headers.common['Authorization'] = "";
    }
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
        return //будет нужно удалить token  и авторизация "слетит"
    },
    getCurrentUser() {
        return instance.get(`/users/current`)
    }
}
if (localStorage.getItem("token")) {
    usersApi.getCurrentUser()
        .then(response=>console.log("i got data of current user"))
}
export const tasksApi = {
    getTasks() {
        return instance.get(`/notes`)
    },
    setTask(text) {
        return instance.post(`/notes`, text)
    },
    updateTask(text, id) {
        return instance.put(`/notes`, text)//id отправлять с запросом
    },
    deleteTask(id) {
        return instance.delete(`/notes`, id)
    }
}
