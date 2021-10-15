import React, { Component } from 'react'
import header from '../../../Assets/headerhome2.png'
import carousel1 from '../../../Assets/carousel1.png'
// import carousel2 from '../../../Assets/carousel2.png'
// import carousel3 from '../../../Assets/carousel3.png'
// import carousel4 from '../../../Assets/carousel4.png'
// import carousel5 from '../../../Assets/carousel5.png'
// import carousel6 from '../../../Assets/carousel6.png'
// import carousel7 from '../../../Assets/carousel7.png'
// import carousel8 from '../../../Assets/carousel8.png'
// import carousel9 from '../../../Assets/carousel9.png'
// import carousel10 from '../../../Assets/carousel10.png'
// import carousel11 from '../../../Assets/carousel11.png'
// import style from '../../base/carousel/carousel.module.css'
import Carousel from 'react-elastic-carousel';
import { Link } from 'react-router-dom';
import style from './carousel.module.css'



const Carousels = () => {
  const breakPoint1 = [
    { width: 576, itemsToShow: 1 },
    { width: 1000, itemsToShow: 2 }
  ]

  const breakPoint2 = [
    { width: 576, itemsToShow: 2 },
    { width: 1000, itemsToShow: 6 }
  ]
  return (
    <div className={style.wrapper}>
      <div className={style.wrapper1}>
        <Carousel breakPoints={breakPoint1}>
          <img src={header} alt="" />
          <img src={header} alt="" />
          <img src={header} alt="" />
          <img src={header} alt="" />
          <img src={header} alt="" />
          <img src={header} alt="" />
          <img src={header} alt="" />
        </Carousel>
      </div>


        <div className={style.wrapper2}>
          <h3>Categories</h3>
          <div className="div">
      {/* <a href="/category" className={style.link}> */}

          <Carousel breakPoints={breakPoint2}>
           <a href="/category"><img src={carousel1} alt="" /></a>
           <a href="/category"><img src={carousel1} alt="" /></a>
           <a href="/category"><img src={carousel1} alt="" /></a>
           <a href="/category"><img src={carousel1} alt="" /></a>
           <a href="/category"><img src={carousel1} alt="" /></a>
           <a href="/category"><img src={carousel1} alt="" /></a>
           <a href="/category"><img src={carousel1} alt="" /></a>
            {/* <img src={carousel1} alt="" />
            <img src={carousel1} alt="" />
            <img src={carousel1} alt="" />
            <img src={carousel1} alt="" />
            <img src={carousel1} alt="" />
            <img src={carousel1} alt="" />
            <img src={carousel1} alt="" /> */}
            {/* <img src={carousel8} alt="" />
        <img src={carousel9} alt="" />
        <img src={carousel10} alt="" />
        <img src={carousel11} alt="" /> */}
          </Carousel>
      {/* </a> */}
      </div>
      </div>

    </div>

  );
};

export default Carousels
