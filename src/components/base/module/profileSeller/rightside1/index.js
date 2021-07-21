import React, { Component } from 'react'
import style from './rightside.module.css'
import avabig from '../../../../../Assets/avabig.png'


export class Rightside1 extends Component {

    render() {
      return (

<div className={style.rightside}>
                <div className={style.rightbox}>
                    <div className={style.title}>
                        <h2>My Profile</h2>
                        <h3>Manage your profile information</h3>
                    </div>
                    <div className={style.horizontal}></div>
                    <div className={style.body}>
                        <div className={style.leftbody}>
                            <form action="">
                                <div className={style.name}>
                                    <label for="name">Name</label>
                                    <input type="text" placeholder="Johannes Mikael" id="name"/>
                                </div>
                                <div className={style.email}>
                                    <label for="email">Email</label>
                                    <input type="text" placeholder="johannes@gmail.com" id="email"/>
                                </div>
                                <div className={style.phone}>
                                    <label for="phone">Phone Number</label>
                                    <input type="text" placeholder="08901289012" id="phone"/>
                                </div>
                                <div className={style.description}>
                                    <label for="description">Store Description</label>
                                    <input type="text" placeholder="" id="description"/>
                                </div>


                            </form>
                            <button className={style.save}>Save</button>
                        </div>
                        <div className={style.vertical}></div>
                        <div className={style.rightbody}>
                            <img src={avabig} alt=""/>
                            <button>Select Image</button>
                        </div>
                    </div>
                </div>
            </div>

      ) 
    }
}

export default Rightside1