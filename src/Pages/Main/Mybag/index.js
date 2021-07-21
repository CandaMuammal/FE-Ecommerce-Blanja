import React from 'react'
import style from './mybag.module.css'
import Navbar from '../../../components/base/module/navbar'
import Leftside from '../../../components/base/module/mybag/leftside'
import Rightside from '../../../components/base/module/mybag/rightside'


const Mybag = () => {
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
export default Mybag