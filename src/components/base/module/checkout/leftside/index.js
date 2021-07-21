import React, { Component } from 'react'
import style from './leftside.module.css'
import checkout1 from '../../../../../Assets/checkout1.png'
import checkout2 from '../../../../../Assets/checkout2.png'


export class Leftside extends Component {

  render() {
    return (

<div className={style["left-side"]}>
    <h1>Checkout</h1>
    <h4>Shipping Address</h4>
    <div className={style.leftbox1}>
        <h4>Andreas Jane</h4>
        <p>Perumahan Sapphire Mediterania, Wiradadi, Kec. Sokaraja, Kabupaten Banyumas, Jawa Tengah,
            53181 [Tokopedia Note: blok c 16] Sokaraja, Kab. Banyumas, 53181</p>
        <button className={style["modal-open"]}><a href="#modaladd">Choose new address</a></button>

        <div className={style.modal} id="modaladd">
            <div className={style["modal-content"]}>
                <div className={style["modal-heading"]}>
                    <a href="" className={style["modal-close"]}>&times;</a>
                </div>
                <div className={style["modal-body"]}>
                    <h2>Choose another address</h2>
                    <div className={style.add}>
                        <h3><a href="#modal2" className={style["modal2-open"]}>Add new address</a></h3>
                    </div>

                    <div className={style["current-address"]}>
                        <h4>Andreas Jane</h4>
                        <p>Perumahan Sapphire Mediterania, Wiradadi, Kec. Sokaraja, Kabupaten Banyumas,
                            Jawa Tengah, 53181 [Tokopedia Note: blok c 16] Sokaraja, Kab. Banyumas,
                            53181</p>
                        <h5><a href="">Change address</a></h5>
                    </div>
                </div>
            </div>
        </div>

        <div className={style.modal2} id="modal2">
            <div className={style["modal2-content"]}>
                <div className={style["modal2-heading"]}>
                    <a href="#modal" className={style["modal2-close"]}>&times;</a>
                </div>
                <div className={style["modal2-body"]}>
                    <div className={style["body-title"]}>
                        <h2>Add new address</h2>
                    </div>
                    <div className={style["body-content"]}>
                        <div className={style.content1}>
                            <h5>Save address as (ex. home address, office address)</h5>
                            <input type="text" placeholder="Home, Office" />
                        </div>
                        <div className={style["mid-content"]}>
                            <div className={style.content2}>
                                <h5>Recipient' name</h5>
                                <input type="text" placeholder="Name" />
                                <h5>Address</h5>
                                <input type="text" placeholder="Address" />
                                <h5>District or subdistrict</h5>
                                <input type="text" placeholder="District" />
                                <div className={style.check}>
                                    <input type="checkbox" name="" id="" />
                                    <h5>Make it primary address</h5>
                                </div>
                            </div>
                            <div className={style.content3}>
                                <h5>Recipient's phone number</h5>
                                <input type="text" placeholder="Phone" />
                                <h5>Postal code</h5>
                                <input type="text" placeholder="Postal code" />
                                <div className={style["save-button"]}>
                                    <button className={style.cancel}><a href="#modal2">Cancel</a></button>
                                    <button className={style.save}><a href="#modal">Save</a></button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div className={style.leftbox2}>
        <div className={style.picture}>
            <img src={checkout1} alt="" />
        </div>
        <div className={style.product}>
            <h5>Men's Formal Suit - Black</h5>
            <h6>Zalora Cloth</h6>
        </div>
        <div className={style.price}>
            <h3>$20.00</h3>
        </div>
    </div>
    <div className={style.leftbox3}>
        <div className={style.picture}>
            <img src={checkout2} alt="" />
        </div>
        <div className={style.product}>
            <h5>Men's Jacket Jeans</h5>
            <h6>Zalora Cloth</h6>
        </div>
        <div className={style.price}>
            <h3>$20.00</h3>
        </div>
    </div>
</div>

)
  }
}

export default Leftside