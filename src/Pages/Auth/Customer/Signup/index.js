import React from 'react'
import style from './signup.module.css'
import logo from '../../../../Assets/blanja-logo.png'
import {Link} from 'react-router-dom'


const Signup = () => {
    return (
        <div className={style.main}>
            <div className={style['main-container']}>
                <img src={logo} alt="" />
                <h6>Please signup with your account</h6>
                <div className={style["option-button"]}>
                <button className={style.customer}> <Link to="./signup">Customer</Link></button>
                    <button className={style.seller}><Link to="/signupseller">Seller</Link></button>
                </div>
                    <div className={style['form-control']}>
                    <input type="text" placeholder="  Name"/>
                    <input type="text" placeholder="  Email"/>
                    <input type="text" placeholder="  Password"/>
                    </div>
            
                        {/* <Link to="./reset.html">Forgot password?</Link> */}
                        <button className={style["login-button"]}>Signup</button>
                        <h7>Already have a Tokopedia account? <Link to="./login">Login</Link></h7>
                        </div>
            
        </div>

                )
}

                export default Signup