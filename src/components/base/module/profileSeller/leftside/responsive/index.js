import React, { Component } from 'react'
import style from './leftresponsive.module.css'
import ava from '../../../../../../Assets/ava.png'
// import edit from '../../../../../Assets/edit.png'
import store from '../../../../../../Assets/store.png'
import product from '../../../../../../Assets/product.png'
import order from '../../../../../../Assets/order.png'

export class ResponsiveLeftside extends Component {

    render() {
        return (

            <div class={style["responsive-maincontainer"]}>
            <div class={style["responsive-leftside"]}>
                <div class={style["responsive-profile"]}>
                    <div class={style["responsive-ava"]}>
                        <img src={ava} alt="" />
                    </div>
                    <div class={style["responsive-profilename"]}>

                    </div>
                </div>
                <div class={style["responsive-myaccount"]}>
                    <div class={style["responsive-circle"]}>
                        <img src={store} alt="" />
                    </div>

                </div>
                <div class={style["responsive-shippingaddress"]}>
                    <div class={style["responsive-circle"]}>
                        <img src={product} alt="" />
                    </div>

                </div>
                <div class={style["responsive-myorder"]}>
                    <div class={style["responsive-circle"]}>
                        <img src={order} alt="" />
                    </div>

                </div>
            </div>
        </div>



            

        )
    }
}
export default ResponsiveLeftside