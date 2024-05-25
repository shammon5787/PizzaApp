import React, { useState } from 'react'
import { IoIosClose } from "react-icons/io";
import { BsCartFill } from "react-icons/bs";
import ItemCard from './ItemCard';
import { useSelector } from 'react-redux';


const Card = () => {

    const [activeCard, setactiveCard] = useState(true)

    const selecter = useSelector((state) => state.cart)
    console.log(selecter)

    return (
        <>
            <div className={`fixed right-0 top-0 w-full lg:w-[20vw] h-full bg-cyan-50 p-5 ${activeCard ? "translate-x-0" : "translate-x-full"} transition-all duration-500 z-50`}>
                <div className='flex justify-between items-center'>
                    <span className='font-bold text-xl'>My Order</span>
                    <IoIosClose onClick={() => setactiveCard(!activeCard)} className='border border-gray-600 m-1 cursor-pointer rounded-lg hover:border-red-500 hover:text-red-600 font-bold' />
                </div>
                <ItemCard />
                <div className='absolute bottom-0'>
                    <h3>Items: </h3>
                    <h3>Total Amound: </h3>
                    <hr className='h-1 text-black font-bold' />
                    <button className='bg-green-700 text-white text-sm font-semiboldbold py-1 px-2
                rounded-md w-[90vw] lg:w-[18vw] mb-5'>Check Out</button>
                </div>
            </div>
            <BsCartFill onClick={()=>setactiveCard(!activeCard)} className='rounded-full bg-white fixed bottom-6 right-7 text-2xl cursor-pointer z-0'/>
        </>
    )
}

export default Card