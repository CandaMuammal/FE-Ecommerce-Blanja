import React, { Component } from 'react'
import style from './rightside3.module.css'
import avabig from '../../../../../Assets/avabig.png'



export class Rightside3 extends Component {

    render() {
        return (

            <div className={style.rightside}>
                <div className={style.rightbox}>
                    <div className={style["tab-wrap"]}>
                        <div className={style.header}>
                            My order
                        </div>
                        <input type="radio" name="slider" className={`${style.radio} ${style.all}`} id="all" checked />
                        <input type="radio" name="slider" className={`${style.radio} ${style.notyet}`} id="notyet" />
                        <input type="radio" name="slider" className={`${style.radio} ${style.packed}`} id="packed" />
                        <input type="radio" name="slider" className={`${style.radio} ${style.sent}`} id="sent" />
                        <input type="radio" name="slider" className={`${style.radio} ${style.completed}`} id="completed" />
                        <input type="radio" name="slider" className={`${style.radio} ${style.cancel}`} id="cancel" />

                        <div className={style["tab-title"]}>
                            <label for="all2" className={style.all2}>All items</label>
                            <label for="notyet2" className={style.notyet2}>Unpaid</label>
                            <label for="packed2" className={style.packed2}>Packed</label>
                            <label for="sent2" className={style.sent2}>Sent</label>
                            <label for="completed2" className={style.completed2}>Completed</label>
                            <label for="cancel2" className={style.cancel2}>Cancel</label>
                            <div className={style.slider}></div>
                        </div>
                        <div className={style.horizontal}></div>

                        <div className={style.section}>
                            <div className={style.content1}>
                                <div className={style.title}></div>
                            </div>
                            <div className={style.content2}>
                                <div className={style.title}></div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

        )
}
}
export default Rightside3