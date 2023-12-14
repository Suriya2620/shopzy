import React from 'react'
import './newsLetter.css'

const NewsLetter = () => {
  return (
   <div className="newsletter">
    <h1>Get Exclusive offers on your email</h1>
    <p>Subscribe to our newsLetter and stay updated</p>
    <div>
        <input type="email" placeholder='Your Email id' />
        <button>Subscribe</button>
    </div>
   </div>
  )
}

export default NewsLetter