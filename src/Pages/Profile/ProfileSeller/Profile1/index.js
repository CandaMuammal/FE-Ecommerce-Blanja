import React from 'react'
import style from './profile1.module.css'
import Navbar from '../../../../components/base/module/navbar'
import Leftside from '../../../../components/base/module/profileSeller/leftside'
import Rightside1 from '../../../../components/base/module/profileSeller/rightside1'
import ResponsiveLeftside from '../../../../components/base/module/profileSeller/leftside/responsive'
import ResponsiveRightside1 from '../../../../components/base/module/profileSeller/rightside1/responsive'




const ProfileSeller1 = () => {
    return (
        <>
            <Navbar />
            <div className={style.main}>
                <div className={style["main-wrap"]}>
                    <Leftside />
                    <Rightside1 />
                    <div className={style.responsive}>
                        <ResponsiveLeftside />
                        <ResponsiveRightside1 />

                    </div>
                </div>
            </div>

        </>
    )
}

export default ProfileSeller1