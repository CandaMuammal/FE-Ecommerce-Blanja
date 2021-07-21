import React, { Component } from 'react'
import style from './leftside.module.css'
import ava from '../../../../../Assets/ava.png'
import edit from '../../../../../Assets/edit.png'
import myaccount from '../../../../../Assets/myaccount.png'
import myorder from '../../../../../Assets/myorder.png'
import shipping from '../../../../../Assets/shipping-address.png'
import {Link} from 'react-router-dom'



export class Leftside extends Component {

    render() {
        return (
            

                <div className={style.leftside}>
                    <div className={style.profile}>
                        <div className={style.ava}>
                            <img src={ava} alt="" />
                        </div>
                        <div className={style.profilename}>
                            <h4>Johannes Mikael</h4>
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
                    <div className={style["shipping-address"]}>
                        <div className={style.circle}>
                            <img src={shipping} alt="" />
                        </div>
                        <h6><a href="./profilecustomer2">Shipping Address</a></h6>
                    </div>
                    <div className={style.myorder}>
                        <div className={style.circle}>
                            <img src={myorder} alt="" />
                        </div>
                        <h6><a href="./profilecustomer3">My Order</a></h6>
                    </div>
                </div>
            

        )
    }
}

export default Leftside