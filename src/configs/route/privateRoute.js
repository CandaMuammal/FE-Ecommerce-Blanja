import React from 'react'
import {Route, Redirect} from 'react-router-dom'
// import Navbar from '../../../components/module/Navbar'
const PrivateRoute = ({ component: Component, ...rest}) => {
  const isAuth = localStorage.getItem('token')
  const isRole = localStorage.getItem('role')
  return (
    <Route {...rest} render={(props)=>{
      return(
      isAuth && isRole ? (<Component {...props}/> ) : <Redirect to="/login" />
      )
    }}/>
  )
}

export default PrivateRoute