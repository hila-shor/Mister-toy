import { combineReducers, legacy_createStore as createStore } from 'redux'

// import { appReducer } from './app.reducer.js'
import { userReducer } from './user.reducer.js'
import { toyReducer } from './toy.reducer.js'
import { reviewReducer } from './review.reducer'

const middleware = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__()

const rootReducer = combineReducers({
  // appModule: appReducer,
  toyModule: toyReducer,
  userModule: userReducer,
  reviewModule: reviewReducer,
})

export const store = createStore(rootReducer, middleware)

//For debug
// store.subscribe(() => {
//   console.log('**** Store state changed: ****')
//   console.log('storeState:\n', store.getState())
//   console.log('*******************************')
// })
