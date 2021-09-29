import React, { Component } from 'react'
import style from './rightside2.module.css'
import avabig from '../../../../../Assets/avabig.png'



export class Rightside2 extends Component {

    render() {
        return (

            <div class={style.rightside}>
                <div class={style.rightbox}>
                    <div class={style.title}>
                        <h4> My Profile</h4>
                        <h5>Manage your profile information</h5>
                    </div>
                    <div class={style.horizontal}></div>
                    <div class={style.body}>
                        <div class={style.add}>
                            <h3><a href="#modal2" class={style["modal2-open"]}>Add new address</a></h3>
                        </div>
                        <div class={style["current-address"]}>
                            <h4>Andreas Jane</h4>
                            <p>Perumahan Sapphire Mediterania, Wiradadi, Kec. Sokaraja, Kabupaten Banyumas,
                                Jawa Tengah, 53181 [Tokopedia Note: blok c 16] Sokaraja, Kab. Banyumas,
                                53181</p>
                            <h4><a href="">Change address</a></h4>
                        </div>
                        <div class={style.modal2} id="modal2">
                            <div class={style["modal2-content"]}>
                                <div class={style["modal2-heading"]}>
                                    <a href="#" class={style["modal2-close"]}>&times;</a>
                                </div>
                                <div class={style["modal2-body"]}>
                                    <div class={style["body-title"]}>
                                        <h4>Add new address</h4>
                                    </div>
                                    <div class={style["body-content"]}>
                                        <div class={style.content1}>
                                            <h5>Save address as (ex. home address, office address)</h5>
                                            <input type="text" placeholder="Home, Office" />
                                        </div>
                                        <div class={style["mid-content"]}>
                                            <div class={style.content2}>
                                                <h5>Recipient' name</h5>
                                                <input type="text" placeholder="Name" />
                                                <h5>Address</h5>
                                                <input type="text" placeholder="Address" />
                                                <h5>District or subdistrict</h5>
                                                <input type="text" placeholder="District" />
                                                <div class={style.check}>
                                                    <input type="checkbox" name="" id="" />
                                                    <h5>Make it primary address</h5>
                                                </div>
                                            </div>
                                            <div class={style.content3}>
                                                <h5>Recipient's phone number</h5>
                                                <input type="text" placeholder="Phone" />
                                                <h5>Postal code</h5>
                                                <input type="text" placeholder="Postal code" />
                                                <div class={style["save-button"]}>
                                                    <button class={style.cancel}><a href="">Cancel</a></button>
                                                    <button class={style.save}><a href="">Save</a></button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Rightside2