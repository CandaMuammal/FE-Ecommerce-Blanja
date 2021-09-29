import React, { useState } from 'react'
import style from './rightside3.module.css'
import bigbox from '../../../../../Assets/bigbox.png'
import smallbox from '../../../../../Assets/smallbox.png'
import writing from '../../../../../Assets/writing.png'
import axios from 'axios'
import Product from '../../../../../Pages/Main/Product'


const Rightside3 = () => {

    const [form, setForm] = useState({
        name: localStorage.getItem('name'),
        price: localStorage.getItem('price'),
        stock: localStorage.getItem('stock'),
        color: localStorage.getItem('color'),
        size: localStorage.getItem('size'),
        idCategory: localStorage.getItem('idCategory'),
        category: localStorage.getItem('category'),
        description: localStorage.getItem('description'),
        image: localStorage.getItem('imagee'),
        // imagePreview: null
    })
    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    const handleInputFile = (e) => {
        setForm({
            ...form,
            image: e.target.files[0],
            // imagePreview: URL.createObjectURL(e.target.files[0])
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        const formData = new FormData()
        formData.append('name', form.name)
        formData.append('price', form.price)
        formData.append('size', form.size)
        formData.append('color', form.color)
        formData.append('category', form.category)
        formData.append('idCategory', form.idCategory)
        formData.append('description', form.description)
        formData.append('stock', form.stock)
        formData.append('image', form.image)
        axios.post('${process.env.REACT_APP_API_URL}v1/product/', formData)
            .then((res) => {
                alert('success')
            })
            .catch(() => {
                alert('failed')
            })
    }

    const handleUpdate = (e) => {
        e.preventDefault()

        const formData = new FormData()
        formData.append('name', form.name)
        formData.append('price', form.price)
        formData.append('size', form.size)
        formData.append('color', form.color)
        formData.append('category', form.category)
        formData.append('idCategory', form.idCategory)
        formData.append('description', form.description)
        formData.append('stock', form.stock)
        formData.append('image', form.image)

        axios.put(`${process.env.REACT_APP_API_URL}v1/product/${localStorage.getItem('id')}`, formData)
            .then((res) => {
                alert('success')
            })
            .catch(() => {
                alert('failed')
            })
    }

    return (

        <div className={style.rightside}>

          
                <div className={style.box1}>
                    <div className={style.inventory}>
                        <h2>Inventory</h2>
                    </div>
                    {/* <form action=""> */}
                    <label for="name" >Name of goods</label>
                    <input type="text" name="name" value={form.name} onChange={handleChange} />
                    {/* </form> */}
                </div>
                <div className={style.box2}>
                    <div className={style["item-detail"]}>
                        <h2>Item Details</h2>
                    </div>
                    {/* <form action=""> */}
                    <label for="price">Unit price</label>
                    <input type="text" name="price" value={form.price} onChange={handleChange} />
                    <label for="stock">Stock</label>
                    <input type="text" name="stock" value={form.stock} onChange={handleChange} />
                    <label for="color">Color</label>
                    <input type="text" name="color" value={form.color} onChange={handleChange} />
                    <label for="size">size</label>
                    <input type="text" name="size" value={form.size} onChange={handleChange} />
                    <label for="idCategory">idCategory</label>
                    <input type="text" name="idCategory" value={form.idCategory} onChange={handleChange} />
                    <label for="category">category</label>
                    <input type="text" name="category" value={form.category} onChange={handleChange} />
                    {/* </form> */}
                </div>
                <div className={style.box3}>
                    <div className={style.photogoods}>
                        <h2>Photo of Goods</h2>
                    </div>
                    <div className={style.body}>
                        <div className={style.pict}>
                            <input type="file" onChange={handleInputFile} />
                            <img src={form.image} alt="" />
                            {/* <div className={style.pict1}><img src={bigbox} alt="" /></div>
                            <div className={style.pict2}><img src={smallbox} alt="" /></div>
                            <div className={style.pict2}><img src={smallbox} alt="" /></div>
                            <div className={style.pict2}><img src={smallbox} alt="" /></div>
                            <div className={style.pict2}><img src={smallbox} alt="" /></div> */}
                        </div>
                        <div className={style["pict-button"]}>
                            {/* <button className={style.upload}>Upload</button> */}
                        </div>
                    </div>
                </div>
                <div className={style.box4}>
                    <div className={style.descript}>
                        <h2>Description</h2>
                    </div>
                    <div className={style.body}>
                        <div className={style.writing}><img src={writing} alt="" /></div>
                        <input type="text" name="description" value={form.description} onChange={handleChange} />
                    </div>
                </div>
                <button onClick={handleSubmit}  className={style.submit}>Add product</button>
            
            <button onClick={handleUpdate} className={style.submit}>Update product</button>

        </div>


    )

}

// componentDidMount() {
//     const url = '${process.env.REACT_APP_API_URL}product'
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
//     const urlAPI = '${process.env.REACT_APP_API_URL}product'
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