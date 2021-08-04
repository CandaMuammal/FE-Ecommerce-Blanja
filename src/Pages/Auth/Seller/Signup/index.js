import React, { useState } from 'react'
import style from './signup.module.css'
import logo from '../../../../Assets/blanja-logo.png'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { register } from '../../../../configs/redux/actions/userAction'


const SignupSeller = () => {
    const [seller, setSeller] = useState({
        username: "",
        email: "",
        phoneNumber: "",
        storeName: "",
        password: "",
        role: "1",
    });
    const dispatch = useDispatch();
    const history = useHistory();

    const handleForm = (e) => {
        setSeller({ ...seller, [e.target.name]: e.target.value });
    };
    const handleSubmit = () => {
        dispatch(register(seller, history))
        try {
            history.push('/home')
            // alert ('benar')
        } catch (error) {
            alert('password anda salah')
        }
    };


    return (
        <div className={style.main}>
            <div className={style['main-container']}>
                <img src={logo} alt="" />
                <h5>Please signup with your account</h5>
                <div className={style["option-button"]}>
                    <button className={style.customer}> <Link to="./signup">Customer</Link></button>
                    <button className={style.seller}><Link to="/signupseller">Seller</Link></button>
                </div>
                <div className={style['form-control']}>
                    <input name='username' type="text" placeholder="  username" onChange={(e) => handleForm(e)} />
                    <input name='email' type="text" placeholder="  email" onChange={(e) => handleForm(e)} />
                    <input name='phoneNumber' type="text" placeholder="  phone number" onChange={(e) => handleForm(e)} />
                    <input name='storeName' type="text" placeholder="  store name" onChange={(e) => handleForm(e)} />
                    <input name='password' type="password" placeholder="  password" onChange={(e) => handleForm(e)} />
                </div>

                {/* <a href="./reset.html">Forgot password?</a> */}
                <button className={style["login-button"]} onClick={handleSubmit}>Signup</button>
                <h7>Already have a Tokopedia account? <a href="/loginseller">Login</a></h7>
            </div>

        </div>

    )
}

export default SignupSeller