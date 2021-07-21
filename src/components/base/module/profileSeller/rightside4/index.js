import React, { Component } from 'react'
import style from './rightside4.module.css'
import nothing from '../../../../../Assets/nothing.png'
import search from '../../../../../Assets/search-logo.png'

export class Rightside4 extends Component {

    render() {
        return (

            <div className={style.rightside}>
                <div className={style.rightbox}>
                    <div className={style["tab-wrap"]}>
                        <div className={style.header}>
                            My order
                        </div>
                        <input type="radio" name="slider" classNameName={style.radio} id={style.all} checked />
                        <input type="radio" name="slider" classNameName={style.radio} id={style.notyet} />
                        <input type="radio" name="slider" classNameName={style.radio} id={style.packed} />
                        <input type="radio" name="slider" classNameName={style.radio} id={style.sent} />
                        <input type="radio" name="slider" classNameName={style.radio} id={style.completed} />
                        <input type="radio" name="slider" classNameName={style.radio} id={style.cancel} />

                        <div className={style["tab-title"]}>
                            <label for="all" className={style.all}>All items</label>
                            <label for="notyet" className={style.notyet}>Unpaid</label>
                            <label for="packed" className={style.packed}>Packed</label>
                            <label for="sent" className={style.sent}>Sent</label>
                            <label for="completed" className={style.about}>Completed</label>
                            <label for="cancel" className={style.cancel}>Cancel</label>
                            <div className={style.slider}></div>
                        </div>
                        <div className={style.horizontal}></div>

                    </div>
                    <div className={style.searchitem}>
                        <input type="text" placeholder="Search" />
                        <img src={search} alt="" />
                    </div>
                    <div className={style.nothing}><img src={nothing} alt="" /></div>
                </div>

            </div>
        )
    }
}
export default Rightside4
