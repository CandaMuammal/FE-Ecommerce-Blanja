import React, { Component } from 'react'
import style from './right1responsive.module.css'
import avabig from '../../../../../../Assets/avabig.png'


export class ResponsiveRightside1 extends Component {

    render() {
        return (

            <div class={style["responsive-maincontainer"]}>
                <div class={style["responsive-rightside"]}>
                    <div class={style["responsive-rightbox"]}>
                        <div class={style["responsive-title"]}>
                            <h2>My Profile</h2>

                        </div>
                        <div class={style["responsive-horizontal"]}></div>
                        <div class={style["responsive-body"]}>
                            <div class={style["responsive-rightbody"]}>
                                <img src={avabig} alt="" />
                                <button>Select Image</button>
                            </div>
                            <div class={style["responsive-leftbody"]}>
                                <form action="">
                                    <div class={style["responsive-name"]}>
                                        <label for="name">Name</label>
                                        <input type="text" placeholder="Johannes Mikael" id="name" />
                                    </div>
                                    <div class={style["responsive-email"]}>
                                        <label for="email">Email</label>
                                        <input type="text" placeholder="johannes@gmail.com" id="email" />
                                    </div>
                                    <div class={style["responsive-phone"]}>
                                        <label for="phone">Phone</label>
                                        <input type="text" placeholder="08901289012" id="phone" />
                                    </div>
                                    <div class={style["responsive-store"]}>
                                        <label for="responsive-store">Descript</label>
                                        <input type="email" placeholder="" id="description" />
                                    </div>


                                </form>
                                <button class={style["responsive-save"]}>Save</button>
                            </div>
                            <div class={style["responsive-vertical"]}></div>

                        </div>
                    </div>
                </div>
            </div>

        )
    }
}
export default ResponsiveRightside1