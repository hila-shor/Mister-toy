
import { storageService } from './async-storage.service.js'
import { localStorageService } from './storage.service.js'
import { utilService } from './util.service.js'
// import { userService } from './user.service.js'
// import { httpService } from './http.service.js'

const TOYS_STORAGE_KEY = 'toyDB'
// const BASE_URL = 'toy/'

_createToys()

export const toyService = {
    query,
    getById,
    save,
    remove,
    getEmptyToy,
    getDefaultFilter
}


// function query(filterBy = getDefaultFilter()) {
function query() {
    return storageService.query(TOYS_STORAGE_KEY)
        .then(toys => {

            // if (filterBy.txt) {
            //     const regex = new RegExp(filterBy.txt, 'i')
            //     todos = todos.filter(todo => regex.test(todo.task))
            // }

            // // FOLDERS
            // if (filterBy.folder) {
            //     if (filterBy.folder === 'all') {
            //         return todos
            //     } else if (filterBy.folder === 'active') {
            //         todos = todos.filter(todo => !todo.isDone)
            //     } else if (filterBy.folder === 'completed') {
            //         todos = todos.filter(todo => todo.isDone)
            //     }
            // }
            console.log('ttoysfrom query- toy.service', toys)
            return toys
        })
}


function getById(toyId) {
    return storageService.get(TOYS_STORAGE_KEY, toyId)
}

function remove(toyId) {
    // return Promise.reject('Not now!')
    return storageService.remove(TOYS_STORAGE_KEY, toyId)
}

function save(toy) {
    if (toy._id) {
        return storageService.put(TOYS_STORAGE_KEY, toy)
    } else {
        // when switching to backend - remove the next line
        // toy.owner = userService.getLoggedinUser()
        return storageService.post(TOYS_STORAGE_KEY, toy)
    }
}

function getDefaultFilter() {
    return { txt: '', isStock: false, label: '' }
}
function getEmptyToy() {
    return {
        vendor: '',
        price: 0,
    }
}


// private
function _createToys() {
    let toys = localStorageService.loadFromStorage(TOYS_STORAGE_KEY);
    if (!toys || toys.length === 0) {
        toys = [
            {
                _id: utilService.makeId(4),
                name: "Talking Doll",
                price: 123,
                labels: ["Doll", "Battery Powered", "Baby"],
                createdAt: 1631031801011,
                inStock: true,
                img: "talking-dall.jpg"
            },
            {
                _id: utilService.makeId(4),
                name: "Kinetic Sand",
                price: 25,
                labels: ["Sensory toy", "Kids"],
                createdAt: 1631031801811,
                inStock: false,
                img: "kinetic-sand.jpg"
            },
            {
                _id: utilService.makeId(4),
                name: "Slinky Walking Spring Toy",
                price: 15,
                labels: ["Metal", "Party", "Kids"],
                createdAt: 1631031801011,
                inStock: true,
                img: "slinky.jpg"
            },
            {
                _id: utilService.makeId(4),
                name: "Marvel Spidey",
                price: 100,
                labels: ["Kids", "Battery Powered"],
                createdAt: 1631031801011,
                inStock: true,
                img: "marvel-spider.jpg"
            },
            {
                _id: utilService.makeId(4),
                name: "Toss and Catch Ball Set",
                price: 43,
                labels: ["Ball", "Kids", "Beach Toys"],
                createdAt: 1631031801011,
                inStock: true,
                img: "toss-catch.jpg"
            },
            {
                _id: utilService.makeId(4),
                name: "Toy Story Puzzles",
                price: 13,
                labels: ["Puzzle", "Kids"],
                createdAt: 1634331801011,
                inStock: false,
                img: "puzzle.jpg"

            },
        ];

        localStorageService.saveToStorage(TOYS_STORAGE_KEY, toys);
    }
}

// TEST DATA
// storageService.post(TOYS_STORAGE_KEY, {vendor: 'Subali Rahok 6', price: 980}).then(x => console.log(x))


