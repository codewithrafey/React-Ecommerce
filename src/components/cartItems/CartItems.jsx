import React, { useContext } from 'react'
import { Context } from '../../context/Context'
import { BiTrashAlt } from "react-icons/bi";

function CartItems() {
  const { totalCartAmount, all_product, cartItems, addToCart, removeFromCart } = useContext(Context)

if (!cartItems || Object.values(cartItems).every(qty => qty === 0)) {
  return (
    <div className="flex flex-col items-center justify-center py-36 gap-4">
      <h1 className='text-3xl font-semibold uppercase'>Cart</h1>
      <p>Your cart is empty.</p>
    </div>
  );
}
  return (
    <div className="px-4 sm:px-6 md:px-16 lg:px-24 pt-24 pb-6">
      {/* Header */}
      <div className="grid grid-cols-[2fr_1fr_1fr_1fr_0.5fr] items-center gap-4 text-gray-700 mb-5">
        <div className="flex items-center gap-5">
        <p className=''>Products</p>
        <p className=''>Title</p>
        </div>
        <p className=''>Price</p>
        <p className=''>Quantity</p>
        <p className=''>Total</p>
        <p className=''>Remove</p>
      </div>
      <hr className='text-gray-400' />

      {/* Cart Items */}
      {all_product.map((e,i) => {
        if (cartItems[e.id] > 0) {  // ✅ Corrected here
          return (
            <div key={i} className="grid grid-cols-[2fr_1fr_1fr_1fr_0.5fr] items-center gap-4 py-4 border-b-gray-400 border-b">
                <div className="flex items-center gap-5">
              {/* Product Image */}
              <img src={e.img} alt={e.name} className="h-16" />

              {/* Product Title */}
              <p className='text-gray-600 text-sm'>{e.name}</p>
              </div>

              {/* Price */}
              <p className='text-gray-600 text-sm'>${e.price_new}</p>

              {/* Quantity */}
              <div className="flex items-center gap-2 border w-fit rounded border-gray-300">
                <button 
                  onClick={() => removeFromCart(e.id)} 
                  className="py-1 px-3 text-gray-400 hover:text-gray-500 cursor-pointer"
                >
                  -
                </button>
                <span>{cartItems[e.id]}</span>
                <button 
                  onClick={() => addToCart(e.id)} 
                  className="py-1 px-3 text-gray-400 hover:text-gray-500 cursor-pointer"
                >
                  +
                </button>
              </div>

              {/* Total */}
              <p className='text-gray-600 text-sm'>${e.price_new * cartItems[e.id]}</p>

              {/* Remove */}
              <button 
                onClick={() => {removeFromCart(e.id)}} 
                className="text-red-500 hover:text-red-700 flex justify-center cursor-pointer"
              >
                <BiTrashAlt size={20} />
              </button>
            </div>
          )
        }
        return null
      })}
      <div className="py-14">
          <h1 className='uppercase font-bold text-3xl pb-2'>Cart Total</h1>
        <div className="flex flex-wrap gap-40">
          <div className="w-full max-w-md ">
            <div className="flex justify-between items-center py-5">
              <p className=''>Subtotal:</p>
              <p className=''>${totalCartAmount()}</p>
            </div>
            <div className="flex justify-between items-center py-5">
              <p className=''>Shipping Free:</p>
              <p className=''>Free</p>
            </div>
            <div className="flex justify-between items-center py-5">
              <p className='font-bold'>Total:</p>
              <p className='font-bold'>${totalCartAmount()}</p>
            </div>
            <div className="py-2">
            <button className='bg-red-500 hover:bg-red-600 text-white py-3 px-8 text-sm cursor-pointer'>PROCCED TO CHECKOUT</button>
            </div>
          </div>
          <div className="flex-1 md:block flex flex-col justify-center items-center">
            <p>If you have a Prome Code , Enter it here</p>
          <div className='flex flex-1 justify-between text-sm mt-6 w-full max-w-md overflow-hidden'>
          <input type="email" placeholder='Promo Code' className='px-4 py-[14px] bg-gray-200 outline-none w-full'/>
          <button className='bg-black text-white px-8 py-[14px] cursor-pointer'>Submit</button>
        </div>

          </div>
        </div>
      </div>

    </div>
  )
}

export default CartItems
