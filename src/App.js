// import React, {Component, Fragment} from 'react'
// import Input from './components/base/input'
// import Button from './components/base/button'

// class App extends Component{
//   constructor(props){
//     super(props)
//     console.log('ini method costructor');
//     this.state={
//       name: 'risano',
//       umur: 17,
//       password: 'hello'
//     }
//   }
//   // state = {
//   //   name: 'risano'
//   // }
//   componentDidMount(){
//     console.log('ini method compoenntDIdMount');
//   }
//   componentDidUpdate(){
//     console.log('ini method componentDidUpdate');
//   }
//   componentWillUnmount(){
//     console.log('ini method componentWillUnmount');
//   }

//   ubahNama(){
//    this.setState({
//      name: 'akbar'
//     //  umur: 20
//    })
//   }
//   handleChangeName(e){

//     console.log(e);
//     // const nameKey = 'age'
//     // const object = {
//     //   [nameKey]: 12
//     // }
//     this.setState({
//       [e.target.name]: e.target.value
//     })
//   }
//   handleClick(price){
//     alert(price)
//   }

//   render(){
//     console.log('ini method render');
//     return(
//       <>
//         <h1>hello world menggunakan class {this.state.name} dan {this.state.umur}</h1>
//         <button onClick={()=>this.ubahNama()}>ubah nama</button>

//         <input type="text" name="name" onChange={(event)=>this.handleChangeName(event)} />
//         <Input
//           label="username"
//           placeHolder="silakan isikan username"
//           name="name"
//           type="text"
//           value={this.state.name}
//           onMyChange={(e) => this.handleChangeName(e)}
//         />
//         <Input
//         label="password"
//         placeHolder="*******"
//         name="password"
//         type="password"
//         value={this.state.password}
//         // onMyChange={(e)=>this.setState({})} 

//         />

//         <Button title="kirim bro" onMyClick={(e)=>this.handleClick(e)}/>
//       </>
//     )
//   }

// }
// export default App

// import React, { useState } from 'react'

// const data = [
//   {
//     message: 'cari makan',
//     id: 1
//   },
//   {
//     message: 'belajar react',
//     id: 2
//   },
//   {
//     message: 'tidur',
//     id: 3
//   }
// ]

// const Header = () => {
//   return <h1>Aplikasi Taskku</h1>
// }

// const InfoBar = ({ taskNumber }) => {
//   return <div>Ada {taskNumber} yang perlu dikerjakan </div>
// }

// const TaskAdder = ({setTasks, tasks}) => {
//   const [currentValue, setCurrentValue] = useState('')

//   const handleAddTask  = () => {
//     const newTask = {
//       id: tasks.length + 1,
//       message: currentValue
//     }
//     setTasks([...tasks, newTask])
//     setCurrentValue('')
      
//   }
//   return <div>
//     <input type="text" value={currentValue} onChange={event => setCurrentValue(event.target.value)}/>
//     <button disabled={currentValue===''} onClick={() => handleAddTask()}>Tambah</button>
//   </div>
// }

// const Task = ({message, id, setTasks, tasks}) => {

//   const handleDelete = () => {
//     const updatedTasks = tasks.filter(task => task.id !== id)
//     setTasks(updatedTasks)
//   }
//   return <div>
//     <div>{message}</div>
//     <button onClick={() => handleDelete()}>Delete</button>
//   </div>
// }

// const TaskList = ({tasks, setTasks}) => {
//   return tasks.map(task => {
//     return <Task message={task.message} id={task.id} setTasks={setTasks} tasks={tasks}/>
//   })
// }

// const TaskApp = () => {
//   const [tasks, setTasks] = useState(data)
//   return <>
//     <Header />
//     <InfoBar taskNumber={tasks.length} />
//     <TaskAdder setTasks={setTasks} tasks={tasks}/>
//     <TaskList tasks={tasks} setTasks={setTasks}/>
//   </> 
// }


// const App = () => {
//   return <TaskApp />
// }

// export default App

