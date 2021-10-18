import React from 'react'
import style from './mybag.module.css'
import Navbar from '../../../components/base/module/navbar'
import Leftside from '../../../components/base/module/mybag/leftside'
import Rightside from '../../../components/base/module/mybag/rightside'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { getProduct as listProduct } from '../../../configs/redux/actions/productAction'
import { getProductDetail } from '../../../configs/redux/actions/productAction'
import { addToCart } from '../../../configs/redux/actions/cartActions'



const Mybag = ({ match }) => {
    const dispatch = useDispatch()

    const cart = useSelector(state => state.cart)
    const { cartItem } = cart

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

    // const totalPrice = (products) => {
    //     if(products.length > 0) {
    //         let result = 0
    //         products.map(item => {
    //             return result = (item.price + result) * item.qtyy
    //         } )         
        
    //     return result    
    //     } else {
    //         return 1
    //     }
            
    // }

    // console.log(totalPrice())

    return (
        <>
            <Navbar />
            <div className={style.main}>
                <div className={style["main-wrap"]}>
                    <div className={style["main-container"]}>
                        <div className={style.left}>
                            <h1>My Bag</h1>
                            {cartItem.map(item => (
                                <Leftside
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
                            // key={cartItem.id}
                            // id={cartItem.id}
                            // qty={cartItem.qty}
                            // name={cartItem.name}
                            price={totalPrice}
                            // image={cartItem.image}
                            // description={cartItem.description}
                        />
                    </div>
                </div>
            </div>
        </>
    )
}
export default Mybag