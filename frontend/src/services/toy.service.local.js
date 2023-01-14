
import { storageService } from './async-storage.service.js'
import { localStorageService } from './storage.service.js'
import { utilService } from './util.service.js'
// import { httpService } from './http.service'
// import { userService } from './user.service.js'


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
// function query() {
//     return storageService.query(TOYS_STORAGE_KEY)
//         .then(toys => {

//             if (filterBy.txt) {
//                 const regex = new RegExp(filterBy.txt, 'i')
//                 todos = todos.filter(todo => regex.test(todo.task))
//             }

//             // FOLDERS
//             if (filterBy.folder) {
//                 if (filterBy.folder === 'all') {
//                     return todos
//                 } else if (filterBy.folder === 'active') {
//                     todos = todos.filter(todo => !todo.isDone)
//                 } else if (filterBy.folder === 'completed') {
//                     todos = todos.filter(todo => todo.isDone)
//                 }
//             }

//             console.log('toysfrom query- toy.service', toys)
//             return toys
//         })
// }
function query(filterBy) {
    console.log(filterBy)
    return storageService.query(TOYS_STORAGE_KEY)
        .then(toys => {
            console.log(toys)
            // if (!filterBy.search && filterBy.inStock === null) return toys
            const filterToys = toys.filter((toy) => {
                // console.log((toy.price <= filterBy.maxPrice && toy.price >= filterBy.minPrice))
                return toy.name.toLowerCase().includes(filterBy.search.toLowerCase()) &&
                    (filterBy.type === 'All' || toy.labels.includes(filterBy.type)) &&
                    (toy.price <= filterBy.maxPrice && toy.price >= filterBy.minPrice)
                    &&
                    (filterBy.inStock === null || filterBy.inStock === toy.inStock)
                // (filterBy.inStock === toy.inStock || !filterBy.inStock)
            })
            console.log('toysfrom query- toy.service', filterToys)
            return filterToys
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
    return {
        search: '',
        maxPrice: Infinity,
        minPrice: -Infinity,
        type: 'All',
        inStock: null
    }
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
                type: 'Doll',
            },
            {
                _id: utilService.makeId(4),
                name: "Kinetic Sand",
                price: 25,
                labels: ["Sensory toy", "Kids"],
                createdAt: 1631031801811,
                inStock: false,
                type: 'Baby',
            },
            {
                _id: utilService.makeId(4),
                name: "Spring Toy",
                price: 15,
                labels: ["Metal", "Party", "Kids"],
                createdAt: 1631031801011,
                inStock: true,
                type: 'Doll',
            },
            {
                _id: utilService.makeId(4),
                name: "Marvel Spidey",
                price: 100,
                labels: ["Kids", "Battery Powered"],
                createdAt: 1631031801011,
                inStock: true,
                type: 'Motor-skills',
            },
            {
                _id: utilService.makeId(4),
                name: "Toss Ball ",
                price: 43,
                labels: ["Ball", "Kids", "Beach Toys"],
                createdAt: 1631031801011,
                inStock: true,
                type: 'Motor-skills',
            },
            {
                _id: utilService.makeId(4),
                name: "Toy Story",
                price: 13,
                labels: ["Puzzle", "Kids"],
                createdAt: 1634331801011,
                type: 'Motor-skills',
                inStock: false,
            },
            {
                _id: utilService.makeId(4),
                name: "Hot Wheels",
                price: 123,
                labels: ["Doll", "Battery Powered", "Baby"],
                createdAt: 1631031801011,
                inStock: true,
                type: 'Doll',
            },
            {
                _id: utilService.makeId(4),
                name: "Nerf N-Strike",
                price: 25,
                labels: ["Sensory toy", "Kids"],
                createdAt: 1631031801811,
                inStock: false,
                type: 'Baby',
            },
            {
                _id: utilService.makeId(4),
                name: "Fisher-Price",
                price: 15,
                labels: ["Metal", "Party", "Kids"],
                createdAt: 1631031801011,
                inStock: true,
                type: 'Doll',
            },
            {
                _id: utilService.makeId(4),
                name: "Monopoly",
                price: 100,
                labels: ["Kids", "Battery Powered"],
                createdAt: 1631031801011,
                inStock: true,
                type: 'Motor-skills',
            },
            {
                _id: utilService.makeId(4),
                name: "Play-Doh",
                price: 43,
                labels: ["Ball", "Kids", "Beach Toys"],
                createdAt: 1631031801011,
                inStock: true,
                type: 'Motor-skills',
            },
            {
                _id: utilService.makeId(4),
                name: "Melissa",
                price: 13,
                labels: ["Puzzle", "Kids"],
                createdAt: 1634331801011,
                type: 'Motor-skills',
                inStock: false,
            },
        ];

        localStorageService.saveToStorage(TOYS_STORAGE_KEY, toys);
    }
}

// TEST DATA
// storageService.post(TOYS_STORAGE_KEY, {vendor: 'Subali Rahok 6', price: 980}).then(x => console.log(x))


