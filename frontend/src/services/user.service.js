import { httpService } from './http.service'

const AUTH_URL = 'auth/'
const USER_URL = 'user/'
const STORAGE_KEY_LOGGEDIN = 'loggedinUser'

export const userService = {
    login,
    logout,
    signup,
    getById,
    getLoggedinUser,
    getEmptyCredentials,
}

window.us = userService

function getById(userId) {
    return httpService.get(USER_URL + userId)
}

function login(credentials) {
    return httpService.post(AUTH_URL + 'login', credentials)
        .then(setLoggedinUser)
}

function signup({ username, password, fullname }) {
    const user = { username, password, fullname }
    return httpService.post(AUTH_URL + 'signup', user)
        .then(setLoggedinUser)
}

function logout() {
    return httpService.post(AUTH_URL + 'logout')
        .then(() => {
            sessionStorage.removeItem(STORAGE_KEY_LOGGEDIN)
        })
}

function getLoggedinUser() {
    return JSON.parse(sessionStorage.getItem(STORAGE_KEY_LOGGEDIN))
}

function setLoggedinUser(user) {
    const userToSave = {
        _id: user._id,
        fullname: user.fullname,
        username: user.usermame,
    }
    sessionStorage.setItem(STORAGE_KEY_LOGGEDIN, JSON.stringify(userToSave))
    return userToSave
}

function getEmptyCredentials() {
    return {
        fullname: '',
        username: '',
        password: '',
    }
}


