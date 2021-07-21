import React from 'react'
import { Col, Card } from 'react-bootstrap'
import style from './card.module.css'
import suit from '../../../Assets/suit.png'
import star from '../../..//Assets/star1.png'

const Cards = ({ products }) => {
    return (

        <div className={style.card}>
            <img src={suit} alt="" />
            <div className={style["card-content"]}>
                <h4>{products.name}</h4>
                <h6>{products.price}</h6>
                <h6>Zalora's Cloth</h6>
                <div className={style.star}>
                    <img src={star} alt="" />
                    <img src={star} alt="" />
                    <img src={star} alt="" />
                    <img src={star} alt="" />
                    <img src={star} alt="" />
                    <h6> (10)</h6>
                </div>
            </div>
        </div>



        // <Col className={style.col}>
        //     <Card className={style.card}>
        //         <Card.Img className={style.cardimg} variant="top" src={suit} />
        //         <Card.Body>
        //             <Card.Title>{products.name}</Card.Title>
        //             <Card.Text>
        //                 {products.price}
        //             </Card.Text>
        //         </Card.Body>
        //     </Card>
        // </Col>




    )
}

export default Cards






            // <div className={style.wrapper}>

            //     <div className={style["card-wrapper"]}>
            //         <div className={style["card-group"]}>


            //             <div className={style.card}>
            //                 <img src={suit} alt="" />
            //                 <div className={style["card-content"]}>
            //                     <h4>Men's formal suit - <br /> Black & White </h4>
            //                     <h4>$40.00</h4>
            //                     <h6>Zalora's Cloth</h6>
            //                     <div className={style.star}>
            //                         <img src={star} alt="" />
            //                         <img src={star} alt="" />
            //                         <img src={star} alt="" />
            //                         <img src={star} alt="" />
            //                         <img src={star} alt="" />
            //                         <h6> (10)</h6>
            //                     </div>
            //                 </div>
            //             </div>

            //             <div className={style.card}>
            //                 <img src={suit} alt="" />
            //                 <div className={style["card-content"]}>
            //                     <h4>Men's formal suit - <br /> Black & White </h4>
            //                     <h4>$40.00</h4>
            //                     <h6>Zalora's Cloth</h6>
            //                     <div className={style.star}>
            //                         <img src={star} alt="" />
            //                         <img src={star} alt="" />
            //                         <img src={star} alt="" />
            //                         <img src={star} alt="" />
            //                         <img src={star} alt="" />
            //                         <h6> (10)</h6>
            //                     </div>
            //                 </div>
            //             </div>

            //             <div className={style.card}>
            //                 <img src={suit} alt="" />
            //                 <div className={style["card-content"]}>
            //                     <h4>Men's formal suit - <br /> Black & White </h4>
            //                     <h4>$40.00</h4>
            //                     <h6>Zalora's Cloth</h6>
            //                     <div className={style.star}>
            //                         <img src={star} alt="" />
            //                         <img src={star} alt="" />
            //                         <img src={star} alt="" />
            //                         <img src={star} alt="" />
            //                         <img src={star} alt="" />
            //                         <h6> (10)</h6>
            //                     </div>
            //                 </div>
            //             </div>

            //             <div className={style.card}>
            //                 <img src={suit} alt="" />
            //                 <div className={style["card-content"]}>
            //                     <h4>Men's formal suit - <br /> Black & White </h4>
            //                     <h4>$40.00</h4>
            //                     <h6>Zalora's Cloth</h6>
            //                     <div className={style.star}>
            //                         <img src={star} alt="" />
            //                         <img src={star} alt="" />
            //                         <img src={star} alt="" />
            //                         <img src={star} alt="" />
            //                         <img src={star} alt="" />
            //                         <h6> (10)</h6>
            //                     </div>
            //                 </div>
            //             </div>
            //         </div>
            //     </div>
            // </div>
