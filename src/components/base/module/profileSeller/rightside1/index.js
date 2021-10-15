import React, { Component } from 'react'
import style from './rightside.module.css'
import avabig from '../../../../../Assets/avabig.png'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router'
import {updateUserSeller} from '../../../../../configs/redux/actions/userAction'


toast.configure()


const Rightside1 = () => {

    const user = useSelector(state => state.rootReducer.user.profile)
    const history = useHistory()
    const dispatch = useDispatch()
    const avatar = user.image


    // const idUser = localStorage.getItem('id')

    const [form, setForm] = useState({
        username: user.username,
        email: user.email,
        phoneNumber: user.phoneNumber,
        image: user.image,
        storeName: user.storeName,
    

    })
    const handleChange = (e) => {
        let data = { ...form }
        data[e.target.name] = e.target.value
        setForm(data)
    }

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
        dispatch(updateUserSeller(form, user))

    }

    const handleLogout = () => {
        localStorage.clear()
        window.location.href = "/login"
    }

    return (

        <div className={style.rightside}>
            <div className={style.rightbox}>
                <div className={style.title}>
                    <h3>My Profile</h3>
                    <h4>Manage your profile information</h4>
                </div>
                <div className={style.horizontal}></div>
                <div className={style.body}>
                    <div className={style.leftbody}>

                        <div className={style.name}>
                            <label for="name">Name</label>
                            <input type="text" name="username" value={form.username} onChange={handleChange} placeholder="Johannes Mikael" />
                        </div>
                        <div className={style.email}>
                            <label for="email">Email</label>
                            <input type="text" name="email" value={form.email} onChange={handleChange} placeholder="johannes@gmail.com" />
                        </div>
                        <div className={style.phone}>
                            <label for="phone">Phone Number</label>
                            <input type="text" name="phoneNumber" value={form.phoneNumber} onChange={handleChange} placeholder="08901289012" />
                        </div>
                        <div className={style.description}>
                            <label for="description">Store Description</label>
                            <input type="text" value={form.storeName} name="storeName" onChange={handleChange} placeholder="" />
                        </div>



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