import React, { useContext } from 'react'
import './productdisplay.css'
import star from '../Assets/star_icon.png'
import star_dull from '../Assets/star_dull_icon.png'
import { ShopContext } from '../../context/ShopContext'

const ProductDisplay = (props) => {
    const {product} = props
    let {addToCart}= useContext(ShopContext)
  return (
    <div className="productdisplay">
        <div className="productdisplay-left">
            {/* <div className="productdisplay-img-list">
                <img src={product.image} alt="" />
                <img src={product.image} alt="" />
                <img src={product.image} alt="" />
                <img src={product.image} alt="" />
            </div> */}
            <div className="productdisplay-img">
                <img className='productdisplay-main-img' src={product.image} alt="" />
            </div>
        </div>

        <div className="productdisplay-right">
            <h1>{product.name}</h1>
            <div className="productdisplay-right-star">
                <img src={star} alt="" />
                <img src={star} alt="" />
                <img src={star} alt="" />
                <img src={star} alt="" />
                <img src={star_dull} alt="" />
                <p>(122)</p>
            </div>
            <div className="productdisplay-right-prices">
                <div className="productdisplay-right-price-old">${product.old_price}</div>
                <div className="productdisplay-right-price-new">${product.new_price}</div>
            </div>
            <div className="productdisplay-right-description">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rerum aliquid aperiam eaque qui debitis quidem vitae at praesentium? Ipsa quis impedit omnis ullam eveniet.
            </div>
            <div className="productdisplay-right-size">
                <h1>Select Size</h1>
                <div className="productdisplay-right-size">
                    <div>S</div>
                    <div>M</div>
                    <div>L</div>
                    <div>XL</div>
                    <div>XXL</div>
                </div>
            </div>
            <button onClick={()=>{addToCart(product.id)}}>Add to cart</button>
            <p className="productdisplay-right-category"><span>Category : </span>Women, Crop Top </p>
            <p className="productdisplay-right-category"><span>Tags : </span>Modern, Latest</p>
        </div>
    </div>
  )
}

export default ProductDisplay