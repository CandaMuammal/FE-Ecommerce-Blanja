import React, { Component } from 'react'
import style from './home.module.css'
import Navbar from '../../../components/base/module/navbar'
import Cards from '../../../components/base/card'
import Carousels from '../../../components/base/carousel'
import axios from 'axios'
import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getProduct as listProduct } from '../../../configs/redux/actions/productAction'



// export default class Home extends Component {
//     constructor(props) {
//         super(props)

//         this.state = {
//             product: []
//         }
//     }

//     componentDidMount() {
//         axios.get('http://localhost:4000/v1/product/')
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
//             <div>
//                 <Navbar />
//                 <div className={style.container}>
//                     <div className={style["main-wrap"]}>
//                         <Carousels/>
//                         <div className={style["title-wrap"]}>
//                             <div className={style["title-new"]}>
//                                 <h2>New</h2>
//                                 <h5>You've never seen it before</h5>
//                             </div>
//                         </div>
//                         <div className={style.cardwrapper}>
//                             {product && product.map((products) => (
//                                 <Cards
//                                     key={products.id}
//                                     products={products}
//                                 />
//                             ))}
//                         </div>
//                         <div className={style["title-wrap"]}>
//                             <div className={style["title-popular"]}>
//                                 <h2>Popular</h2>
//                                 <h5>Find cloth that are trending recently</h5>
//                             </div>
//                         </div>
//                         <div className={style.cardwrapper}>
//                             {product && product.map((products) => (
//                                 <Cards
//                                     key={products.id}
//                                     products={products}
//                                 />
//                             ))}
//                         </div>
//                     </div>
//                 </div>
//             </div>

//         )
//     }
// }


const Home = () => {

    const dispatch = useDispatch()

    const {products, loading, error} = useSelector(state => state.product)
    // const { product, loading, error } = getProduct

    useEffect(() => {
        dispatch(listProduct())
    }, [dispatch])

    console.log(products)

    return (
        <div>
            <Navbar />
            <div className={style.container}>
                <div className={style["main-wrap"]}>
                    <Carousels />
                    <div className={style["title-wrap"]}>
                        <div className={style["title-new"]}>
                            <h2>New</h2>
                            <h5>You've never seen it before</h5>
                        </div>
                    </div>
                    <div className={style.cardwrapper}>
                    {loading && <h1>Loadingg... bro....</h1>}
                        {products.map(product => (
                            <Cards
                                key={product.id}
                                id={product.id}
                                name={product.name}
                                price={product.price}
                                image={product.image}
                            />
                        ))}
                    </div>
                    <div className={style["title-wrap"]}>
                        <div className={style["title-popular"]}>
                            <h2>Popular</h2>
                            <h5>Find cloth that are trending recently</h5>
                        </div>
                    </div>
                    <div className={style.cardwrapper}>
                    {products.map(product => (
                            <Cards
                                key={product.id}
                                id={product.id}
                                name={product.name}
                                price={product.price}
                                image={product.image}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Home