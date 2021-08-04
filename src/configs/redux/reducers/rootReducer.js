import {combineReducers} from 'redux'
import userReducer from './userReducer'
// import orderReducer from './orderReducer'
// import productReducer from './productReducer.js'

const rootReducer = combineReducers({
  user: userReducer,
  // product: productReducer,
  // order: orderReducer,
})

export default rootReducer