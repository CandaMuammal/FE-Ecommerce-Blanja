import React, { Component } from 'react'
import style from './rightside.module.css'
import gopay from '../../../../../Assets/gopay.png'
import mastercard from '../../../../../Assets/mastercard.png'
import pos from '../../../../../Assets/pos.png'
import { useSelector } from 'react-redux'



const Rightside = (props) => {


    console.log(props.totalPrice) 
    const cart = useSelector(state => state.cart)
    const { cartItem } = cart

    
        return (

            <div className={style["right-side"]}>
                <div className={style.rightbox}>
                    <h4>Shopping summary</h4>
                    <div className={style.order} >
                        <h6>Order</h6>
                        <h5>&nbsp;&nbsp;&nbsp;{props.totalPrice}</h5>
                    </div>
                    <div className={style.delivery}>
                        <h6>Delivery</h6>
                        <h5>50000</h5>
                    </div>
                    <hr />
                    <div className={style["shopping-summary"]}>
                        <h6>Shopping summary</h6>
                        <h5>{props.totalPrice + 50000}</h5>
                    </div>
                    <button className={style["payment-open"]}><a href="#payment">Select payment</a></button>

                    <div className={style["modal-payment"]}>
                        <div className={style.payment} id="payment">
                            <div className={style["payment-content"]}>
                                <div className={style["payment-heading"]}>
                                    <h2>Payment</h2>
                                    <a href="" className={style["payment-close"]}>&times;</a>
                                </div>
                                <div className={style["payment-body"]}>
                                    <div className={style.method}>
                                        <h4>Payment methods</h4>
                                        <div className={style.gopay}>
                                            <div className={style.logo}> <img src={gopay} alt="" /></div>
                                            <div className={style.title}>Gopay</div>
                                            <input type="checkbox" name="gopay" id="checkbox" />

                                        </div>
                                        <div className={style.pos}>
                                            <div className={style.logo}><img src={pos} alt="" /></div>
                                            <div className={style.title}>Pos Indonesia</div>
                                            <input type="checkbox" name="pos" id="" />

                                        </div>
                                        <div className={style.mastercard}>
                                            <div className={style.logo}> <img src={mastercard} alt="" /></div>
                                            <div className={style.title}>Mastercard</div>
                                            <input type="checkbox" name="mastercard" id="" />

                                        </div>
                                    </div>

                                    <div className={style.summary}>
                                        <h6>Shopping summary </h6>
                                        <div className={style.order}>
                                            <h6>Order</h6>
                                            <h5>&nbsp;{props.totalPrice}</h5>
                                        </div>
                                        <div className={style.delivery}>
                                            <h6>Delivery</h6>
                                            <h5>50000</h5>
                                        </div>
                                    </div>



                                </div>
                                <div className={style["payment-footer"]}>
                                    <div className={style["payment-summary"]}>
                                        <h6>Shopping summary <br /><br /><span>{props.totalPrice + 50000}</span></h6>

                                    </div>
                                    <div className={style.buy}>
                                        <button onClick={props.onClick}>Buy</button>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }


export default Rightside
{/* <div className="modal-payment">
                            
                            <div className="payment" id="payment">
                                <div className="payment-content">
                                    <div className="payment-heading">
                                        <h2>Payment</h2>
                                        <a href="" className="payment-close">&times;</a>
                                    </div>
                                    <div className="payment-body">
                                        <div className="method">
                                            <h4>Payment methods</h4>
                                            <div className="gopay">
                                                <div className="logo"> <img src="../Assets/gopay.png" alt=""></div>
                                                <div className="title">Gopay</div>
                                                <input type="checkbox" name="gopay" id="checkbox">

                                            </div>
                                            <div className="pos">
                                                <div className="logo"><img src="../Assets/pos.png" alt=""></div>
                                                <div className="title">Pos Indonesia</div>
                                                <input type="checkbox" name="pos" id="">

                                            </div>
                                            <div className="mastercard">
                                                <div className="logo"> <img src="../Assets/mastercard.png" alt=""></div>
                                                <div className="title">Mastercard</div>
                                                <input type="checkbox" name="mastercard" id="">

                                            </div>
                                        </div>

                                        <div className="summary">
                                            <h4>Shopping summary </h4>
                                            <div className="order">
                                                <h4>Order</h4>
                                                <h3>&nbsp;$40.00</h3>
                                            </div>
                                            <div className="delivery">
                                                <h4>Delivery</h4>
                                                <h3>$5.00</h3>
                                            </div>
                                        </div>



                                    </div>
                                    <div className="payment-footer">
                                        <div className="payment-summary">
                                            <h4>Shopping summary <br><br><span>$45.00</span></h4>

                                        </div>
                                        <div className="buy">
                                            <button>Buy</button>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div> */}

