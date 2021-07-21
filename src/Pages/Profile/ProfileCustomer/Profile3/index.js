import React from 'react'
import style from './profile3.module.css'
import Navbar from '../../../../components/base/module/navbar'
import Leftside from '../../../../components/base/module/profileCustomer/leftside'
import Rightside3 from '../../../../components/base/module/profileCustomer/rightside3'


const ProfileCust3 = () => {
    return (
        <>
            <Navbar />
            <div className={style.main}>
                <div className={style["main-wrap"]}>
                    <Leftside />
                    <Rightside3/>
                </div>
            </div>

        </>
    )
}
export default ProfileCust3