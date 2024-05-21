import React, { useState } from 'react'
import FoodCard from './FoodCard'
import FoodData from '../Data/FoodData'

const FoodItem = () => {
    const [item, setitem] = useState(FoodData)
    return (
        <div  className='gap-3 flex flex-wrap items-center justify-center'>
            {
                item.map((myiems) => (
                    <div>
                        <FoodCard key={myiems.id} id = {myiems.id} name = {myiems.name} price ={myiems.price} image = {myiems.image} ratting = {myiems.ratting} desc = {myiems.desc} />
                    </div>
                ))
            }
        </div>
    )
}

export default FoodItem