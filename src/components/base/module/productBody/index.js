import React, { Component } from 'react'
import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getProduct as listProduct } from '../../../../configs/redux/actions/productAction'
import { getProductDetail } from '../../../../configs/redux/actions/productAction'
import { addToCart } from '../../../../configs/redux/actions/cartActions'
import style from './productbody.module.css'
import shoe1 from '../../../../Assets/shoe1.png'
import shoe2 from '../../../../Assets/shoe2.png'
import shoe3 from '../../../../Assets/shoe3.png'
import shoe4 from '../../../../Assets/shoe4.png'
import plus from '../../../../Assets/plus.png'
import minus from '../../../../Assets/minus.png'
import star from '../../../../Assets/star1.png'
import { useHistory } from 'react-router-dom'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'


toast.configure()

const ProductBody = ({id, name, image, price, description}) => {
const [qty, setQty] = useState(1)

const history = useHistory()

const dispatch = useDispatch()

const addToCartHandle = () => {
    try {
        dispatch(addToCart( {id, qty, name, price, image, description}, history))
        history.push("/mybag");
    } catch {
        toast('cannot add product')
    }
}
    return ( 

        <div className={style.container}>
            <div class={style.container1}>
                <div class={style.left}>
                    <div class={style.box1}>
                        <img src={image} alt="" />
                    </div>
                    
                </div>
                <div class={style.right}>
                    <div class={style.name}>
                        <h2>{name}</h2>
                        {/* <h5>Nike</h5> */}
                    </div>
                    <div class={style.star}>
                        <img src={star} alt="" />
                        <img src={star} alt="" />
                        <img src={star} alt="" />
                        <img src={star} alt="" />
                        <img src={star} alt="" />
                        <h6> (10)</h6>
                    </div>
                    <div class={style.price}>
                        <h5>Price</h5>
                        <h3>Rp{price}</h3>
                    </div>
                    <div class={style.color}>
                        <h5>Color</h5>
                        <div class={style.colorbutton}>
                            <button id={style.black}></button>
                            <button id={style.red}></button>
                            <button id={style.blue}></button>
                            <button id={style.green}></button>
                        </div>
                    </div>
                    <div class={style.sizing}>
                        <div class={style.size}>
                            <h5>Size</h5>
                            <div class={style.plusminus}>
                                {/* <button class={style.minus}><img src={minus} alt="" /></button> */}
                                <h5>L</h5>
                                {/* <button class={style.plus}><img src={plus} alt="" /></button> */}
                            </div>
                        </div>
                        <div class={style.qty}>
                            <h5>Jumlah</h5>
                            <div class={style.plusminus}>
                                {/* <button class={style.minus}><img src={minus} alt="" /></button> */}
                                <h5>1</h5>
                                {/* <button class={style.plus}><img src={plus} alt="" /></button> */}
                            </div>
                        </div>
                    </div>
                    <div class={style.button}>
                        <button id={style.chat}>Chat</button>
                        <button id={style["add-bag"]} onClick={addToCartHandle}>Add bag</button>
                        <button id={style.buy}>Buy now</button>
                    </div>
                </div>
            </div>
            <hr />
            <div class={style.container2}>
                <div className={style.info}>
                <h2>Informasi produk</h2>
                <h5>Condition <br /><br /> <span>New</span></h5>
                <h5>{description}</h5>
                </div>
                <div class={style.container3}>
                <h2>Produk Review</h2>
                <div class={style.review}>
                    <div class={style.total}>
                        <h1>5.0<span>/10</span></h1>
                        <div class={style["total-star"]}>
                            <img src={star} alt="" />
                            <img src={star} alt="" />
                            <img src={star} alt="" />
                            <img src={star} alt="" />
                            <img src={star} alt="" />
                        </div>
                    </div>
                    <div class={style["star-review"]}>
                        <div class={style.star5}>
                            <img src={star} alt="" />
                            <h5>5</h5>
                            <hr />
                            <h5>4</h5>
                        </div>
                        <div class={style.star4}>
                            <img src={star} alt="" />
                            <h5>4</h5>
                            <hr />
                            <h5>0</h5>
                        </div>
                        <div class={style.star3}>
                            <img src={star} alt="" />
                            <h5>3</h5>
                            <hr />
                            <h5>0</h5>
                        </div>
                        <div class={style.star2}>
                            <img src={star} alt="" />
                            <h5>2</h5>
                            <hr />
                            <h5>0</h5>
                        </div>
                        <div class={style.star1}>
                            <img src={star} alt="" />
                            <h5>1 </h5>
                            <hr />
                            <h5>0</h5>
                        </div>
                    </div>
                </div>
            </div>
            </div>

            
        </div>

    )
}


// export class ProductBody extends Component {

//     render() {
//         return (

