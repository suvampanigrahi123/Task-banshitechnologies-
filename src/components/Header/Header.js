import React, { Fragment, useRef } from 'react'
import './Header.css'
const Header = () => {
    const menuref=useRef();
    const handlemenu=(e)=>{
        console.log(menuref);
        if(menuref.current.classList.contains('left-100')){
            menuref.current.classList.remove('left-100')
            menuref.current.classList.add('left-0')
        }else{
            menuref.current.classList.remove('left-0')
            menuref.current.classList.add('left-100')
        }
    }
  return (
    <Fragment>
        <div className="Header">
            <div className="pre-header">
                <div>
                    <p>Welcome to Rossiyal Shop | Follow us</p>
                    <img src="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/Facebook%202x?scl=1" alt="facebook logo" className='contactlogo'  />
                    <img src="https://cdn-icons-png.flaticon.com/512/87/87390.png" className='contactlogo' alt="insta logo" />
                </div>
                <div>
                    <p>CHECKOUT |WISHLIST |CONTACT</p>
                </div>
            </div>
            <div className='line'></div>
            <div className="post-header">
            <div className="logo">
            <div className="ham-burger" onClick={(e)=>handlemenu(e)}>
                <div className="menuline"></div>
                <div className="menuline"></div>
                <div className="menuline"></div>
            </div>
                <img src="https://cdn.shopify.com/s/files/1/0430/8349/7630/files/rossiyol_logo_large.png?v=1662548512" alt="Official logo" />
            </div>
            <ul className='menu left-100 ' ref={menuref}>
                <li>Shop</li>
                <li>Bodycon</li>
                <li>Dresses</li>
                <li>Tops</li>
                <li>Bottoms</li>
                <li>Footwear</li>
                <li>Accessories</li>
            </ul>
            <div className="searchbar">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Search_Icon.svg/1024px-Search_Icon.svg.png" alt="searchicon" />
            <input type="text" placeholder='search'/>
            <div className="icons">
                <img src="https://www.freepnglogos.com/uploads/shopping-cart-png/shopping-cart-svg-png-icon-download-28.png" alt="cart" />
                <img src="https://png.pngitem.com/pimgs/s/146-1468281_profile-icon-png-transparent-profile-picture-icon-png.png" alt="profile" />
            </div>
            </div>
            </div>
        </div>
    </Fragment>
  )
}

export default Header