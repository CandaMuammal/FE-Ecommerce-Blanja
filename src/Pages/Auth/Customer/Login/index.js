import React from 'react'
import style from './login.module.css'
import logo from '../../../../Assets/blanja-logo.png'
import ButtonLogin from '../../../../components/base/button/login'
import {Link} from 'react-router-dom'


const Login = () => {
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
            
                        <Link to="./resetpassword">Forgot password?</Link>
                        {/* <button className={style["login-button"]}>Login</button> */}
                        <ButtonLogin/>
                        <h7>Don't have a Tokopedia account? <Link to="./signup">Register</Link></h7>
                        </div>
            
        </div>

                )
}

                export default Login