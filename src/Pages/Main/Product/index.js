import React, { Component } from 'react'
import style from './product.module.css'
import Navbar from '../../../components/base/module/navbar'
import ProductBody from '../../../components/base/module/productBody'
import Cards from '../../../components/base/card'
import axios from 'axios'


export default class Product extends Component {
    constructor(props) {
        super(props)

        this.state = {
            product: []
        }
    }

    componentDidMount() {
        axios.get('http://localhost:4000/product/')
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
            <>
                <Navbar />
                <div className={style.main}>
                    <div className={style["main-wrap"]}>
                        <div className={style["main-container"]}>
                            <ProductBody />
                            <div className={style["card-wrap"]}>
                                <h2>You can also like this</h2>
                                <h5>You've never seen it before</h5>
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
                </div>
            </>
        )
    }
}
