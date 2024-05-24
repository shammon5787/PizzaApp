import React from 'react'
import img1 from '../Food/1.avif'
import { FaPlus } from "react-icons/fa";
import { FaMinus } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { useSelector } from 'react-redux';
const ItemCard = () => {

    const selectitem = useSelector((state) => state.cart)

    return (
        <div className=' leading-tight'>
            {
                selectitem.map((selitm) => (
                    <div className='bg-cyan-100 p-2  rounded-md mt-1'>
                        <div className='flex items-center justify-between '>
                            <img className="rounded-full w-[40px] h-[40px] " src={selitm.image} alt="" />
                            <div>
                                <h2>{selitm.name}</h2>
                            </div>
                            <MdDelete className='right-4' />
                        </div>
                        <div className='flex items-center justify-between'>
                            <h2>$: {selitm.price}</h2>
                            <div>
                                <span className='flex gap-3 items-center'>
                                    <FaPlus className='border border-gray-500 rounded-md cursor-pointer' /> 1  <FaMinus className='border border-gray-500 rounded-md cursor-pointer' />
                                </span>
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default ItemCard