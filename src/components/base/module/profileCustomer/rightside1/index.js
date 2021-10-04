import React, { Component, useState } from 'react'
import style from './rightside1.module.css'
import avabig from '../../../../../Assets/avabig.png'
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
        address: localStorage.getItem('address'),
        birthdate: localStorage.getItem('birthdate'),
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
        formData.append('birthdate', form.birthdate)
        formData.append('image', form.image)
        formData.append('address', form.address)


        // formData.append('image', form.image)
        axios.put(`${process.env.REACT_APP_API_URL}v1/user/${idUser}`, formData)
        // axios.put('http://localhost:4000/v1/user/60236000', formData)
        // axios.put(`${process.env.REACT_APP_API_URL}v1/user/customer/${idUser}`, formData)

            .then((res) => {
                toast('success updated profile!')
                localStorage.setItem('username', form.username)
                localStorage.setItem('email', form.email)
                localStorage.setItem('phoneNumber',form.phoneNumber)
                localStorage.setItem('birthdate', form.birthdate)
                localStorage.setItem('address', form.address)
                localStorage.setItem('image', form.image)
                console.log(form.username)

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
                                <textarea name="address" value={form.address} onChange={handleChange} placeholder="DD/MM/YYYY" id="phone" />
                            </div>
                        {/* </form> */}
                        <button className={style.save} onClick={handleSubmit}>Save</button>
                        <button className={style.save} onClick={handleLogout}>Logout</button>
                    </div>
                    <div className={style.vertical}></div>
                    <div className={style.rightbody}>
                        <input type="file" onChange={handleInputFile} />
                        <img src={form.image} alt="" />
                        {/* <button>Select Image</button> */}
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Rightside1