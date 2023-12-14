import React, { useContext } from 'react'
import {ShopContext} from '../context/ShopContext'
import { useParams } from 'react-router-dom'
import BreadCrumb from '../components/BreadCrumb/BreadCrumb'
import ProductDisplay from '../components/productDisplay/ProductDisplay'
import DescriptionBox from '../components/Description/DescriptionBox'
import RelatedProducts from '../components/RelatedProducts/RelatedProducts'
const Product = () => {
  const {all_product} =useContext(ShopContext)
  let {productId}=useParams()
  let product = all_product.find((e)=>e.id === Number(productId))
  return (
    <div>
      <BreadCrumb product={product}/>
      <ProductDisplay product={product}/>
      <DescriptionBox/>
      <RelatedProducts/>
    </div>
  )
}

export default Product