import * as actionTypes from '../constants/cartConstant'

export const cartReducer = (state = {cartItem: []}, action) => {
    switch(action.type) {
        case actionTypes.ADD_TO_CART:
            const item = action.payload;

            const existItem = state.cartItem.find((x) => x.products === item.products);

            if(existItem) {
                return {
                    ...state,
                    cartItem: state.cartItem.map((x) => x.products === existItem.products ? item : x)
                }
            } else {
                return {
                    ...state,
                    cartItem: state.cartItem.filter((x) => x.product !== action.payload)
                }
            }

            case actionTypes.REMOVE_FROM_CART:
                return {
                    ...state,
                    cartItem: [...state.cartItem, item]
                }

            default:
                return state;
    }
} 