//             <div className={style.container}>
//                 <div class={style.container1}>
//                     <div class={style.left}>
//                         <div class={style.box1}>
//                             <img src={shoe1} alt="" />
//                         </div>
//                         <div class={style.box2}>
//                             <img src={shoe2} alt="" />
//                         </div>
//                         <div class={style.box3}>
//                             <img src={shoe3} alt="" />
//                         </div>
//                         <div class={style.box4}>
//                             <img src={shoe4} alt="" />
//                         </div>
//                     </div>
//                     <div class={style.right}>
//                         <div class={style.name}>
//                             <h2>Nike CruzrOne (Bright Crimson)</h2>
//                             {/* <h5>Nike</h5> */}
//                         </div>
//                         <div class={style.star}>
//                             <img src={star} alt="" />
//                             <img src={star} alt="" />
//                             <img src={star} alt="" />
//                             <img src={star} alt="" />
//                             <img src={star} alt="" />
//                             <h6> (10)</h6>
//                         </div>
//                         <div class={style.price}>
//                             <h5>Price</h5>
//                             <h3>$20.00</h3>
//                         </div>
//                         <div class={style.color}>
//                             <h5>Color</h5>
//                             <div class={style.colorbutton}>
//                                 <button id={style.black}></button>
//                                 <button id={style.red}></button>
//                                 <button id={style.blue}></button>
//                                 <button id={style.green}></button>
//                             </div>
//                         </div>
//                         <div class={style.sizing}>
//                             <div class={style.size}>
//                                 <h5>Size</h5>
//                                 <div class={style.plusminus}>
//                                     <button class={style.minus}><img src={minus} alt="" /></button>
//                                     <h5>25</h5>
//                                     <button class={style.plus}><img src={plus} alt="" /></button>
//                                 </div>
//                             </div>
//                             <div class={style.qty}>
//                                 <h5>Jumlah</h5>
//                                 <div class={style.plusminus}>
//                                     <button class={style.minus}><img src={minus} alt="" /></button>
//                                     <h5>25</h5>
//                                     <button class={style.plus}><img src={plus} alt="" /></button>
//                                 </div>
//                             </div>
//                         </div>
//                         <div class={style.button}>
//                             <button id={style.chat}>Chat</button>
//                             <button id={style["add-bag"]}>Add bag</button>
//                             <button id={style.buy}>Buy now</button>
//                         </div>
//                     </div>
//                 </div>
//                 <div class={style.container2}>
//                     <h2>Informasi produk</h2>
//                     <h5>Condition <br /><br /> <span>New</span></h5>
//                     <h5>Description</h5>
//                     <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
//                     <p> Donec non magna rutrum, pellentesque augue eu, sagittis velit. Phasellus quis laoreet dolor.
//                         Fusce nec pharetra quam. Interdum et malesuada fames ac ante ipsum primis in faucibus. Praesent
//                         sed enim vel turpis blandit imperdiet ac ac felis. Etiam tincidunt tristique placerat.
//                         Pellentesque a consequat mauris, vel suscipit ipsum.
//                         Donec ac mauris vitae diam commodo vehicula. Donec quam elit, sollicitudin eu nisl at, ornare
//                         suscipit magna.</p>
//                     <p> Donec non magna rutrum, pellentesque augue eu, sagittis velit. Phasellus quis laoreet dolor.
//                         Fusce nec pharetra quam. Interdum et malesuada fames ac ante ipsum primis in faucibus. Praesent
//                         sed enim vel turpis blandit imperdiet ac ac felis.
//                         <p>In ultricies rutrum tempus. Mauris vel molestie orci.</p>
//                     </p>
//                 </div>

//                 <div class={style.container3}>
//                     <h2>Produk Review</h2>
//                     <div class={style.review}>
//                         <div class={style.total}>
//                             <h1>5.0<span>/10</span></h1>
//                             <div class={style["total-star"]}>
//                                 <img src={star} alt="" />
//                                 <img src={star} alt="" />
//                                 <img src={star} alt="" />
//                                 <img src={star} alt="" />
//                                 <img src={star} alt="" />
//                             </div>
//                         </div>
//                         <div class={style["star-review"]}>
//                             <div class={style.star5}>
//                                 <img src={star} alt="" />
//                                 <h5>5</h5>
//                                 <hr />
//                                 <h5>4</h5>
//                             </div>
//                             <div class={style.star4}>
//                                 <img src={star} alt="" />
//                                 <h5>4</h5>
//                                 <hr />
//                                 <h5>0</h5>
//                             </div>
//                             <div class={style.star3}>
//                                 <img src={star} alt="" />
//                                 <h5>3</h5>
//                                 <hr />
//                                 <h5>0</h5>
//                             </div>
//                             <div class={style.star2}>
//                                 <img src={star} alt="" />
//                                 <h5>2</h5>
//                                 <hr />
//                                 <h5>0</h5>
//                             </div>
//                             <div class={style.star1}>
//                                 <img src={star} alt="" />
//                                 <h5>1 </h5>
//                                 <hr />
//                                 <h5>0</h5>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>

//         )
//     }
// }


export default ProductBody
