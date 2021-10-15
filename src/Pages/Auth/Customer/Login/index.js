// import React from 'react'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import style from './login.module.css'
import logo from '../../../../Assets/blanja-logo.png'
import ButtonLogin from '../../../../components/base/button/login'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import Print from '../../../../components/print/index'
import { login } from '../../../../configs/redux/actions/userAction'
import { useFormik } from "formik";
import * as Yup from 'yup';


const Login = () => {
  const history = useHistory()
  const dispatch = useDispatch()

  const formik = useFormik({
    initialValues: {
      username: '',
      email: '',
      password: ''
    },
    onSubmit: ({ email, password }) => {
      dispatch(login({ email, password }, history))
    },
    validationSchema: Yup.object({

      email: Yup.string().required('Email is required').email('Please enter your correct email'),
      password: Yup.string().required('Password is required').min(8, "Password must contain at least 8 letters")
    })

  })






  // alert(`username ${form.username} dan password ${form.password}`)
  // try{
  //   history.push('/home')
  //   alert ('benar')
  // }catch(error){
  //   alert('password anda salah')
  // }
  // if(result.err){
  //   alert('password salah')
  // }else{
  //   history.push('/home')
  // }
  // .then((res)=>{
  //   history.push('/home')
  // })
  // .catch((err)=>{
  //   alert('password anda salah')
  // })
  const email = useSelector((state) => state.email)

  return (
    <div className={style.main}>
      <div className={style['main-container']}>
        <img src={logo} alt="" />

        {/* <h3>data dari state global dengan name {email} </h3>
                <Print/> */}


        <h5>Please login with your account</h5>
        {/* <div className={style["option-button"]}>
          <button className={style.customer}> <Link to="./login">Customer</Link></button>
          <button className={style.seller}><Link to="/login">Seller</Link></button>
        </div> */}
        <form onSubmit={formik.handleSubmit}>

          <div>
            <input type="text" name="email" id="email" placeholder="email" value={formik.values.email} onChange={formik.handleChange} />
            {formik.errors.email && formik.touched.email && (
              <p>{formik.errors.email}</p>
            )}
          </div>

          <div>
            <input type="password" name="password" id="password" placeholder="password" value={formik.values.password} onChange={formik.handleChange} />
            {formik.errors.password && formik.touched.password && (
              <p>{formik.errors.password}</p>
            )}
          </div>
          <button className={style["login-button"]} type='submit'>Login</button>

        </form>


        <h6><Link to="./resetpassword">Forgot password?</Link></h6>
        {/* <ButtonLogin/> */}
        <h7>Don't have a Tokopedia account? <Link to="./signup">Register</Link></h7>
      </div>

    </div>

  )
}

export default Login