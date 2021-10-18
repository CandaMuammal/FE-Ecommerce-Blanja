import React from 'react'
import style from './checkout.module.css'
import Navbar from '../../../components/base/module/navbar'
import Leftsides from '../../../components/base/module/mybag/leftside/index'
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

    // const cart = useSelector(state => state.cart)
    // const username = localStorage.getItem('username')
    const cart = useSelector(state => state.cart)
    const { cartItem } = cart
    const address = localStorage.getItem('address')
    const username = localStorage.getItem('username')
    const phone = localStorage.getItem('phoneNumber')

    
    // const { cartItem } = cart
    // let payload = {}
    
    // console.log(userData.username)
    console.log(cartItem)
    const checkout = cartItem.map(item =>{
    //  
    return item
    // console.log(item.price)
    })

    const totalPrice = checkout.reduce(function(val, element) {
        return val + (element.price*element.qtyy)
    }, 0)

    const totalQty = checkout.reduce(function(val, element) {
        return val + element.qtyy
    }, 0)

    console.log(totalQty)
    console.log(totalPrice)

    // const totalPayments = totalPrice * totalQty

    // console.log(totalPayments)

    let allname = ""
    if (checkout.length > 0) {
        //  allname = checkout[0].name +', '+ checkout[1].name
      const filterName = checkout.map(item => {
           return item.name
        })
        allname = filterName.join(', ')
        console.log(allname)
    } else {
        allname = checkout[0].name
    }



   const payload = {
            username,
            name: allname,
            price: totalPrice + 50000,
            qty: totalQty,
            // image: cartItem.image,
        }

    const handlePayment = () => {

        axios.post(`${process.env.REACT_APP_API_URL}v1/history/`, payload)

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
                            <h1>Checkout</h1>
                            <h4>Shipping Address</h4>
                            <div className={style.leftbox1}>
                                <h4>{username}</h4>
                                <p>{address}</p>
                                <p>{phone}</p>
                            </div>
                            {/* <Leftsides
                          key={cartItem.id}
                          id={cartItem.id}
                          qty={cartItem.qty}
                          name={cartItem.name}
                          price={cartItem.price}
                          image={cartItem.image}
                          description={cartItem.description}
                        /> */}
                            {cartItem.map(item => (
                            <Leftsides
                                key={item.id}
                                id={item.id}
                                qtyy={item.qtyy}
                                name={item.name}
                                price={item.price}
                                image={item.image}
                                description={item.description}
                            />
                          ))} 
                        </div>

                        <Rightside 
                        onClick={handlePayment}
                        // totalPrice={totalPrice}
                        totalPrice={totalPrice}

                        />
                    </div>
                </div>
            </div>
        </>
    )
}
export default Checkout