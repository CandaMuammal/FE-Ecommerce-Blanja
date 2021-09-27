import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import style from './signup.module.css'
import logo from '../../../../Assets/blanja-logo.png'
import { Link } from 'react-router-dom'
import { useFormik } from "formik";
import * as Yup from 'yup';
import { registerSeller } from '../../../../configs/redux/actions/userAction'


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

    const formik = useFormik({
        initialValues: {
            username: '',
            email: '',
            phoneNumber: "",
            storeName: "",
            password: "",
            role: "1",
        },
        onSubmit: (initialValues) => {
            dispatch(registerSeller(initialValues, history))
        },
        validationSchema: Yup.object({

            username: Yup.string().required('Username is required'),
            email: Yup.string().required('Email is required').email('Please enter your correct email'),
            phoneNumber: Yup.string().required('phone number is required').min(10, 'Phone number must contain at least 10 numbers'),
            storeName: Yup.string().required('store name is required').min(1, 'Store name must contain at least 1 letter'),
            password: Yup.string().required('Password is required').min(8, "Password must contain at least 8 letters")
        })

    })

    // const handleForm = (e) => {
    //     setSeller({ ...seller, [e.target.name]: e.target.value });
    // };
    // const handleSubmit = () => {
    //     dispatch(registerSeller(seller, history))
    //     try {
    //         history.push('/home')
    //         // alert ('benar')
    //     } catch (error) {
    //         alert('password anda salah')
    //     }
    // };


    return (
        <div className={style.main}>
            <div className={style['main-container']}>
                <img src={logo} alt="" />
                <h5>Please signup with your account</h5>
                <div className={style["option-button"]}>
                    <button className={style.customer}> <Link to="./signup">Customer</Link></button>
                    <button className={style.seller}><Link to="/signupseller">Seller</Link></button>
                </div>
                <form onSubmit={formik.handleSubmit}>
                    <div>
                        <input type="text" name="username" id="username" placeholder="username" value={formik.values.username} onChange={formik.handleChange} />
                        {formik.errors.username && formik.touched.username && (
                            <p>{formik.errors.username}</p>
                        )}
                    </div>
                    <div>
                        <input type="text" name="email" id="email" placeholder="email" value={formik.values.email} onChange={formik.handleChange} />
                        {formik.errors.email && formik.touched.email && (
                            <p>{formik.errors.email}</p>
                        )}
                    </div>

                    <div>
                        <input type="text" name="phoneNumber" id="phoneNumber" placeholder="phoneNumber" value={formik.values.phoneNumber} onChange={formik.handleChange} />
                        {formik.errors.phoneNumber && formik.touched.phoneNumber && (
                            <p>{formik.errors.phoneNumber}</p>
                        )}
                    </div>

                    <div>
                        <input type="text" name="storeName" id="storeName" placeholder="storeName" value={formik.values.storeName} onChange={formik.handleChange} />
                        {formik.errors.storeName && formik.touched.storeName && (
                            <p>{formik.errors.storeName}</p>
                        )}
                    </div>

                    <div>
                        <input type="password" name="password" id="password" placeholder="password" value={formik.values.password} onChange={formik.handleChange} />
                        {formik.errors.password && formik.touched.password && (
                            <p>{formik.errors.password}</p>
                        )}
                    </div>
                <button className={style["login-button"]} type='submit'>Signup</button>

                </form>

                {/* <a href="./reset.html">Forgot password?</a> */}
                <h7>Already have a Tokopedia account? <a href="/login">Login</a></h7>
            </div>

        </div>

    )
}

export default SignupSeller