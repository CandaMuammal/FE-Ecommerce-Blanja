import React from 'react'
import style from './profile2.module.css'
import Navbar from '../../../../components/base/module/navbar'
import Leftside from '../../../../components/base/module/profileSeller/leftside'
import Rightside2 from '../../../../components/base/module/profileSeller/rightside2'
import ResponsiveLeftside from '../../../../components/base/module/profileSeller/leftside/responsive'
import ResponsiveRightside2 from '../../../../components/base/module/profileSeller/rightside2/responsive'




const ProfileSeller2 = () => {
    return (
        <>
            <Navbar />
            <div className={style.main}>
                <div className={style["main-wrap"]}>
                    <Leftside />
                    <Rightside2 />
                    <div className={style.responsive}>
                        <ResponsiveLeftside />
                        <ResponsiveRightside2 />

                    </div>
                </div>
            </div>

        </>
    )
}

export default ProfileSeller2