import React, { Component, useState } from 'react'
import style from './rightside1.module.css'
import avabig from '../../../../../Assets/avabig.png'
import axios from 'axios'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router'
import {updateUser} from '../../../../../configs/redux/actions/userAction'

import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'


toast.configure()



const Rightside1 = () => {

    const user = useSelector(state => state.rootReducer.user.profile)
    const history = useHistory()
    const dispatch = useDispatch()
    const avatar = user.image

    const [form, setForm] = useState({
        username: user.username,
        email: user.email,
        phoneNumber: user.phoneNumber,
        image: user.image,
        address: user.address,
        birthdate: user.birthdate,
        imagePreview: null
 
    })
    const handleChange = (e) => {
        let data = { ...form }
        data[e.target.name] = e.target.value 
        setForm(data)
    }

    // const handleInputFile = (e) => {
    //     setForm({
    //         ...form,
    //         image: e.target.files[0],
    //         imagePreview: URL.createObjectURL(e.target.files[0])
    //     })
    //     console.log(e.target.files)
    // }
    const handleInputFile = (e) => {
        if (e.target.files) {
            setForm({
            ...form,
            image: e.target.files[0],
            imagePreview: URL.createObjectURL(e.target.files[0])
        })
        } else {
            setForm({
                ...form,
                image: user.image,
                // imagePreview: URL.createObjectURL(e.target.files[0])
            })
        }
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(updateUser(form, user))
    }

    const handleLogout = () => {
        localStorage.clear()
        window.location.href = "/login"
    }

    return (

        <div className={style.rightside}>
            <div className={style.rightbox}>
                <div className={style.title}>
                    <h4>My Profile</h4>
                    <h5>Manage your profile information</h5>
                </div>
                <div className={style.horizontal}></div>
                <div className={style.body}>
                    <div className={style.leftbody}>
                        {/* <form action=""> */}
                            <div className={style.name}>
                                <label for="name">Name</label>
                                <input type="text" name="username" value={form.username} onChange={handleChange} placeholder="Johannes Mikael" />

                            </div>
                            <div className={style.email}>
                                <label for="email">Email</label>
                                <input type="text" name="email" value={form.email} onChange={handleChange} placeholder="johannes@gmail.com" id="email" />
                            </div>
                            <div className={style.phone}>
                                <label for="phone">Phone Number</label>
                                <input type="text" name="phoneNumber" value={form.phoneNumber} onChange={handleChange} placeholder="08901289012" id="phone" />
                            </div>

                            <div className={style["date-birth"]}>
                                <label for="date-birth">Date of Birth</label>
                                <input type="text" name="birthdate" value={form.birthdate} onChange={handleChange} placeholder="DD/MM/YYYY" id="phone" />
                            </div>
                            <div className={style.address}>
                                <label for="address">Address</label>
                                <textarea name="address" value={form.address} onChange={handleChange} placeholder="Enter your current address.." id="phone" />
                            </div>
                        {/* </form> */}
                        <button className={style.save} onClick={handleSubmit}>Save</button>
                        <button className={style.save} onClick={handleLogout}>Logout</button>
                    </div>
                    <div className={style.vertical}></div>
                    <div className={style.rightbody}>
                        <input type="file" onChange={handleInputFile} />
                        <img src={avatar} alt="" />
                        {/* <button>Select Image</button> */}
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Rightside1