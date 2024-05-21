import React from 'react'
import img1 from '../Food/1.avif'
import { FaStar } from "react-icons/fa"

const FoodCard = ({name, price, image, ratting, desc}) => {
  return (
    <div className='font-bold w-[250px] py-1 px-3  bg-white object-cover flex flex-col rounded-lg gap-2'>
       
            <img className='rounded-full w-[140px] h-[140px] hover:scale-110 cursor-pointer transition-all duration-500 ease-in-out object-fill ml-10' src= {image} alt="No Image" />
       
        <div className='text-sm flex justify-between'>
            <h2>{name}</h2>
            <span>$: {price}</span>
        </div>
        <p className='font-normal text-lg'>{desc}</p>
        <div className='flex flex-row items-center justify-between'>
            <span className='flex items-center'><FaStar className='text-yellow-400 mr-2'/> 4{ratting}</span>
            <button className='p-1 text-white bg-green-800 hover:text-blue-800 hover:bg-black font-thin rounded-md'>Add To Card</button>
        </div>
    </div>
  )
}

export default FoodCard