import React from 'react'
import img1 from '../Food/1.avif'
import { FaPlus } from "react-icons/fa";
import { FaMinus } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { useSelector } from 'react-redux';
const ItemCard = () => {

    const selectitem = useSelector((state)=>state.cart)

    return (
        <div className=' leading-tight bg-cyan-100 mt-2 p-2 rounded-md'>
            <div className='flex items-center justify-between'>
                <img className="rounded-full w-[40px] h-[40px] " src={img1} alt="" />
                <div>
                    <h2>Onion Pizza</h2>
                </div>
                <MdDelete className='right-4'/>
            </div>
            <div className='flex items-center justify-between'>
                <h2>$: 30</h2>
                <div>
                    <span className='flex gap-3 items-center'>
                        <FaPlus className='border border-gray-500 rounded-md cursor-pointer' /> 1 {selectitem.length}  <FaMinus className='border border-gray-500 rounded-md cursor-pointer' />
                    </span>
                </div>
            </div>
        </div>
    )
}

export default ItemCard