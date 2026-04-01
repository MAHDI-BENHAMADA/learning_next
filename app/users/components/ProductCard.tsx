
import React from 'react'
import AddToCart from './addToCart'
import styles from './ProductCard.module.css'


const ProductCard = () => {
  return (
    <div className='p-4 border rounded-lg shadow-md'>
     <AddToCart/>
    </div>
  )
}

export default ProductCard
