import React, { Component } from 'react'
import style from './rightside1.module.css'
import avabig from '../../../../../Assets/avabig.png'



export class Rightside1 extends Component {

    render() {
        return (

            <div className={style.rightside}>
                <div className={style.rightbox}>
                    <div className={style.title}>
                        <h4>My Profile</h4>
                        <h5>Manage your profile information</h5>
                    </div>
                    <div className={style.horizontal}></div>
                    <div className={style.body}>
                        <div className={style.leftbody}>
                            <form action="">
                                <div className={style.name}>
                                    <label for="name">Name</label>
                                    <input type="text" placeholder="Johannes Mikael" id="name" />
                                </div>
                                <div className={style.email}>
                                    <label for="email">Email</label>
                                    <input type="text" placeholder="johannes@gmail.com" id="email" />
                                </div>
                                <div className={style.phone}>
                                    <label for="phone">Phone Number</label>
                                    <input type="text" placeholder="08901289012" id="phone" />
                                </div>
                                <div className={style.gender}>
                                    <label for="gender">Gender</label>
                                    <input type="radio" name="gender" value="Man" />Man &emsp;&emsp;
                                    <input type="radio" name="gender" value="Woman" />Woman
                                </div>
                                <div className={style["date-birth"]}>
                                    <label for="date-birth">Date of Birth</label>
                                    <select name="date" id="date">
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                        <option value="4">4</option>
                                        <option value="5">5</option>
                                    </select>
                                    <select name="month" id="month">
                                        <option value="1">January</option>
                                        <option value="2">February</option>
                                        <option value="3">March</option>
                                        <option value="4">April</option>
                                        <option value="5">May</option>
                                    </select>
                                    <select name="year" id="year">
                                        <option value="1">1996</option>
                                        <option value="2">1997</option>
                                        <option value="3">1998</option>
                                        <option value="4">1999</option>
                                        <option value="5">2000</option>
                                    </select>
                                </div>
                            </form>
                            <button className={style.save}>Save</button>
                        </div>
                        <div className={style.vertical}></div>
                        <div className={style.rightbody}>
                            <img src={avabig} alt="" />
                            <button>Select Image</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Rightside1