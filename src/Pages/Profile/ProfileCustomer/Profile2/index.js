import React from 'react'
import style from './profile2.module.css'
import Navbar from '../../../../components/base/module/navbar'
import Leftside from '../../../../components/base/module/profileCustomer/leftside'
import Rightside2 from '../../../../components/base/module/profileCustomer/rightside2'


const ProfileCust2 = () => {
    return (
        <>
            <Navbar />
            <div className={style.main}>
                <div className={style["main-wrap"]}>
                    <Leftside />
                    <Rightside2/>
                </div>
            </div>

        </>
    )
}
export default ProfileCust2