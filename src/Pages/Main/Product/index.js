import React, { Component } from 'react'
import style from './product.module.css'
import Navbar from '../../../components/base/module/navbar'
import ProductBody from '../../../components/base/module/productBody'
import Cards from '../../../components/base/card'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getProduct as listProduct } from '../../../configs/redux/actions/productAction'
import { getProductDetail } from '../../../configs/redux/actions/productAction'
import { addToCart } from '../../../configs/redux/actions/cartActions'


const Product = ({ match}) => {

    // const [qty, setQty] = useState(1)
    // const getProduct = useSelector(state => state.getProduct)
    // const { product } = getProduct

    // useEffect(() => {
    //     dispatch(listProduct())
    // })

    const dispatch = useDispatch()

    const {productDetails, error, loading} = useSelector(state => state.product)

    // const { loading, error, product } = productDetail

    useEffect(() => {
        dispatch(getProductDetail(match.params.id))
        
    }, [dispatch, match])

    console.log(productDetails.price)

    
    return (
        <>
            <Navbar />
            <div className={style.main}>
                <div className={style["main-wrap"]}>
                    <div className={style["main-container"]}>
                        <ProductBody
                        key={productDetails.id}
                        id={productDetails.id}
                        name={productDetails.name}
                        size={productDetails.size}
                        price={productDetails.price}
                        image={productDetails.image}
                        color={productDetails.color}
                        stock={productDetails.stock}
                        description={productDetails.description}
                        />
                    </div>
                </div>
            </div> 
        </>
    )
}

export default Product