import React, { Component } from 'react'
import style from './rightside2.module.css'
import search from '../../../../../Assets/search-logo.png'
// import nothing from '../../../../../Assets/nothing.png'
import axios from 'axios'
import { Table } from 'react-bootstrap'
import {Link} from 'react-router-dom'



export class Rightside2 extends Component {

    constructor() {
        super()
        this.state = {
            product: []
        }
        this.state.product.map((products) => {
            return products

        })
    }

    // handleDelete = (product) => {
    //     this.setState ({
    //         product: product.data.data
    //     },
    //     axios.delete(`${process.env.REACT_APP_API_URL}product/${product.id}`)
    //     .then(() => {
    //         alert('success')
    //     })
    //     )
       
    // }

    handleUpdate = (product) => {
        axios.get(`${process.env.REACT_APP_API_URL}v1/product/${product}`)
        .then((res) => {
            alert('success')
            console.log(res)
            const dataProduct = res.data.data
            localStorage.setItem('name', dataProduct.name)
            localStorage.setItem('price', dataProduct.price)
            localStorage.setItem('stock', dataProduct.stock)
            localStorage.setItem('color', dataProduct.color)
            localStorage.setItem('size', dataProduct.size)
            localStorage.setItem('idCategory', dataProduct.idCategory)
            localStorage.setItem('category', dataProduct.category)
            localStorage.setItem('imagee', dataProduct.image)
            localStorage.setItem('description', dataProduct.description)
            localStorage.setItem('id', dataProduct.id)
        })
        .catch(() => {
            alert('delete failed')
        })

    }

    handleDelete = (product) =>{
        // console.log([products.id])

        axios.delete(`${process.env.REACT_APP_API_URL}v1/product/${product}`)
        .then(() => {
            alert('success')
        })
        .catch(() => {
            alert('delete failed')
        })

    }


    // handleDelete = (id) =>{
    //     axios.delete(`${process.env.REACT_APP_API_URL}product/${id}`)
    //     .then(() => {
    //         alert('success')
    //     })
    // }
    

    componentDidMount() {
        const url = `${process.env.REACT_APP_API_URL}v1/product/`

        axios.get(url)
            .then(product => {
                console.log(product.data.data)

                this.setState({
                    product: product.data.data
                })


            })
            
        // const filteredProduct = this.state.product.filter((i) => {
        //     return i.name.toLowerCase().indexOf(search.toLowerCase()) !== -1
        // })
        
    }

    // removeData = (id)
   
    render() {
        return (

            <div className={style.rightside}>
                <div className={style.rightbox}>
                    <div className={style["tab-wrap"]}>
                        <div className={style.header}>
                            My Products
                        </div>
                        <input type="radio" name="slider" className={style.radio} id={style.all} checked />
                        <input type="radio" name="slider" className={style.radio} id={style.sold} />
                        <input type="radio" name="slider" className={style.radio} id={style.archieved} />


                        <div className={style["tab-title"]}>
                            <label for="all" className={style.all}>All items</label>
                            <label for="sold" className={style.sold}>Sold</label>
                            <label for="archieved" className={style.archieved}>Archieved</label>

                            <div className={style.slider}></div>
                        </div>
                        <div className={style.horizontal}></div>

                    </div>
                    <div className={style.searchitem}>
                        <input type="text" placeholder="Search" />
                        <img src={search} alt="" />
                    </div>
                    <div className={style.body}>
                        {/* <div className={style.bodyhead}>
                            <div className={style.name}>Product name</div>
                            <div className={style.price}>Price</div>
                            <div className={style.stock}>Stock</div>
                        </div> */}



                        <Table striped bordered hover>
                            <thead>
                                <tr>
                                    <th md={4}>Product</th>
                                    <th md={2}>Price</th>
                                    <th md={2}>Stock</th>
                                    <th md={4}>Edit</th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.state.product.map((products) => {
                                    return (<tr>

                                        <td>{products.name}
                                        </td>

                                        <td>{products.price}</td>

                                        <td>{products.stock}</td>

                                        <td>
                                            <button onClick={()=>this.handleDelete(products.id)}>Delete</button>
                                           <Link to={`./profileSeller3/${products.id}`}> <button onClick={()=>this.handleUpdate(products.id)}>Update</button> </Link>
                                        </td>
                                    </tr>)
                                })}

                            </tbody>
                        </Table>

                    </div>


                </div>
            </div>

        )
    }
}

export default Rightside2