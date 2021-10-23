import React from 'react'
import style from './profile3.module.css'
import Navbar from '../../../../components/base/module/navbar'
import Leftside from '../../../../components/base/module/profileSeller/leftside'
import Rightside3 from '../../../../components/base/module/profileSeller/rightside3'
import ResponsiveLeftside from '../../../../components/base/module/profileSeller/leftside/responsive'
import ResponsiveRightside3 from '../../../../components/base/module/profileSeller/rightside3/responsive'
import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getProductDetail, getProduct } from '../../../../configs/redux/actions/productAction'


const ProfileSeller3 = ({ match }) => {

    const dispatch = useDispatch()

    // const {productDetails} = useSelector(state => state.product)
    const  product = useSelector(state => state.product.products)

    useEffect(() => {
        dispatch(getProduct())
    }, [dispatch])

    const prods = ""

    // const productDetail = product.map(item => {
    //     returm
    // })

    console.log(product)
    // const { loading, error, product } = productDetail

    // useEffect(() => {
    //     dispatch(getProductDetail(match.params.id))

    // }, [dispatch, match])

    // console.log(match.params.id)
    // }, dispatch)

    // console.log(productDetails)
    return (
        <>
            <Navbar />
            <div className={style.main}>
                <div className={style["main-wrap"]}>
                    <Leftside />
                    {/* {product.map(item => ( */}
                         <Rightside3
                            // name={item.name}
                            // price={item.price}
                            // stock={item.stock}
                            // color={item.color}
                            // size={item.size}
                            // idCategory={item.idCategory}
                            // category={item.category}
                            // description={item.description}
                            // image={item.image}
                        />
                    {/* ))} */}
                       

                </div>
                <div className={style.responsive}>
                    <ResponsiveLeftside />
                    <ResponsiveRightside3 />

                </div>
            </div>

        </>
    )
}

export default ProfileSeller3