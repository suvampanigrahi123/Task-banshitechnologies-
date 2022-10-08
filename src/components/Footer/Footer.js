import React from 'react'
import './footer.css'
const Footer = () => {
  return (
    <div className='footer'>
      <div className="pre-footer">
            <div className='pre-footer-item'>
                <img src="https://cdn.shopify.com/s/files/1/0430/8349/7630/files/rossiyol_logo_large.png?v=1662548512" alt="Official logo" />
                <div>
                    <p>Follow us</p>
                    <img src="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/Facebook%202x?scl=1" alt="facebook logo" className='contactlogo'  />
                    <img src="https://cdn-icons-png.flaticon.com/512/87/87390.png" className='contactlogo' alt="insta logo" />
                </div>
            </div>
            <div className='pre-footer-item'>
                <h3>Quick Links</h3>
                <p>Home</p>
                <p>Shop</p>
                <p>Tracking</p>
                <p>Contact</p>
            </div>
            <div className='pre-footer-item'>
                <h3>Other Links</h3>
                <p>Privacy Policy</p>
                <p>Refund Policy</p>
                <p>Shipping Policy</p>
                <p>Terms of Service</p>
            </div>
            <div className='pre-footer-item'>
                <h3>Contact Us</h3>
                <span>Call us</span>
                <p><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtNaNCNAFPYYhS5GhD8JEjkQcVoZtRU5i2mUIPSdcT3g&s" alt="phone" />609-2278117</p>
                <span>Mail us</span>
                <p><img src="https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-email-512.png" alt="email" />sales@rossiyal.com</p>
            </div>
      </div>
      <div className="line"></div>
      <div className="post-footer">
      <p>&copy; 2022 Rossiyal shop . All Rights Reserved.</p>
      <div>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIAgtWN382JSeYn2oiipgSdbOnyFFgvLo_Vspv4H_T&s" alt="visa" />
        <img src="https://upload.wikimedia.org/wikipedia/commons/a/a4/Paypal_2014_logo.png" alt="paypal" />
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsLEtvgwdhXu-HlEcyH-y-4VbXLApriZjhUtd2MJU&s" alt="master card" />
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTv9ipN60AjpU4hmfCM8zPgDKB9JBqwT2EJZwIDZ4njow&s" alt="Discover" />
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0v8m5NLkH1FUd6_FMGa--pbmIgvzae_dZXa7yUGo&s" alt="America Express" />
      </div>
      </div>
    </div>
  )
}

export default Footer