import React, { useState } from 'react'
import style from './rightside3.module.css'
import bigbox from '../../../../../Assets/bigbox.png'
import smallbox from '../../../../../Assets/smallbox.png'
import writing from '../../../../../Assets/writing.png'
import axios from 'axios'


const Rightside3 = () => {
    const [form, setForm] = useState({
        name: '',
        price: '',
        stock: '',
        color: '',
        size: '',
        idCategory: '',
        category: '',
        description: '',
        image: null,
        imagePreview: null
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
            imagePreview: URL.createObjectURL(e.target.files[0])
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
        axios.post('http://localhost:4000/v1/product/', formData)
        .then((res) => {
                    alert('success')
                })
                .catch(() => {
                    alert('failed')
                })

        // e.preventDefault()
        // axios.post('http://localhost:4000/v1/product/', form)
        //     .then((res) => {
        //         alert('success')
        //     })
        //     .catch(() => {
        //         alert('failed')
        //     })

        // axios.put(`http://localhost:4000/product/${form.id}`)
        // .then((res) => {
        //     alert('success')
        // })
        // .catch(() => {
        //     alert('failed')
        // })
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
                    <label for="color">Color</label>
                    <input type="text" name="color" onChange={handleChange} />
                    <label for="size">size</label>
                    <input type="text" name="size" onChange={handleChange} />
                    <label for="idCategory">idCategory</label>
                    <input type="text" name="idCategory" onChange={handleChange} />
                    <label for="category">category</label>
                    <input type="text" name="category" onChange={handleChange} />
                    {/* </form> */}
                </div>
                <div className={style.box3}>
                    <div className={style.photogoods}>
                        <h2>Photo of Goods</h2>
                    </div>
                    <div className={style.body}>
                        <div className={style.pict}>
                            <input type="file" onChange={handleInputFile}/>   
                            <img src={form.imagePreview} alt="" />
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
                        <input type="text" name="description" onChange={handleChange} />
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