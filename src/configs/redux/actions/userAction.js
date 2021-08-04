import axios from "axios"

// export const increment = () => (dispatch, getState) => {
//   // axios.get('')
//   const { product } = getState()
//   const newCount = product.count + 1
//   setTimeout(() => {
//     dispatch({ type: 'INCREMENT', payload: newCount })
//   }, 2000)
// }

// export const decrement = () => {
//   return { type: 'DECREMENT', coba: 'risanocoba@gamil.com', payload: ['sepeda', 'motor'] }
// }

export const login = (data, history) => async (dispatch) => {
  try {
    const dataBody = { email: data.email, password: data.password }
    const result = await axios.post('http://localhost:4000/v1/user/login', dataBody)
    const dataResult = result.data.data
    dispatch({ type: 'LOGIN_REQUEST', payload: dataResult })
    console.log(dataResult);
    localStorage.setItem('token', dataResult.token)
    localStorage.setItem('role', dataResult.role)
    const token = localStorage.getItem('token')
    const role = localStorage.getItem('role')
    console.log(token);
    history.push('/home')
  } catch (error) {
    // console.log(error.response);
    dispatch({ type: 'LOGIN_FAILURE', payload: error.response.data.error.message })
    history.push('/login')
    // alert(error.response.data.error.message)
    // alert('tes')S
  }

}

export const register = (data, history) => (dispatch) => {
  axios
    .post('http://localhost:4000/v1/user/registerSeller', data)
    .then((result) => {
      const dataResult = result.data.data
      dispatch({ type: "REGISTER_SUCCESS", payload: dataResult });
      history.push('/login');
    })
    .catch((error) => {
      dispatch({ type: 'REGISTER_FAILURE', payload: error.response.data.error.message })
      history.push('/signupseller')

    });
};