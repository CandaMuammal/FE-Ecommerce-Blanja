import axios from "axios"
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'


toast.configure()


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

export const updateUser = (form, data) => (dispatch) => {
  const formData = new FormData()
        formData.append('username', form.username)
        formData.append('email', form.email)
        formData.append('phoneNumber', form.phoneNumber)
        formData.append('birthdate', form.birthdate)
        formData.append('image', form.image)
        formData.append('address', form.address)
   

        // formData.append('image', form.image)
        axios.put(`${process.env.REACT_APP_API_URL}v1/user/${data.id}`, formData)
        // axios.put('http://localhost:4000/v1/user/60236000', formData)
        // axios.put(`${process.env.REACT_APP_API_URL}v1/user/customer/${idUser}`, formData)

            .then((res) => {
              const dataResult = res.data.data
              console.log(dataResult)
                toast('success updated profile!!')
                dispatch({type:'UPDATE_USER', payload: dataResult})

            })
            .catch((err) => {
                toast(err.message)

            })
}