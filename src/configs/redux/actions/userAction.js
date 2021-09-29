import axios from "axios"
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'


toast.configure()

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
    const result = await axios.post(`${process.env.REACT_APP_API_URL}v1/user/login`, dataBody)
    const dataResult = result.data.data
    dispatch({ type: 'LOGIN_REQUEST', payload: dataResult })
    console.log(dataResult);
    localStorage.setItem('token', dataResult.token)
    localStorage.setItem('username', dataResult.username)
    localStorage.setItem('email', dataResult.email)
    localStorage.setItem('phoneNumber', dataResult.phoneNumber)
    localStorage.setItem('storeName', dataResult.storeName)
    localStorage.setItem('role', dataResult.role)
    localStorage.setItem('id', dataResult.id)
    localStorage.setItem('image', dataResult.image)
    localStorage.setItem('address', dataResult.address)
    localStorage.setItem('birthdate', dataResult.birthdate)
    localStorage.setItem('address', dataResult.address)
    const token = localStorage.getItem('token')
    const role = localStorage.getItem('role')
    console.log(token);
    history.push('/home')
    toast('login successful..')
  } catch (error) {
    // console.log(error.response);
    dispatch({ type: 'LOGIN_FAILURE', payload: error.response.data.error.message })
    toast(error)
    history.push('/login')
    // alert(error.response.data.error.message)
    // alert('tes')S
  }

}

export const registerCustomer = ({username, email, password}, history) => (dispatch) => {
  axios
    .post(`${process.env.REACT_APP_API_URL}v1/user/registerCustomer`, {username, email, password})
    .then((result) => {
      toast('successfully created an account. please login first')
      const dataResult = result.data.data
      dispatch({ type: "REGISTER_SUCCESS", payload: dataResult });
      history.push('/login');

    })
    .catch((error) => {
      toast(error)
      dispatch({ type: 'REGISTER_FAILURE', payload: error.response.data.error.message })
      history.push('/signupCustomer')

    });
};

export const registerSeller = ({username, email, password, phoneNumber, storeName}, history) => (dispatch) => {
  axios
    .post(`${process.env.REACT_APP_API_URL}v1/user/registerSeller`, {username, email, password, phoneNumber, storeName})
    .then((result) => {
      toast('succesfully created an account. please login first')
      const dataResult = result.data.data
      dispatch({ type: "REGISTER_SUCCESS", payload: dataResult });
      history.push('/login');
    })
    .catch((error) => {
      toast(error)
      dispatch({ type: 'REGISTER_FAILURE', payload: error.response.data.error.message })
      history.push('/signupSeller')

    });
};