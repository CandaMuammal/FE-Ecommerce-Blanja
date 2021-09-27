import React, { Component } from 'react'
import Checkout from '../../../../../Pages/Main/Checkout'
import style from './rightside.module.css'
import {Link} from 'react-router-dom'

const Rightside = ({id, qty, name, price, image, description}) => {

        return (

            <div className={style["right-side"]}>
                <div className={style.rightbox}>
                    <h5>Shopping summary</h5>
                    <div className={style["total-price"]}>
                        <h5>Total price</h5>
                        <h4>{price}</h4>
                    </div>
                    <div className={style.button}>
                        <button><Link to='./checkout'>Buy</Link></button>
                    </div>

                </div>
            </div>

        )
    }


export default Rightside