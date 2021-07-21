import React, { Component } from 'react'
import style from './login.module.css'

export class ButtonLogin extends Component {
  
  render() {
    return (
      <div>
        <button className={style['button-login']}>Login</button>

      </div>
    )
  }
}

export default ButtonLogin