import * as actionTypes from '../constants/cartConstant'
import axios from 'axios'

const initialState = {
    product: '',
    name: '',
    image: '',
    price: '',
    qty: ''
}

export const addToCart = (product) => async (dispatch) => {
    // const { data } = await axios.get(`http://localhost:4000/v1/product/${id}`)
    // console.log(getState())


    dispatch({
        type: actionTypes.ADD_TO_CART,
        payload: product
    })

    // localStorage.setItem('cart', JSON.stringify(getState().cart.cartItem))
}

export const removeFromCart = () => (dispatch, getState) => {
    dispatch({
        type: actionTypes.REMOVE_FROM_CART,
        // payload: data.id
    })
    localStorage.setItem('cart', JSON.stringify(getState().cart.cartItem))
}