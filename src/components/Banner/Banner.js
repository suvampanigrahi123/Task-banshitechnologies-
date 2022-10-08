import React, { Fragment } from 'react'
import banner from '../../images/index.jpg'
import './banner.css'
const Banner = () => {
  return (
    <Fragment>
    <div className="banner">
    <div className="text">
        <h3>Spring</h3>
        <h1>Trendy Fashion !</h1>
        <p>500+ Deals On Top Brands & Big offer on ist order</p>
        <button>Shop Now</button>
    </div>
    <img src={banner} alt='Banner' />
    </div>
    </Fragment>
  )
}

export default Banner