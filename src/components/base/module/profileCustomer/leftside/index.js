import React, { Component } from 'react'
import style from './leftside.module.css'
import ava from '../../../../../Assets/ava.png'
import edit from '../../../../../Assets/edit.png'
import myaccount from '../../../../../Assets/myaccount.png'
import myorder from '../../../../../Assets/myorder.png'
import shipping from '../../../../../Assets/shipping-address.png'
import {Link} from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router'

const Leftside = () => {

    const user = useSelector(state => state.rootReducer.user.profile)
    const history = useHistory()
    const dispatch = useDispatch()

        const username = user.username
        const avatar = user.image
        return (
            

                <div className={style.leftside}>
                    <div className={style.profile}>
                        <div className={style.ava}>
                            <img src={avatar} alt="" />
                        </div>
                        <div className={style.profilename}>
                            <h4>{username}</h4>
                            <div className={style.edit}>
                                <img src={edit} alt="" />
                                <h6><a href="">Edit profile</a></h6>
                            </div>
                        </div> 
                    </div>
                    <div className={style.myaccount}>
                        <div className={style.circle}>
                            <img src={myaccount} alt="" />
                        </div>
                        <h6><Link to="./profilecustomer1">My Account</Link></h6>
                    </div>
                    {/* <div className={style["shipping-address"]}>
                        <div className={style.circle}>
                            <img src={shipping} alt="" />
                        </div>
                        <h6><a href="./profilecustomer2">Shipping Address</a></h6>
                    </div> */}
                    <div className={style.myorder}>
                        <div className={style.circle}>
                            <img src={myorder} alt="" />
                        </div>
                        <h6><a href="./profilecustomer3">My Order</a></h6>
                    </div>
                </div>
            

        )
    }


export default Leftside