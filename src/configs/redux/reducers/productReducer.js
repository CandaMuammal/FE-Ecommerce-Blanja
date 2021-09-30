import * as actionTypes from '../constants/productConstant';


const initialState = {
    products: [],
    productDetails: {
        id: "",
        name: "",
        price: "",
        image: "",
        description: ""
    },
    loading: false,
    error: null
}

export const ProductReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.GET_PRODUCT_REQUEST:
            return {
                loading: true,
                products: []
            }
        case actionTypes.GET_PRODUCT_SUCCESS:
            return {
                ...state,
                loading: false,
                products: action.payload,

            }
        case actionTypes.GET_PRODUCT_FAIL:
            return {
                ...state,
                loading: false,
                error: action.payload
            }

        case actionTypes.GET_PRODUCT_DETAIL_REQUEST:
            return {
                ...state,
                loading: true,
                productDetails: []
            }
        case actionTypes.GET_PRODUCT_DETAIL_SUCCESS:
            return {
                ...state,
                loading: false,
                productDetails: action.payload,

            }
        default:
            return state;
    }
}

// const initialState = {
//     product: 
// }

// export const getProductDetailReducer = (state = { product: [] }, action) => {
//     switch (action.type) {
//         case actionTypes.GET_PRODUCT_DETAIL_REQUEST:
//             return {
//                 loading: true,
//                 product: []
//             }
//         case actionTypes.GET_PRODUCT_DETAIL_SUCCESS:
//             return {
//                 loading: false,
//                 product: action.payload
//             }
//         case actionTypes.GET_PRODUCT_DETAIL_FAIL:
//             return {
//                 loading: false,
//                 error: action.payload
//             }
//         case actionTypes.GET_PRODUCT_DETAIL_RESET:
//             return {
//                 product: {}
//             }
//         default:
//             return state;
//     }
// }



