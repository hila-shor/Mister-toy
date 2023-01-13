
export const SET_TOYS = 'SET_TOYS'
export const REMOVE_TOY = 'REMOVE_TOY'
export const UNDO_REMOVE_TOY = 'UNDO_REMOVE_TOY'
export const ADD_TOY = 'ADD_TOY'
export const UPDATE_TOY = 'UPDATE_TOY'
// export const TOGGLE_CART_SHOWN = 'TOGGLE_CART_SHOWN'
// export const ADD_TO_CART = 'ADD_TO_CART'
// export const REMOVE_FROM_CART = 'REMOVE_FROM_CART'
// export const CLEAR_CART = 'CLEAR_CART'
export const SET_IS_LOADING = 'SET_IS_LOADING'




const initialState = {
    toys: [],
    lastRemovedToy: null,
    isLoading: false,
    // isCartShown: false,
    // shoppingCart: [],
}


export function toyReducer(state = initialState, action) {
    let toys
    // let shoppingCart
    let lastRemovedToy

    switch (action.type) {
        case SET_TOYS:
            return { ...state, toys: action.toys }
        case SET_IS_LOADING:
            return { ...state, isLoading: action.isLoading }

        case REMOVE_TOY:
            lastRemovedToy = state.toys.find(t => t._id === action.toyId)
            toys = state.toys.filter(c => c._id !== action.toyId)
            return { ...state, toys }

        case UNDO_REMOVE_TOY:
            ({ lastRemovedToy } = state)
            toys = [lastRemovedToy, ...state.toys]
            return { ...state, toys, lastRemovedToy: null }

        case ADD_TOY:
            toys = [...state.toys, action.toy]
            return { ...state, toys }
        case UPDATE_TOY:
            toys = state.toys.map(toy => toy._id === action.toy._id ? action.toy : toy)
            return { ...state, toys }

        // Cart
        // case TOGGLE_CART_SHOWN:
        //     return { ...state, isCartShown: !state.isCartShown }
        // case ADD_TO_CART:
        //     shoppingCart = [...state.shoppingCart, action.car]
        //     return { ...state, shoppingCart }
        // case REMOVE_FROM_CART:
        //     shoppingCart = state.shoppingCart.filter(c => c._id !== action.carId)
        //     return { ...state, shoppingCart }
        // case CLEAR_CART:
        //     return { ...state, shoppingCart: [] }

        default:
            return state
    }
}


