import React, { Fragment } from 'react'
import banner from '../../../images/fashiongirl.png'
const DiscountBanner = () => {
  return (
    <Fragment>
    <div className="banner">
    <div style={{ backgroundColor:'rgb(239, 242, 244)'}} className="text">
        <h3>For The Best</h3>
        <h1>DisCount Sale</h1>
        <p>save up to 25% of all items</p>
        <button>Shop Now</button>
    </div>
    <img src={banner} alt='Banner' />
    </div>
    </Fragment>
  )
}

export default DiscountBanner