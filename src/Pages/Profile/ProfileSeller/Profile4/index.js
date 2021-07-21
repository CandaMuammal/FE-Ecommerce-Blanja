import React from 'react'
import style from './profile4.module.css'
import Navbar from '../../../../components/base/module/navbar'
import Leftside from '../../../../components/base/module/profileSeller/leftside'
import Rightside4 from '../../../../components/base/module/profileSeller/rightside4'



const ProfileSeller4 = () => {
    return (
        <>
            <Navbar />
            <div className={style.main}>
                <div className={style["main-wrap"]}>
                    <Leftside />
                    <Rightside4/>
                </div>
            </div>

        </>
    )
}

export default ProfileSeller4