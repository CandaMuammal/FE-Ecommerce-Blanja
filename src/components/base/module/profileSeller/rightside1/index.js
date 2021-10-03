import React, { Component } from 'react'
import style from './rightside.module.css'
import avabig from '../../../../../Assets/avabig.png'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import axios from 'axios'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'


toast.configure()


const Rightside1 = () => {

    const idUser = localStorage.getItem('id')

    const [form, setForm] = useState({
        username: localStorage.getItem('username'),
        email: localStorage.getItem('email'),
        phoneNumber: localStorage.getItem('phoneNumber'),
        image: localStorage.getItem('image'),
        storeName: localStorage.getItem('storeName'),
        imagePreview: null

    })
    const handleChange = (e) => {
        let data = { ...form }
        data[e.target.name] = e.target.value
        setForm(data)
    }

    const handleInputFile = (e) => {
        setForm({
            ...form,
            image: e.target.files[0],
            imagePreview: URL.createObjectURL(e.target.files[0])
        })
        console.log(e.target.files)
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        const formData = new FormData()
        formData.append('username', form.username)
        formData.append('email', form.email) 
        formData.append('phoneNumber', form.phoneNumber)
        formData.append('storeName', form.storeName)
        formData.append('image', form.image)


        // formData.append('image', form.image)
        axios.put(`${process.env.REACT_APP_API_URL}v1/user/${idUser}`, formData)
        // axios.put('http://localhost:4000/v1/user/60236000', formData)

            .then((res) => {
                toast('success updated profile!')
                localStorage.setItem('username', username)
                localStorage.setItem('email', email)
                localStorage.setItem('phoneNumber', phoneNumber)
                localStorage.setItem('storeName', storeName)
                localStorage.setItem('image', image)
                // console.log(form.username)

            })
            .catch((err) => {
                toast(err.message)

            })
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
                                    <input type="text" name="username"  value={form.username} onChange={handleChange} placeholder="Johannes Mikael" />
                                </div>
                                <div className={style.email}>
                                    <label for="email">Email</label>
                                    <input type="text"  name="email" value={form.email} onChange={handleChange} placeholder="johannes@gmail.com" />
                                </div>
                                <div className={style.phone}>
                                    <label for="phone">Phone Number</label>
                                    <input type="text"  name="phoneNumber" value={form.phoneNumber} onChange={handleChange} placeholder="08901289012" />
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
                            <img src={form.image} alt=""/>
                            <button>Select Image</button>
                        </div>
                    </div>
                </div>
            </div>

      ) 
    }


export default Rightside1