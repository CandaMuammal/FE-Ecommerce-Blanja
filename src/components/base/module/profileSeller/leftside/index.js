import React, { Component } from 'react'
import style from './leftside.module.css'
import ava from '../../../../../Assets/ava.png'
import edit from '../../../../../Assets/edit.png'
import store from '../../../../../Assets/store.png'
import product from '../../../../../Assets/product.png'
import order from '../../../../../Assets/order.png'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router'
// import { Form } from 'react-bootstrap'

const Leftside = () => {
        const username = localStorage.getItem('username')
        const user = useSelector(state => state.rootReducer.user.profile)
    const history = useHistory()
    const dispatch = useDispatch()
    const avatar = user.image
        return (

            <div class={style.leftside}>
                <div class={style.profile}>
                    <div class={style.ava}>
                        <img src={avatar} alt="" />
                    </div>
                    <div class={style.profilename}>
                        <h4>{username}</h4>
                        <div class={style.edit}>
                            <img src={edit} alt="" />
                            <h6><a href="">Edit profile</a></h6>
                        </div>
                    </div>
                </div>
                <div class={style.store}>
                    <div class={style.circle}>
                        <img src={store} alt="" />
                    </div>
                    <div class={style.title}>
                        {/* <h6><a href="">Store</a></h6> */}
                        <div class={style.dropdown}>
                            <button class={style.dropbtn}>Store</button>
                            <div class={style["dropdown-content"]}>
                                <a href="/profileseller1">Store Profile</a>
                            </div>
                        </div>
                    </div>

                </div>
                <div class={style.product}>
                    <div class={style.circle}>
                        <img src={product} alt="" />
                    </div>
                    <div class={style.title}>
                        <div class={style.dropdown}>
                            <button class={style.dropbtn}>Product</button>
                            <div class={style["dropdown-content"]}>
                                <a href="/profileseller2">My Products </a>
                                <a href='/profileseller3'>My Selling Products</a>
                            </div>
                        </div>

                    </div>
                </div>
                <div class={style.order}>
                    <div class={style.circle}>
                        <img src={order} alt="" />
                    </div>
                    <div class={style.title}>
                    <div class={style.dropdown}>
                            <button class={style.dropbtn}>Order</button>
                            <div class={style["dropdown-content"]}>
                                <a href="/profileseller4">Order </a>
                                <a href='/profileseller4'>Order Cancel</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        )
    }



export default Leftside