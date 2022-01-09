const axios = require("axios");

const instance = axios.create({
    baseURL: "http://localhost:8000/api"
})

export const usersApi = {
    usersRegistration(data) {
        return instance.post(`/users`, data)
    },
    usersLogin() {
        return instance.post()
    },
    getCurrentUsers() {
        return instance.get()
    }
}
