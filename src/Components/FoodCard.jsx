import React from 'react'
import img1 from '../Food/1.avif'
import { FaStar } from "react-icons/fa"
import { useDispatch } from 'react-redux'
import { add } from '../Store/CardSlice'

const FoodCard = ({id, name, price, image, ratting, desc }) => {

  const dispetch = useDispatch();
  
  // const addtocard = (prod)=>{
  //   dispetch(add(prod))
  // }

  return (
    <div className='font-bold w-[250px] py-1 px-3  bg-white object-cover flex flex-col rounded-lg gap-2'>

      <img className='rounded-full w-[140px] h-[140px] hover:scale-110 cursor-pointer transition-all duration-500 ease-in-out object-fill ml-10' src={image} alt="No Image" />

      <div className='text-sm flex justify-between'>
        <h2>{name}</h2>
        <span>$: {price}</span>
      </div>
      <p className='font-normal text-lg'>{desc}</p>
      <div className='flex flex-row items-center justify-between'>
        <span className='flex items-center'><FaStar className='text-yellow-400 mr-2' />{ratting}</span>
        <button onClick={()=>{
          dispetch(add({id, name, ratting, image, qnty: 1}))
        }} className='p-1 text-white bg-green-800 hover:text-blue-800 hover:bg-black font-thin rounded-md'>Add To Card</button>
      </div>
    </div>
  )
}

export default FoodCard