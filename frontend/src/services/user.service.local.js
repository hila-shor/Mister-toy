// import { useReducer } from 'react';
import { storageService } from './async-storage.service.js'
import { localStorageService } from './storage.service.js';
import { utilService } from './util.service.js'

const STORAGE_KEY = 'userDB'
const STORAGE_KEY_LOGGEDIN = 'loggedinUser'

_createUsers()

export const userService = {
    login,
    logout,
    signup,
    getById,
    getLoggedinUser,
    updateScore,
    update,
    getEmptyCredentials,
}

window.us = userService

function update(user) {
    return storageService.put(STORAGE_KEY, user).then((user) => {
        setLoggedinUser(user)
        return user
    })
}
function getById(userId) {
    return storageService.get(STORAGE_KEY, userId)
}

function login({ username, password }) {
    return storageService.query(STORAGE_KEY)
        .then(users => {
            const user = users.find(user => user.username === username)
            if (user) return setLoggedinUser(user)
            else return Promise.reject('Invalid login')
        })
}

function signup({ username, password, fullname }) {
    const user = { username, password, fullname }
    return storageService.post(STORAGE_KEY, user)
        .then(setLoggedinUser)
}

function updateScore(diff) {
    return userService.getById(getLoggedinUser()._id)
        .then(user => {
            if (user.score + diff < 0) return Promise.reject('No credit')
            user.score += diff
            return storageService.put(STORAGE_KEY, user)
                .then((user) => {
                    setLoggedinUser(user)
                    return user.score
                })
        })
}

function logout() {
    sessionStorage.removeItem(STORAGE_KEY_LOGGEDIN)
    return Promise.resolve()
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

// Test Data
// userService.signup({username: 'muki', password: 'muki1', fullname: 'Muki Ja'})
// userService.login({username: 'muki', password: 'muki1'})

function _createUsers() {
    let users = localStorageService.loadFromStorage(STORAGE_KEY);
    if (!users || users.length === 0) {
        users = [
            {
                _id: utilService.makeId(4),
                username: 'baraki',
                password: 'baraki',
                fullname: 'barak i ',
            },
            {
                _id: utilService.makeId(4),
                username: 'yanivi',
                password: 'yanivi',
                fullname: 'yaniv i',
            },
            {
                _id: utilService.makeId(4),
                username: 'kfiri',
                password: 'kfiri',
                fullname: 'kfir i',
            },
        ]
        localStorageService.saveToStorage(STORAGE_KEY, users);
    }
}

