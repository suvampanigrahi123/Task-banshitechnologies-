import React from 'react'
import './collections.css'
const Collections = () => {
    const data=[
        {
            url:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTazmmemMEzcqTUSrubOlN761rzZo-WPwATOg&usqp=CAU',
            para:'Hair - 3 items'
        },
        {
            url:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0LZBpoxLshzMtCUcv_VUv7lvI6OMndXR8Sg&usqp=CAU',
            para:'accssories - 7 items'
        },
        {
            url:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhCanCfjdB9t5skr6Xj3U7H6q8UF3jf16N7A&usqp=CAU',
            para:'Footwear - 9items'
        },
    ]
  return (
    <div className='collections'>
            <h1 >Our Collections</h1>
            <div>
            {
                data.map((val,i)=>(
                    <div className='collection-item' key={i}>
                    <img src={val.url} alt={val.para} />
                    <p>{val.para}</p>
                    </div>
                ))
            }
            </div>
    </div>
  )
}

export default Collections