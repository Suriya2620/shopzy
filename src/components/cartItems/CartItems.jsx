    import React, { useContext } from 'react'
    import './cartitems.css'
    import { ShopContext } from '../../context/ShopContext'
    import remove_icon from '../Assets/cart_cross_icon.png'

    const CartItems = () => {
        const {getTotalCartAmount,all_product,cartItems,removeCart}= useContext(ShopContext)
    return (
    <div className="cartitems">
        <div className="cartitems-format-main">
            <p>products</p>
            <p>Title</p>
            <p>Price</p>
            <p>Quantity</p>
            <p>Total</p>
            <p>Remove</p>
        </div>
        <hr />
    

        {all_product.map((e)=>{
            if(cartItems[e.id]>0){
                return  <div>
                <div className="cartitems-format cartitems-format-main">
                    <img src={e.image} className='carticon-product-icon' alt="" />
                    <p>{e.name}</p>
                    <p>${e.new_price}</p>
                    <button className='cartitems-quantity'>{cartItems[e.id]}</button>
                    <p>${e.new_price*cartItems[e.id]}</p>
                    <img className='cartitems-remove-icon' src={remove_icon} onClick={()=>{removeCart(e.id)}} alt="" />
                </div>
                <hr />  
            </div>
            }
            return null
        })}
        <div className="cartitems-down">
            <div className="cartitems-total">
                <h1>cart Total</h1>
                <div>
                    <div className="cartitems-total-item">
                        <h3>subTotal</h3>
                        <p>${getTotalCartAmount()}</p>
                    </div>
                    <hr />
                    <div className="cartitems-total-item">
                        <h3>Shipping Fee</h3>
                        <p>Free</p>
                    </div>
                    <hr />
                    <div className="cartitems-total-item">
                        <h3>Total</h3>
                        <h3>${getTotalCartAmount()}</h3>
                    </div>
                    
                    
                </div>
                <button>Proceed to Checkout</button>
            </div>
            <div className="cartitems-promocode">
                <p>If u have a promo code , Enter it here</p>
                <div className="cartitems-promobox">
                    <input type="text"placeholder='Enter promo code' />
                    <button>Submit</button>
                        
                </div>
            
            </div>
        </div>
    </div>
    )
    }

    export default CartItems