import React, { Component } from 'react'
import style from './right3responsive.module.css'
import bigbox from '../../../../../../Assets/bigbox.png'
import smallbox from '../../../../../../Assets/smallbox.png'
import writing from '../../../../../../Assets/writing.png'




export class ResponsiveRightside3 extends Component {

    render() {
        return (

            <div className={style["responsive-maincontainer"]}>
                <div class={style["responsive-rightside"]}>
                    <div class={style["responsive-box1"]}>
                        <div class={style["responsive-inventory"]}>
                            <h2>Inventory</h2>
                        </div>
                        <form action="">
                            <label for="name">Name of goods</label>
                            <input type="text" />
                        </form>
                    </div>
                    <div class={style["responsive-box2"]}>
                        <div class={style["responsive-itemdetail"]}>
                            <h2>Item Details</h2>
                        </div>
                        <form action="">
                            <label for="price">Unit price</label>
                            <input type="text" />
                            <label for="stock">Stock</label>
                            <input type="text" />
                            <label for="condition">Stock</label>
                            <div class={style["responsive-radio"]}>
                                <input type="radio" name="condition" id="" />Baru
                                <input type="radio" name="condition" id="" />Bekas
                            </div>

                        </form>
                    </div>
                    <div class={style["responsive-box3"]}>
                        <div class={style["responsive-photogoods"]}>
                            <h2>Photo of Goods</h2>
                        </div>
                        <div class={style["responsive-body"]}>
                            <div class={style["responsive-pict"]}>
                                <div class={style["responsive-pict1"]}><img src={bigbox} alt="" /></div>
                                <div class={style["responsive-pict2"]}><img src={smallbox} alt="" /></div>
                                <div class={style["responsive-pict2"]}><img src={smallbox} alt="" /></div>
                            </div>
                            <div class={style["responsive-pictbutton"]}>
                                <button class={style["responsive-upload"]}>Upload</button>
                            </div>
                        </div>
                    </div>
                    <div class={style["responsive-box4"]}>
                        <div class={style["responsive-descript"]}>
                            <h2>Description</h2>
                        </div>
                        <div class={style["responsive-body"]}>
                            <div class={style["responsive-writing"]}>
                                <img src={writing} alt="" />
                                
                            </div>
                            <input type="email" />
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}
export default ResponsiveRightside3