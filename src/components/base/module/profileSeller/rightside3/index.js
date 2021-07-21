import React, { useState } from 'react'
import style from './rightside3.module.css'
import bigbox from '../../../../../Assets/bigbox.png'
import smallbox from '../../../../../Assets/smallbox.png'
import writing from '../../../../../Assets/writing.png'
import axios from 'axios'

// export class Rightside3 extends Component {
//     constructor(props) {
//         super(props)

//         this.state = {
//             product: [],
//             name: null,
//             price: null,
//             description: null
//         }
//     }
const Rightside3 = () => {
    const [form, setForm] = useState({
        name: '',
        price: '',
        stock: ''
    })
    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post('http://localhost:4000/product', form)
            .then((res) => {
                alert('success')
            })
            .catch(() => {
                alert('failed')
            })

        axios.put(`http://localhost:4000/product/${form.id}`)
        .then((res) => {
            alert('success')
        })
        .catch(() => {
            alert('failed')
        })
    }

    return (

        <div className={style.rightside}>

            <form method="post"
                onSubmit={handleSubmit}>

                <div className={style.box1}>
                    <div className={style.inventory}>
                        <h2>Inventory</h2>
                    </div>
                    {/* <form action=""> */}
                    <label for="name" >Name of goods</label>
                    <input type="text" name="name" onChange={handleChange} />
                    {/* </form> */}
                </div>
                <div className={style.box2}>
                    <div className={style["item-detail"]}>
                        <h2>Item Details</h2>
                    </div>
                    {/* <form action=""> */}
                    <label for="price">Unit price</label>
                    <input type="text" name="price" onChange={handleChange} />
                    <label for="stock">Stock</label>
                    <input type="text" name="stock" onChange={handleChange} />
                    <label for="condition">Stock</label>
                    <div className={style.radio}>
                        <input type="radio" name="condition" id="" />Baru
                        <input type="radio" name="condition" id="" />Bekas
                    </div>
                    {/* </form> */}
                </div>
                <div className={style.box3}>
                    <div className={style.photogoods}>
                        <h2>Photo of Goods</h2>
                    </div>
                    <div className={style.body}>
                        <div className={style.pict}>
                            <div className={style.pict1}><img src={bigbox} alt="" /></div>
                            <div className={style.pict2}><img src={smallbox} alt="" /></div>
                            <div className={style.pict2}><img src={smallbox} alt="" /></div>
                            <div className={style.pict2}><img src={smallbox} alt="" /></div>
                            <div className={style.pict2}><img src={smallbox} alt="" /></div>
                        </div>
                        <div className={style["pict-button"]}>
                            <button className={style.upload}>Upload</button>
                        </div>
                    </div>
                </div>
                <div className={style.box4}>
                    <div className={style.descript}>
                        <h2>Description</h2>
                    </div>
                    <div className={style.body}>
                        <div className={style.writing}><img src={writing} alt="" /></div>
                        <input type="email" />
                    </div>
                </div>
                <button type='submit' className={style.submit}>Add product</button>
            </form>
        </div>


    )

}

// componentDidMount() {
//     const url = 'http://localhost:4000/product'
//     const dataProduct = {
//                 name: this.state.name,
//                 price: this.state.price,
//                 stock: this.state.stock,
//     }

//     axios.get(url)
//         .then(product => {
//             console.log(product.data.data)

//             this.setState({
//                 product: product.data.data
//             })


//         })

//     



// }

// saveToAPI(e) {
//     e.preventDefault()
//     const urlAPI = 'http://localhost:4000/product'
//     const dataProduct = {
//         name: this.state.name,
//         price: this.state.price,
//         stock: this.state.stock, 
//         // descrtiption: this.state.description
//     }
//     axios.post(urlAPI, dataProduct)
//     console.log(dataProduct)
// }





export default Rightside3