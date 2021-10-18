import React, { Component } from 'react'
import style from './leftside.module.css'
import checkout1 from '../../../../../Assets/checkout1.png'
import checkout2 from '../../../../../Assets/checkout2.png'
import plus from '../../../../../Assets/plus.png'
import minus from '../../../../../Assets/minus.png'


const Leftside = ({id, qtyy, name, price, image, description}) => {
    const total = price * qtyy
    return ( 
        <div className={style.leftside}>

                    {/* <h1>My bag</h1> */}
                    {/* <div className={style.leftbox1}>
                        <div className={style.check}>
                            <input type="checkbox" name="" id=""/>
                        </div>
                        <div className={style.items}>
                            <h6>Select all items</h6>
                            <h6 className="selected">(2 items selected)</h6>
                        </div>
                        <div className={style.delete}>
                            <h6><a href="../Home/home.html">Delete</a> </h6>
                        </div>
                    </div> */}
                    <div className={style.leftbox2}>
                        <div className={style.check}>
                            <input type="checkbox" name="" id=""/>
                        </div>
                        <div className={style.picture}>
                            <img src={image} alt=""/>
                        </div>
                        <div className={style.product}>
                            <h7>{name}</h7>
                            <h8>{description}</h8>
                        </div>
                        <div className={style.quantity}>
                            {/* <button className={style.minus}>
                                <img src={minus} alt=""/>
                            </button> */}
                            <h4> Qty: {qtyy}</h4>
                            {/* <button className={style.plus}>
                                <img src={plus} alt=""/>
                            </button> */}
                        </div>
                        <div className={style.price}>
                            <h4>{total}</h4>
                        </div>
                    </div>
                    {/* <div className={style.leftbox3}>
                        <div className={style.check}>
                            <input type="checkbox" name="" id=""/>
                        </div>
                        <div className={style.picture}>
                            <img src={checkout2} alt=""/>
                        </div>
                        <div className={style.product}>
                            <h7>Men's Jacket Jeans</h7>
                            <h8>Zalora Cloth</h8>
                        </div>
                        <div className={style.quantity}>
                            <button className={style.minus}>
                                <img src={minus} alt=""/>
                            </button>
                            <h4>1</h4>
                            <button className={style.plus}>
                                <img src={plus} alt=""/>
                            </button>
                        </div>
                        <div className={style.price}>
                            <h4>$20.00</h4>
                        </div>
                    </div> */}
                </div>
)
  }

export default Leftside