import React, { Component } from 'react'
import style from './search.module.css'
import Navbar from '../../../components/base/module/navbar'
// import Cards from '../../../components/base/module/productBody'
import Cards from '../../../components/base/card'
import axios from 'axios'



export default class Search extends Component {
    constructor(props) {
        super(props)

        this.state = {
            product: []
        }
    }

    componentDidMount() {
        axios.get(`${process.env.REACT_APP_API_URL}v1/product/`)
            .then(res => {
                const product = res.data.data
                this.setState({ product })
            })
            .catch(error => {
                console.log(error)
            })
    }


    render() {
        // console.log(this.state.product)
        const { product } = this.state

        return (
            <div>
                <Navbar />
                <div className={style.container}>
                    <div className={style["main-wrap"]}>
                        {/* <Carousel /> */}
                        <div className={style["title-wrap"]}>
                            <div className={style["title-new"]}>
                                <h2>Search:</h2>
                                {/* <h5>You've never seen it before</h5> */}
                            </div>
                        </div>
                        <div className={style.cardwrapper}>
                            {product && product.map((products) => (
                                <Cards
                                    key={products.id}
                                    products={products}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}