import React from 'react';
import Login from './Pages/Auth/Customer/Login/index'
import Signup from './Pages/Auth/Customer/Signup/index'
import ResetPassword from './Pages/Auth/Customer/ResetPassword/index'
import ConfirmPassword from './Pages/Auth/Customer/ConfirmPassword/index'
import ConfirmReset from './Pages/Auth/Customer/ConfirmReset/index'
import LoginSeller from './Pages/Auth/Seller/Login'
import SignupSeller from './Pages/Auth/Seller/Signup'
import Home from './Pages/Main/Home';
import Product from './Pages/Main/Product';
import Search from './Pages/Main/Search';
import Tshirt from './Pages/Main/Tshirt';
import Cap from './Pages/Main/Cap';
import Pants from './Pages/Main/Pants';
import Glasses from './Pages/Main/Glasses';
import Jacket from './Pages/Main/Jacket';
import Shoes from './Pages/Main/Shoes';
// import style from './Pages/Auth/Customer/Login/'
import {BrowserRouter, Link, Route, Switch} from 'react-router-dom'
import PrivateRoute from './configs/route/privateRoute';
import PublicRoute from './configs/route/publicRoute';
import SellerRoute from './configs/route/sellerRoute';
import CustomerRoute from './configs/route/customerRoute';
import Checkout from './Pages/Main/Checkout';
import Mybag from './Pages/Main/Mybag';
import ProfileCust1 from './Pages/Profile/ProfileCustomer/Profile1';
import ProfileCust2 from './Pages/Profile/ProfileCustomer/Profile2';
import ProfileCust3 from './Pages/Profile/ProfileCustomer/Profile3';
import ProfileSeller1 from './Pages/Profile/ProfileSeller/Profile1';
import ProfileSeller2 from './Pages/Profile/ProfileSeller/Profile2';
import ProfileSeller3 from './Pages/Profile/ProfileSeller/Profile3';
import ProfileSeller4 from './Pages/Profile/ProfileSeller/Profile4';
import ScrollToTop from './scroll'

const App = () => {
  return(
    <BrowserRouter>
<ScrollToTop/>
      <Switch>
        <PublicRoute path="/login" component={Login} />
        <PublicRoute path="/signup" component={Signup} />
        <PublicRoute path="/resetpassword" component={ResetPassword} />
        <PublicRoute path="/confirmpassword" component={ConfirmPassword} />
        <PublicRoute path="/confirmreset" component={ConfirmReset} />
        <PublicRoute path="/loginseller" component={LoginSeller} />
        <PublicRoute path="/signupseller" component={SignupSeller} />
        <PrivateRoute path="/home" component={Home} />
        {/* <PrivateRoute path="/" component={Home} /> */}
        <PrivateRoute path="/product/:id" component={Product} />
        <PrivateRoute path="/search" component={Search} />
        <PrivateRoute path="/tshirt" component={Tshirt} />
        <PrivateRoute path="/cap" component={Cap} />
        <PrivateRoute path="/shoes" component={Shoes} />
        <PrivateRoute path="/pants" component={Pants} />
        <PrivateRoute path="/glasses" component={Glasses} />
        <PrivateRoute path="/jacket" component={Jacket} />
        <PrivateRoute path="/checkout" component={Checkout} />
        <PrivateRoute path="/mybag" component={Mybag} />
        <CustomerRoute path="/profilecustomer1" component={ProfileCust1} />
        {/* <CustomerRoute path="/profilecustomer2" component={ProfileCust2} /> */}
        <CustomerRoute path="/profilecustomer3" component={ProfileCust3} />
        <SellerRoute path="/profileseller1" component={ProfileSeller1} />
        <SellerRoute path="/profileseller2" component={ProfileSeller2} />
        <Route path="/profileseller3" component={ProfileSeller3} />
        <SellerRoute path="/profileseller4" component={ProfileSeller4} />
      </Switch>
{/* </ScrollToTop> */}

    </BrowserRouter>
  )
}

export default App
