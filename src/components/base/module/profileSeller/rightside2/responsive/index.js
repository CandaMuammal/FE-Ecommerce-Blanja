import React, { Component } from 'react'
import style from './right2responsive.module.css'
import search from '../../../../../../Assets/search-logo.png'
import nothing from '../../../../../../Assets/nothing.png'


export class ResponsiveRightside2 extends Component {

    render() {
        return (

            <div className={style["responsive-maincontainer"]}>
                <div className={style["responsive-rightside"]}>
                <div className={style["responsive-rightbox"]}>
                    <div className={style["responsive-tabwrap"]}>
                        <div className={style["responsive-header"]}>
                            My Products
                        </div>
                        <input type="radio" name="slider" className={style["responsive-radio"]} id={style["responsive-all"]} checked/>
                        <input type="radio" name="slider" className={style["responsive-radio"]} id={style["responsive-sold"]}/>
                        <input type="radio" name="slider" className={style["responsive-radio"]} id={style["responsive-archieved"]}/>
                        

                        <div className={style["responsive-tabtitle"]}>
                            <label for="all" className={style["responsive-all"]}>All</label>
                            <label for="sold" className={style["responsive-sold"]}>Sold</label>
                            <label for="archieved" className={style["responsive-archieved"]}>Archieved</label>
                   
                            <div className={style["responsive-slider"]}></div>
                        </div>
                        <div className={style["responsive-horizontal"]}></div>

                    </div>
                    <div className={style["responsive-searchitem"]}>
                        <input type="text" placeholder="Search"/>
                        <img src={search} alt=""/>
                    </div>
                    <div className={style["responsive-body"]}>
                        <div className={style["responsive-bodyhead"]}>
                            <div className={style["responsive-name"]}>Product name</div>
                            <div className={style["responsive-price"]}>Price</div>
                            <div className={style["responsive-stock"]}>Stock</div>
                        </div>
                        <div className={style["responsive-bodycontent"]}>
                            <img src={nothing} alt=""/>
                        </div>
                    </div>
                    
                    
                </div>
            </div>
            </div>

        )
    }
}
export default ResponsiveRightside2