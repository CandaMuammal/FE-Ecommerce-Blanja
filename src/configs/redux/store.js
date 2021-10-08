// import {createStore} from 'redux'

// const initialState = {
//     email: 'canda',
//     count: 0
// }

// const reducer = (state = initialState, action) => {
//     return state
// }


// const store = createStore(reducer)

// export default store


import {createStore, applyMiddleware, combineReducers} from 'redux'
import rootReducer from './reducers/rootReducer'
// import logger from 'redux-logger'
import thunk from 'redux-thunk'
import {ProductReducer} from './reducers/productReducer'
// import {rootReducer} from './reducers/userReducer'
import { cartReducer } from './reducers/cartReducers'
import {composeWithDevTools} from 'redux-devtools-extension'
import { persistStore } from 'redux-persist'
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'



const reducer = combineReducers({
    cart: cartReducer,
    // productDetail: getProductDetailReducer,
    product: ProductReducer,
    rootReducer
})


const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['cart', 'rootReducer']
}

const persistedReducer = persistReducer(persistConfig, reducer)

export default function configureStore() {
    const store = createStore(
        persistedReducer,
    composeWithDevTools(applyMiddleware(thunk))
    )

    const persistor = persistStore(store)

    return { store, persistor }
}
 

// export const store = createStore(
//     reducer, 
//     composeWithDevTools(applyMiddleware(thunk))
//     )

// export const persistor = persistStore(store)


// export default persistReducer(persistConfig, reducer) 
    
// export default 
//     persistReducer(persistConfig, reducer)
    // store, 
    // persistor

