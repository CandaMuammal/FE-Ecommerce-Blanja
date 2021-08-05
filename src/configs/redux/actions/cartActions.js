import * as actionTypes from '../constants/cartConstant'
import axios from 'axios'

const initialState = {
    product: '',
    name: '',
    image: '',
    price: '',
    qty: ''
}

export const addToCart = (id, qty) => async (dispatch, getState) => {
    const { data } = await axios.get(`http://localhost:4000/v1/product/40`)


    dispatch({
        type: actionTypes.ADD_TO_CART,
        payload: {
            product: data.id,
            name: data.name,
            image: data.image,
            price: data.price,
            qty
        }
    })

    localStorage.setItem('cart', JSON.stringify(getState().cart.cartItem))
}

export const removeFromCart = () => (dispatch, getState) => {
    dispatch({
        type: actionTypes.REMOVE_FROM_CART,
        payload: id
    })
    localStorage.setItem('cart', JSON.stringify(getState().cart.cartItem))
}