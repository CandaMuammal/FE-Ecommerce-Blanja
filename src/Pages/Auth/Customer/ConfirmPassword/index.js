import React from 'react'
import style from './confirmpassword.module.css'
import logo from '../../../../Assets/blanja-logo.png'
import ButtonLogin from '../../../../components/base/button/login'


const ConfirmPassword = () => {
    return (
        <div className={style.main}>
            <div className={style['main-container']}>
                <img src={logo} alt="" />
                <h5>Please login with your account</h5>
                <h6>We have sent an email containing a password reset instruction to your email. Please check your email</h6>
                {/* <div className={style["option-button"]}>
                    <button className={style.customer}>Customer</button>
                    <button className={style.seller}>Seller</button>
                </div> */}
                    <div className={style['form-control']}>
                    <input type="text" placeholder="  Email"/>
                    <input type="text" placeholder="  Password"/>
                    </div>
            
                        {/* <a href="./reset.html">Forgot password?</a> */}
                        {/* <button className={style["login-button"]}>Login</button> */}
                        <ButtonLogin/>
                        {/* <h5>Already have a Tokopedia account? <a href="">Login</a></h5> */}
                        </div>
            
        </div>

                )
}

                export default ConfirmPassword