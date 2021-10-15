import React, { useState } from 'react'
import style from './navbar.module.css'
import logo from '../../../../Assets/blanja-icon.png'
import search from '../../../../Assets//search-logo.png'
import filter from '../../../../Assets/filter-logo.png'
import cart from '../../../../Assets/cart-logo.png'
import notif from '../../../../Assets/notif-logo.png'
import mail from '../../../../Assets/mail-logo.png'
import ava from '../../../../Assets/ava.png'
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router'


const Navbar = () => {

  const isRole = localStorage.getItem('role')
  // const avatar = localStorage.getItem('image')
  const user = useSelector(state => state.rootReducer.user.profile)
    const history = useHistory()
    const dispatch = useDispatch()

        // const username = user.username
        const avatar = user.image


  return (

    <div className={style.nav}>
      <div className={style["nav-wrap"]}>
        <div className={style.logo}>
          <Link to="/home"><img src={logo} alt="" /></Link>
        </div>
        <div className={style["menu-wrap"]}>
          <div className={style["searchbar"]}>
            {/* <input type="text" placeholder="Search" disabled="true"/> */}
            <div className={style.searchimg}>
              <Link to="/search"><button><img src={search} alt="" /></button></Link>
            </div>
          </div>
          <div className={style.filter}>
            <button><a href="#modal"><img src={filter} alt="" /></a></button>
            <div className={style.modal} id="modal">
              <div className={style["modal-content"]}>
                <div className={style["modal-heading"]}>
                  <a href="" className={style["modal-close"]}>&times;</a>
                  <h3>Filter</h3>
                </div>
                <div className={style["modal-body"]}>
                  <div className={style.color}>
                    <div className={style.title}>
                      <h3>Color</h3>
                    </div>
                    <div className={style.circle}>
                      <div className={style.black}></div>
                      <div className={style.red}></div>
                      <div className={style.white}></div>
                      <div className={style.brown}></div>
                      <div className={style.gold}></div>
                      <div className={style.navy}></div>
                    </div>
                  </div>
                  <div className={style.size}>
                    <div className={style.title}>
                      <h3>Sizes</h3>
                    </div>
                    <div className={style.sizes}>
                      <div className={style.XS}>XS</div>
                      <div className={style.S}>S</div>
                      <div className={style.M}>M</div>
                      <div className={style.L}>L</div>
                      <div className={style.XL}>XL</div>
                    </div>
                  </div>
                  <div className={style.category}>
                    <div className={style.title}>
                      <h3>Category</h3>
                    </div>
                    <div className={style.gender}>
                      <div className={style.all}>All</div>
                      <div className={style.man}>Man</div>
                      <div className={style.woman}>Woman</div>
                      <div className={style.boy}>Boy</div>
                      <div className={style.girl}>Girl</div>
                    </div>
                  </div>
                  <div className={style.brand}>
                    <div className={style.title}>
                      {/* <h3>Brand</h3>
                                        <h5>adidas original, jack & jones, s. olivier</h5> */}
                      <select>
                        <option value="">Adidas Original</option>
                        <option value="">Jack & Jones</option>
                        <option value="">S. Olivier</option>
                      </select>
                    </div>
                    <div className={style.arrow}><img src="./Assets/dropdown.png" alt="" /></div>
                  </div>

                </div>
                <div className={style["modal-footer"]}>
                  <button className={style.discard}>Discard</button>
                  <button className={style.apply}>Apply</button>

                </div>
              </div>
            </div>
          </div>
          <div className={style.icons}>
            <Link to="./mybag"><img src={cart} alt="" /></Link>
            <Link to=""><img src={notif} alt="" /></Link>
            <Link to=""><img src={mail} alt="" /></Link>
            {isRole === "1" ?
              <Link to="./profileseller1"><img className={style.ava} src={avatar} alt="" /></Link>
              : <Link to="./profilecustomer1"><img className={style.ava} src={avatar} alt="" /></Link>
            }
          </div>
        </div>
        <div className={style["hamburger-menu"]}>
          <input type="checkbox" name="" className={style["toggle-menu"]} id="toggle-menu" />
          <div className={style["hamburger"]}></div>
        </div>
      </div>
    </div>
  )
}

export default Navbar




