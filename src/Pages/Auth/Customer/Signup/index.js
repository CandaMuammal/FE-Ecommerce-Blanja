import React from 'react'
import style from './signup.module.css'
import logo from '../../../../Assets/blanja-logo.png'
import { Link } from 'react-router-dom'
import { useFormik } from "formik";
import * as Yup from 'yup';
import { registerCustomer } from '../../../../configs/redux/actions/userAction'
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';



const Signup = () => {

    const dispatch = useDispatch();
    const history = useHistory();
    


    const formik = useFormik({
        initialValues: {
            username: '',
            email: '',
            password: ''
        },
        onSubmit: ({username, email, password}) => {
            dispatch(registerCustomer({username, email, password}, history))
        },
        validationSchema: Yup.object({

            username: Yup.string().required('Username is required'),
            email: Yup.string().required('Email is required').email('Please enter your correct email'),
            password: Yup.string().required('Password is required').min(8, "Password must contain at least 8 letters")
        })

    })

    return (
        <div className={style.main}>
            <div className={style['main-container']}>
                <img src={logo} alt="" />
                <h6>Please signup with your account</h6>
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
                        <input type="password" name="password" id="password" placeholder="password" value={formik.values.password} onChange={formik.handleChange} />
                        {formik.errors.password && formik.touched.password && (
                            <p>{formik.errors.password}</p>
                        )}
                    </div>
                <button className={style["login-button"]} type='submit'>Signup</button>

                </form>

                {/* <Link to="./reset.html">Forgot password?</Link> */}
                <h7>Already have a Tokopedia account? <Link to="./login">Login</Link></h7>
            </div>

        </div>

    )
}

export default Signup