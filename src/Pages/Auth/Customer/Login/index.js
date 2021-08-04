// import React from 'react'
import React, { useState } from 'react'
import style from './login.module.css'
import logo from '../../../../Assets/blanja-logo.png'
import ButtonLogin from '../../../../components/base/button/login'
import {Link} from 'react-router-dom'
import { useSelector } from 'react-redux'
import Print from '../../../../components/print/index'
import {login} from '../../../../configs/redux/actions/userAction'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'

const Login = () => {
  const history = useHistory()
  const dispatch = useDispatch()
  const [form, setForm] =useState({
    email: '',
    password: ''
  })
  const handleChange =(e)=>{
    setForm({
      ...form,
      [e.target.name]: e.target.value
    })
  } 
  const handleLogin =()=>{
    dispatch(login(form, history))
    try{
        history.push('/home')
        // alert ('benar')
      }catch(error){
        alert('password anda salah') 
      }
    
    
    
    
    
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
  }
    const email = useSelector((state) => state.email)

    return (
        <div className={style.main}>
            <div className={style['main-container']}>
                <img src={logo} alt="" />

                {/* <h3>data dari state global dengan name {email} </h3>
                <Print/> */}


                <h5>Please login with your account</h5>
                <div className={style["option-button"]}>
                <button className={style.customer}> <Link to="./login">Customer</Link></button>
                    <button className={style.seller}><Link to="/loginseller">Seller</Link></button>
                </div>
                    <div className={style['form-control']}>
                    <input name='email' type="text" placeholder="  email" onChange={handleChange}/>
                    <input  name='password' type="password" placeholder="  password" onChange={handleChange}/>
                    </div>
            
                        <Link to="./resetpassword">Forgot password?</Link>
                        <button className={style["login-button"]} onClick={handleLogin}>Login</button>
                        {/* <ButtonLogin/> */}
                        <h7>Don't have a Tokopedia account? <Link to="./signup">Register</Link></h7>
                        </div>
            
        </div>

                )
}

                export default Login