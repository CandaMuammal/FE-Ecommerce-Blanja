import * as actionTypes from '../constants/cartConstant'


const initialState = {
    cartItem: []
}
export const cartReducer = (state = initialState, action) => {
    switch(action.type) {
        case actionTypes.ADD_TO_CART:
            const product = action.payload;
            // product.qty = 1
            // const product

            // const existItem = state.cartItem.find((x) => x.id === id);

            return {
                ...state,
                cartItem: [...state.cartItem, product]
            }
            
            // if(existItem) {
            //     return {
            //         ...state,
            //         cartItem: state.cartItem.map((x) => x.product === existItem.product ? item : x)
            //     }
            // } else {
            //     return 
            //         ...state,
            //         cartItem: state.cartItem.filter((x) => x.product !== action.payload)
            //     }
            // }

            // case actionTypes.REMOVE_FROM_CART:
            //     return {
            //         ...state,
            //         cartItem: [...state.cartItem, item]
            //     }

            default:
                return state;
    }
} 