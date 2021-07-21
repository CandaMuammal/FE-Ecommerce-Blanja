import React from 'react'
import style from './profile3.module.css'
import Navbar from '../../../../components/base/module/navbar'
import Leftside from '../../../../components/base/module/profileSeller/leftside'
import Rightside3 from '../../../../components/base/module/profileSeller/rightside3'
import ResponsiveLeftside from '../../../../components/base/module/profileSeller/leftside/responsive'
import ResponsiveRightside3 from '../../../../components/base/module/profileSeller/rightside3/responsive'



const ProfileSeller3 = () => {
    return (
        <>
            <Navbar />
            <div className={style.main}>
                <div className={style["main-wrap"]}>
                    <Leftside />
                    <Rightside3/>
                </div>
                <div className={style.responsive}>
                        <ResponsiveLeftside />
                        <ResponsiveRightside3 />

                    </div>
            </div>

        </>
    )
}

export default ProfileSeller3