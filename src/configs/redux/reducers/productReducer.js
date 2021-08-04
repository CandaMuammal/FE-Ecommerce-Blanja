import * as actionTypes from '../constants/productConstant';

export const getProductReducer = (state = { product: [] }, action) => {
    switch (action.type) {
        case actionTypes.GET_PRODUCT_REQUEST:
            return {
                loading: true,
                product: []
            }
        case actionTypes.GET_PRODUCT_SUCCESS:
            return {
                loading: false,
                product: action.payload
            }
        case actionTypes.GET_PRODUCT_FAIL:
            return {
                loading: false,
                error: action.payload
            }
        default:
            return state;
    }
}

export const getProductDetailReducer = (state = { product: [] }, action) => {
    switch (action.type) {
        case actionTypes.GET_PRODUCT_DETAIL_REQUEST:
            return {
                loading: true,
                product: []
            }
        case actionTypes.GET_PRODUCT_DETAIL_SUCCESS:
            return {
                loading: false,
                product: action.payload
            }
        case actionTypes.GET_PRODUCT_DETAIL_FAIL:
            return {
                loading: false,
                error: action.payload
            }
        case actionTypes.GET_PRODUCT_DETAIL_RESET:
            return {
                product: {}
            }
        default:
            return state;
    }
}
