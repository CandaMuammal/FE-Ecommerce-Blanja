import React from 'react'
import style from './login.module.css'
import logo from '../../../../Assets/blanja-logo.png'
import {Link} from 'react-router-dom'


const LoginSeller = () => {
    return (
        <div className={style.main}>
            <div className={style['main-container']}>
                <img src={logo} alt="" />
                <h5>Please login with your account</h5>
                <div className={style["option-button"]}>
                <button className={style.customer}> <Link to="./login">Customer</Link></button>
                    <button className={style.seller}><Link to="/loginseller">Seller</Link></button>
                </div>
                    <div className={style['form-control']}>
                    <input type="text" placeholder="  Email"/>
                    <input type="text" placeholder="  Password"/>
                    </div>
            
                        <a href="./resetpassword">Forgot password?</a>
                        <button className={style["login-button"]}>Login</button>
                        <h7>Don't have a Tokopedia account? <a href="">Register</a></h7>
                        </div>
            
        </div>

                )
}

                export default LoginSeller