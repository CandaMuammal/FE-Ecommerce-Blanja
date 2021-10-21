// import "./App.css";
import React, { useState } from "react";
import ReactPaginate from "react-paginate";
import Cards from '../../../components/base/card/index'
import Navbar from '../../../components/base/module/navbar'
import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getProduct as listProduct } from '../../../configs/redux/actions/productAction'
import style from './category.module.css'
import axios from "axios";

function Pants() {

    const [detail, setDetail] = useState([])

    const getcategory = () => {
        axios.get(`${process.env.REACT_APP_API_URL}v1/product/products/Pants`)
            .then((res) => {
                const product = res.data.data
                // console.log(product)
                setDetail(product)
            })
    }


    useEffect(() => {
        getcategory()
    })


    console.log(detail)
    // getcategory()
    // console.log(products)

    return (
        <>

            <Navbar />
            <div className={style.body}>

                <div className={style.container}>

                    <h1>Pants</h1>
                    <div className={style.cardwrap}>
                        {detail.map(item => {
                            return (
                                <Cards
                                    key={item.id}
                                    id={item.id}
                                    name={item.name}
                                    price={item.price}
                                    image={item.image}
                                />
                            )
                        })}
                                
                          
                    </div>



                </div>
            </div>
        </>
    );
}

export default Pants