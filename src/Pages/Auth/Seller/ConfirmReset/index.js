import React from 'react'
import style from './confirmreset.module.css'
import logo from '../../../../Assets/blanja-logo.png'


const ConfirmReset = () => {
    return (
        <div className={style.main}>
            <div className={style['main-container']}>
                <img src={logo} alt="" />
                <h3>Please login with your account</h3>
                <h5>You need to change your password to activate your account</h5>
                {/* <div className={style["option-button"]}>
                    <button className={style.customer}>Customer</button>
                    <button className={style.seller}>Seller</button>
                </div> */}
                    <div className={style['form-control']}>
                    <input type="text" placeholder="  Password"/>
                    <input type="text" placeholder="  Confirm Password"/>
                    </div>
            
                        {/* <a href="./reset.html">Forgot password?</a> */}
                        <button className={style["login-button"]}>Reset</button>
                        {/* <h5>Already have a Tokopedia account? <a href="">Login</a></h5> */}
                        </div>
            
        </div>

                )
}

                export default ConfirmReset