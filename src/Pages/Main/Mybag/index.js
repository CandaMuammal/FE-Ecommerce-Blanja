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

    // const { loading, error, product } = productDetail

    const { productDetails, error, loading } = useSelector(state => state.product)

    // const { loading, error, product } = productDetail

    useEffect(() => {
        dispatch(getProductDetail(match.params.id))

    }, dispatch)

    useEffect(() => {
        dispatch(addToCart())
        // dispatch(addToCart(match.params.id))

        // }, [dispatch, match])
    }, dispatch)
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
                                    key={cartItem[0].id}
                                    id={cartItem[0].id}
                                    qty={cartItem[0].qty}
                                    name={cartItem[0].name}
                                    price={cartItem[0].price}
                                    image={cartItem[0].image}
                                    description={cartItem[0].description}
                                />
                            ))}
                        </div>

                        <Rightside
                            key={cartItem[0].id}
                            id={cartItem[0].id}
                            qty={cartItem[0].qty}
                            name={cartItem[0].name}
                            price={cartItem[0].price}
                            image={cartItem[0].image}
                            description={cartItem[0].description}
                        />
                    </div>
                </div>
            </div>
        </>
    )
}
export default Mybag