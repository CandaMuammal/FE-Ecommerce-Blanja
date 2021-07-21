import React from 'react'
import style from './resetpassword.module.css'
import logo from '../../../../Assets/blanja-icon.png'
import reset from '../../../../Assets/reset.png'
import {Link} from 'react-router-dom'

const ResetPassword = () => {
    return (
        <div className={style.main}>
            <div className={style['main-container']}>
                <img src={logo} alt="" />
                <h5>Please signup with your account</h5>

                <div className={style['form-control']}>
                    <input type="text" placeholder="  Email" />
                </div>

                {/* <a href="./reset.html">Forgot password?</a> */}
                <button className={style["login-button"]}><a href="#reset">Reset Password</a></button>
                <div className={style["modal-payment"]}>
                    <div className={style.payment} id="reset">
                        <div className={style["payment-content"]}>
                            <div className={style["payment-heading"]}>
                                <a href="" className={style["payment-close"]}>&times;</a>
                            </div>
                            <div className={style["payment-body"]}>
                                <div className={style.logo}>
                                    <img src={logo} alt="" />
                                </div>
                                <div>
                                    <h4>Request to Reset Your Password</h4></div>
                                <div className={style.reset}>
                                    <img src={reset} alt="" />
                                </div>
                                <div>
                                    <h6>The following is the button for you to reset the password</h6></div>
                                <button className={style["login-button"]}><Link to="/login">Change Password</Link></button>
                            </div>
                        </div>
                    </div>
                    <h7>Don't have a Tokopedia account? <Link to="/signup">Register</Link></h7>

                </div>
            </div>

        </div>

    )
}

export default ResetPassword