import React, { useContext } from 'react'
import { Context } from '../context/Context'
import { RiArrowDropDownLine } from "react-icons/ri";
import Items from '../components/items/Items';

function ShopCategory(props) {
  const {all_product} = useContext(Context)
  
  return (
    <>
    <img src={props.banner} className='px-20' alt="" />
      <div className="flex justify-around items-center my-7">
        <p>
          <span>Showing 1-12</span> out of 36 Products
        </p>
      <div className="flex justify-between items-center border w-fit text-[15px] sm:text-md sm:px-8 sm:py-3 px-2 py-1 rounded-full">
        Sort by <RiArrowDropDownLine className='text-xl'/>
      </div>
      </div>
          <div className='px-5 md:px-10'>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8  place-items-center md:px-28">
        {all_product.map((item, i)=>{
          if(props.category === item.category){
            return <Items key={i} item={item} />
          }
            else{
            return null;
            }

          })}
      </div>
    </div>
      <div className="text-center text-sm mx-auto w-fit bg-gray-100 px-6 sm:px-10 py-2 sm:py-3 rounded-full mt-12 mb-14 cursor-pointe">
        Explore More
      </div>    </>
  )
}

export default ShopCategory