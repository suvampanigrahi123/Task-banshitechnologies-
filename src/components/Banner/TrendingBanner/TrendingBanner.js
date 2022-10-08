import React from 'react'
import './trendingbanner.css'
const TrendingBanner = () => {
    const img1='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRId9CB_CilFX5D9iHysI-KQ6hVN09QA6x0rSwK64Ur&s'
    const img2='https://img.lovepik.com/free-png/20211225/lovepik-fashion-womens-summer-shopping-image-png-image_400331002_wh300.png'
  return (
    <div className='trendingBanner'>
      <h1>This month Trending</h1>
      <div>
        <div className="card">
        <div>
            <p>Women Top</p>
            <span>Save 30% off</span>
            <button>Buy online</button>
        </div>
        <img src={img1} alt="a girl wearing glass" />
        </div>
        <div className="card">
        <div>
            <p>Women Coat</p>
            <span>Save 30% off</span>
            <button>Buy online</button>
        </div>
        <img src={img2} alt="a girl wearing glass" />
        </div>
      </div>
    </div>
  )
}

export default TrendingBanner