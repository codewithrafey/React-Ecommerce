import React from 'react'
import { Link } from 'react-router-dom'

function Items(props) {
  return (
    <div className='items min-h-[320px] flex flex-col gap-2 transition-transform duration-300 hover:scale-102'>
        <Link to={`/product/${props.item.id}`}><img src={props.item.img} alt="img" /></Link>
        <p className='text-[11px]'>{props.item.name}</p>
        <div className="items-price flex items-start gap-4">
            <div className="items-price-new text-[15px]">${props.item.price_new}</div>
            <div className="items-price-old text-[15px] text-gray-400 line-through">${props.item.price_old}</div>
        </div>
    </div>
  )
}

export default Items