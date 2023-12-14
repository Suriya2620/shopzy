import React, { useContext, useState } from 'react'
import './navbar.css'
import logo from '../Assets/logo.png'
import cart from '../Assets/cart_icon.png'
import { Link } from 'react-router-dom'
import { ShopContext } from '../../context/ShopContext'

const Navbar = () => {

    let [menu,setMenu]= useState('shop')
    let {getTotalCartItems}= useContext(ShopContext)
  return (
   <div className='navbar'>
    <div className="nav-logo">
    <img src={logo} alt="" />
    <p>Shopzy</p>
    </div>

    <ul className="nav-menu">
        <li onClick={()=>setMenu('shop')}> <Link style={{textDecoration:'none'}} to='/'>Shop</Link> {menu==='shop'?<hr/> :<></>}</li>
        <li onClick={()=>setMenu('womens')}> <Link style={{textDecoration:'none'}} to='/womens'>Women</Link> {menu==='womens'?<hr/> :<></>}</li>
        <li onClick={()=>setMenu('men')}><Link style={{textDecoration:'none'}} to='/mens'>Men</Link> {menu==='men'?<hr/> :<></>}</li>
        <li onClick={()=>setMenu('kids')}><Link style={{textDecoration:'none'}} to='/kids'>Kids</Link> {menu==='kids'?<hr/> : <></>}</li>
    </ul>

    <div className="nav-login-cart">
        <button><Link style={{textDecoration:'none'}} to='/login'>Login</Link></button>
        <Link style={{textDecoration:'none'}} to='/cart'><img src={cart} alt="" /></Link>
        <div className="nav-cart-count">{getTotalCartItems()}</div>
    </div>
    

   </div>
  )
}

export default Navbar