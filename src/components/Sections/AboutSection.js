import React from 'react'
import './aboutSection.css'
import img from '../../images/index8.jpg'
const AboutSection = () => {
  return (
    <div className='AboutSection'>
    <div className="image_container">
        <img src={img} alt="girl" />
    </div>
    <div className="text_container">
      <p>All About Us</p>
      <h1>Formal Fashion</h1>
      <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam molestiae doloribus, vero iusto aspernatur voluptatibus dolorum eum voluptate impedit architecto ea, quo, blanditiis quidem eius eos a est. Nobis odio, praesentium illum magni possimus commodi eligendi dolor at voluptates dolores? Obcaecati natus doloribus beatae consequatur quo, est assumenda officiis quos cumque odio tenetur id maiores, aliquam totam voluptas repellat doloremque.</span>
      <button>Show now</button>
    </div>
    </div>
  )
}

export default AboutSection