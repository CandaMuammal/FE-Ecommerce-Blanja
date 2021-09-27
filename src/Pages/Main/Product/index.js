import React, { Component } from 'react'
import style from './product.module.css'
import Navbar from '../../../components/base/module/navbar'
import ProductBody from '../../../components/base/module/productBody'
import Cards from '../../../components/base/card'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getProduct as listProduct } from '../../../configs/redux/actions/productAction'
import { getProductDetail } from '../../../configs/redux/actions/productAction'
import { addToCart } from '../../../configs/redux/actions/cartActions'

// export default class Product extends Component {
//     constructor(props) {
//         super(props)

//         this.state = {
//             product: []
//         }
//     }

//     componentDidMount() {
//         axios.get('http://localhost:4000/product/')
//             .then(res => {
//                 const product = res.data.data
//                 this.setState({ product })
//             })
//             .catch(error => {
//                 console.log(error)
//             })
//     }

//     render() {
//         // console.log(this.state.product)
//         const { product } = this.state
//         return (
//             <>
//                 <Navbar />
//                 <div className={style.main}>
//                     <div className={style["main-wrap"]}>
//                         <div className={style["main-container"]}>
//                             <ProductBody />
//                             <div className={style["card-wrap"]}>
//                                 <h2>You can also like this</h2>
//                                 <h5>You've never seen
//  it before</h5>
//                                 <div className={style.cardwrapper}>
//                                     {product && product.map((products) => (
//                                         <Cards
//                                             key={products.id}
//                                             products={products}
//                                         />
//                                     ))}
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </>
//         )
//     }
// }

const Product = ({ match}) => {

    // const [qty, setQty] = useState(1)
    // const getProduct = useSelector(state => state.getProduct)
    // const { product } = getProduct

    // useEffect(() => {
    //     dispatch(listProduct())
    // })

    const dispatch = useDispatch()

    const {productDetails, error, loading} = useSelector(state => state.product)

    // const { loading, error, product } = productDetail

    useEffect(() => {
            dispatch(getProductDetail(match.params.id))
        
    }, [dispatch, match])

    


//     const productName = product.map(item => {
//         const name = item.name
//         console.log(item)
//         return name
//     })

//     const productId = product.map(item => {
//         const id = item.id
//         return id
//     })

//     const productImage = product.map(item => {
//         const image = item.image
//         return image
//     })

//     const productDescription = product.map(item => {
//         const description = item.description
//        return description
//   })
//   const productPrice = product.map(item => {
//     const price = item.price
//    return price
// })


    // console.log(productName)
    // console.log(productImage)
    // console.log(productId)
    // console.log(productDescription)

    return (
        <>
            <Navbar />
            <div className={style.main}>
                <div className={style["main-wrap"]}>
                    <div className={style["main-container"]}>

                        <ProductBody
                        key={productDetails.id}
                        id={productDetails.id}
                        name={productDetails.name}
                        price={productDetails.price}
                        image={productDetails.image}
                        description={productDetails.description}
                        />
                        




                    </div>
                </div>
            </div>
        </>
    )
}

export default Product