import axios from "axios"
import * as actionTypes from '../constants/productConstant'


// export const getProduct = ()=>async(dispatch)=>{
//   // return new Promise((resolve, reject)=>{
//     dispatch({ type: 'REQ_GET_PRODUCT' })
//     const user = await axios.get('http://localhost:4000/v1/product/40')
//       .then((res) => {
//         const result = res.data.data
//         dispatch({ type: string.GET_PRODUCTS, payload: result })
//       })
// }

export const getProduct = () => async (dispatch) => {
  try {
    // dispatch({type: actionTypes.GET_PRODUCT_REQUEST})

    const { data } =await axios.get(`${process.env.REACT_APP_API_URL}v1/product`)
    console.log(data.data)

    dispatch({
      type: actionTypes.GET_PRODUCT_SUCCESS,
      payload: data.data
    })
  } catch (error) {
    dispatch({
      type: actionTypes.GET_PRODUCT_FAIL,
      payload: error.response && error.response.data.message ? error.response.data.message : error.message
    })
  }
}

export const getProductDetail = (id) => async (dispatch) => {
  try {
    // dispatch({type: actionTypes.GET_PRODUCT_DETAIL_REQUEST})

    const { data } =await axios.get(`${process.env.REACT_APP_API_URL}v1/product/${id}`)

    // console.log(data.data)
    dispatch({
      type: actionTypes.GET_PRODUCT_DETAIL_SUCCESS,
      payload: data.data
    })
  } catch (error) {
    dispatch({
      type: actionTypes.GET_PRODUCT_DETAIL_FAIL,
      payload: error.response && error.response.data.message ? error.response.data.message : error.message
    })
  }
}

export const removeProductDetail = () => (dispatch) => {
  dispatch({
    type:actionTypes.GET_PRODUCT_DETAIL_RESET
  })
}