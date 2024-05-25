import React from 'react'
import img1 from '../Food/1.avif'
import { FaPlus } from "react-icons/fa";
import { FaMinus } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { useDispatch, useSelector } from 'react-redux';
import { remove } from '../Store/CardSlice';
const ItemCard = () => {

    const selectitem = useSelector((state) => state.cart)
    const dispetch = useDispatch()




    // const removeFromCard = (item)=>{
    //     dispetch(remove(item))
    // }

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
                            <MdDelete onClick={()=>dispetch({id, name,image, price})} className='right-4 cursor-pointer' />
                        </div>
                        <div className='flex items-center justify-between'>
                            <h2>$: {selitm.price}</h2>
                            <div>
                                <span className='flex gap-3 items-center'>
                                    <FaPlus className='border border-gray-500 rounded-md cursor-pointer' /> {selitm.qnty}  <FaMinus className='border border-gray-500 rounded-md cursor-pointer' />
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