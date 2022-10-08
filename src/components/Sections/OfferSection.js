import React, { Fragment } from 'react'
import './Offersection.css'
const OfferSection = ({obj}) => {
  return (
    <Fragment>
    <div className='OfferSection-item'>
            <img src={obj.image} alt="offer icon" />
            <div>
                <p>{obj.para}</p>
                <span>{obj.span}</span>
            </div>
        </div>
    </Fragment>
  )
}

export default OfferSection