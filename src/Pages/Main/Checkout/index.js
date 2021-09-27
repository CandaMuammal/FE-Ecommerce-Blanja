import React from 'react'
import style from './checkout.module.css'
import Navbar from '../../../components/base/module/navbar'
import Leftsides from '../../../components/base/module/checkout/leftside'
import Rightside from '../../../components/base/module/checkout/rightside'
import { useSelector } from 'react-redux'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { useHistory } from 'react-router-dom'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'


toast.configure()

const Checkout = () => {

    
    const history = useHistory()

    const cart = useSelector(state => state.cart)
    const username = localStorage.getItem('username')


    const { cartItem } = cart

    // console.log(userData.username)
    console.log(cartItem[0].name)

    const payload = {
        username,
        name: cartItem[0].name,
        price: cartItem[0].price + 50000,
        qty: cartItem[0].qty,
        image: cartItem[0].image,
    }

    const handlePayment = () => {

        axios.post(`http://localhost:4000/v1/history/`, payload)
        
        .then((res) => {
            toast('success')
            history.push('/home')
        })
        .catch(() => {
            toast('failed')
        })
    }


    return (
        <>
            <Navbar />
            <div className={style.main}>
                <div className={style["main-wrap"]}>
                    <div className={style["main-container"]}>
                        
                        <div className={style.left}>
                        <Leftsides
                          key={cartItem[0].id}
                          id={cartItem[0].id}
                          qty={cartItem[0].qty}
                          name={cartItem[0].name}
                          price={cartItem[0].price}
                          image={cartItem[0].image}
                          description={cartItem[0].description}
                        />
                        </div>
                        
                        <Rightside onClick={handlePayment}/>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Checkout