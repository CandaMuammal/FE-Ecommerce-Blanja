import React from 'react'
import style from './checkout.module.css'
import Navbar from '../../../components/base/module/navbar'
import Leftside from '../../../components/base/module/checkout/leftside'
import Rightside from '../../../components/base/module/checkout/rightside'


const Checkout = () => {
    return (
        <>
            <Navbar />
            <div className={style.main}>
                <div className={style["main-wrap"]}>
                    <div className={style["main-container"]}>
                        <Leftside />
                        <Rightside/>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Checkout