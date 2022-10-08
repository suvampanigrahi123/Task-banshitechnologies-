import React from 'react'
import './Products.css'
const Products = () => {
  const products=[
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRV-FPXpG2I5y5yd-AmPSrxJq1UhX5AOJhMuA&usqp=CAU',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7ih3e7JIoQdZqkJpVlFrfyDaT7rFRH_Ea8A&usqp=CAU',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLaJA2RwJ9fGrMmeukUAof_7j8KqhDGRAH8A&usqp=CAU',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5Y3P8zhT5MCaZjtQAgOrxwk0DyzbzF4S9FByhWhRv__P83IptzxanlvzM7DMXl-oFxdM&usqp=CAU',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3Ph1DyTO7eGwz97bkf8Q1AI9n_JJ7J3Gty9FatE158Id9TejnN7b5JY_dWcyJWCoyNv8&usqp=CAU',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7RQ7o4eI-HN21qp3yAuakBlCev09X8pCuiA&usqp=CAU',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqiy8pVjIFbTOJ5bPQIee3tLWsAo3j-KfT8Q&usqp=CAU',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLY9S6XqvKnZxgTmAmyAIsh2GBV8Yo9UG-Fg&usqp=CAU'
  ]
  return (
    <div className='Products'>
    <div className="Products-headings">
        <h1>Top Products</h1>
        <div>
          <h3>Featured</h3>
          <h3>New Arrivals</h3>
          <h3>Bottoms</h3>
        </div>
    </div>
    <div className="images">
      {
        products.map((val,i)=>(
          <div className="image-container" key={i}>
          <img src={val} alt={i} />
          </div>
        ))
      }
    </div>
    </div>
  )
}

export default Products