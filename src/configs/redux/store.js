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
import ProductReducer from './reducers/productReducer'
// import {rootReducer} from './reducers/userReducer'
import { cartReducer } from './reducers/cartReducers'
import {composeWithDevTools} from 'redux-devtools-extension'

const reducer = combineReducers({
    cart: cartReducer,
    // productDetail: getProductDetailReducer,
    product: ProductReducer,
    rootReducer
})

const store = createStore(
    reducer, 
    composeWithDevTools(applyMiddleware(thunk))
    )

export default store