import React, { Component } from 'react'
import style from './rightside2.module.css'
import search from '../../../../../Assets/search-logo.png'
// import nothing from '../../../../../Assets/nothing.png'
import axios from 'axios'
import { Table } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getProduct, getProductDetail } from '../../../../../configs/redux/actions/productAction'
import * as actionTypes from '../../../../../configs/redux/constants/productConstant'
import { toast } from 'react-toastify'




// export class Rightside2 extends Component {

//     constructor() {
//         super()
//         this.state = {
//             product: []
//         }
//         this.state.product.map((products) => {
//             return products

//         })
//     }

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

const Rightside2 = ({ match }) => {

    const dispatch = useDispatch()

    // const [product, setProduct] = useState()

    const { products, loading, error } = useSelector(state => state.product)
    // const { product, loading, error } = getProduct


    // setProduct(products)

    useEffect(() => {
        dispatch(getProduct())
    }, [dispatch])

    console.log(products)




    const handleUpdate = ( item ) => {
        // try {
        //     toast('success')
        //     const { data } = axios.get(`${process.env.REACT_APP_API_URL}v1/product/${item}`)
            axios.get(`${process.env.REACT_APP_API_URL}v1/product/${item}`)
            .then((res) => {
                console.log(res)
                dispatch({
                            type: actionTypes.GET_PRODUCT_DETAIL_SUCCESS,
                            payload: res.data.data
                        })
            })
            // console.log(data.data)
        //     dispatch({
        //         type: actionTypes.GET_PRODUCT_DETAIL_SUCCESS,
        //         payload: data.data
        //     })
        // } catch (error) {
        //     console.log(error)
        // }


        // alert('success')
        // console.log(res)
        // const dataProduct = res.data.data
        // console.log(dataProduct)
        // })
        .catch(() => {
        toast('failed')
        })
    }



    // useEffect(() => {
    //    const  handleUpdate = ({ item }) => async (dispatch) => {
    //         dispatch(getProductDetail(match.params.id))
    //     }, [dispatch, match]})



    // const handleUpdate = ({item}) => {
    //     useEffect(() => {
    //             // handleUpdate = ({item}) => async (dispatch) => {
    //                 dispatch(getProductDetail(match.params.id))
    //             }

    //         }, [dispatch, match])
    // }


    const handleDelete = (item) => {
        // console.log([items.id])

        axios.delete(`${process.env.REACT_APP_API_URL}v1/product/${item}`)
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


    // componentDidMount() {
    //     const url = `${process.env.REACT_APP_API_URL}v1/product/`

    //     axios.get(url)
    //         .then(product => {
    //             console.log(product.data.data)

    //             this.setState({
    //                 product: product.data.data
    //             })


    //         })

    //     // const filteredProduct = this.state.product.filter((i) => {
    //     //     return i.name.toLowerCase().indexOf(search.toLowerCase()) !== -1
    //     // })


    // }


    // removeData = (id)

    // render() {
    return (

        <div className={style.rightside}>
            <div className={style.rightbox}>
                <div className={style["tab-wrap"]}>
                    <div className={style.header}>
                        My Products
                    </div>
                    {/* <input type="radio" name="slider" className={style.radio} id={style.all} checked />
                    <input type="radio" name="slider" className={style.radio} id={style.sold} />
                    <input type="radio" name="slider" className={style.radio} id={style.archieved} />


                    <div className={style["tab-title"]}>
                        <label for="all" className={style.all}>All items</label>
                        <label for="sold" className={style.sold}>Sold</label>
                        <label for="archieved" className={style.archieved}>Archieved</label>

                        <div className={style.slider}></div>
                    </div>
                    <div className={style.horizontal}></div> */}

                </div>
                {/* <div className={style.searchitem}>
                    <input type="text" placeholder="Search" />
                    <img src={search} alt="" />
                </div> */}
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
                            {products.map(item => {
                                return (<tr>

                                    <td>{item.name}
                                    </td>

                                    <td>{item.price}</td>

                                    <td>{item.stock}</td>

                                    <td>
                                        <button onClick={() => handleDelete(item.id)}>Delete</button>
                                        <Link to={`./profileSeller3/${item.id}`}> <button onClick={() => handleUpdate(item.id)}>Update</button> </Link>
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


export default Rightside2