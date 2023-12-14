import React from 'react'
import './footer.css'
import footer_logo from '../Assets/logo_big.png'
import instagram from '../Assets/instagram_icon.png'
import whatsapp from '../Assets/whatsapp_icon.png'
import pintrest from '../Assets/pintester_icon.png'

const Footer = () => {
  return (
    <div className="footer">
        <div className="footer-logo">
            <img src={footer_logo} alt="" />
            <p>Shoppzy</p>
            </div>
            <ul className="footer-links">
                <li>Company</li>
                <li>Products</li>
                <li>Offices</li>
                <li>About</li>
                <li>Contact</li>
            </ul>

            <div className="footer-social-icons">
                <div className="footer-icons-container">
                    <img src={instagram} alt="" />
                    <img src={whatsapp} alt="" />
                    <img src={pintrest} alt="" />
                </div>
            </div>
            <div className="footer-copyright">
                <hr />
                <p>copyright &copy; Shoppzy - All right reserved</p>
            </div>
        </div>

  )
}

export default Footer