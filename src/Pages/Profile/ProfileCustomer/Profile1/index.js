import React from 'react'
import style from './profile1.module.css'
import Navbar from '../../../../components/base/module/navbar'
import Leftside from '../../../../components/base/module/profileCustomer/leftside'
import Rightside1 from '../../../../components/base/module/profileCustomer/rightside1'


const ProfileCust1 = () => {

    
    return (
        <>
            <Navbar />
            <div className={style.main}>
                <div className={style["main-wrap"]}>
                    <Leftside />
                    <Rightside1 />
                </div>
            </div>

        </>
    )
}
export default ProfileCust1