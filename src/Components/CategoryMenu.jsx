import React from 'react'

const CategoryMenu = () => {
    return (
        <div className='my-6'>
            <h1>Filne The Best Food</h1>
            <div className='gap-6 my-5 flex overflow-x-scroll lg:overflow-x-hidden'>
                <button className='px-3 py-1 bg-slate-950 text-white rounded-md hover:bg-green-700'>All</button>
                <button className='px-3 py-1 bg-slate-950 text-white rounded-md hover:bg-green-700'>Lunch</button>
                <button className='px-3 py-1 bg-slate-950 text-white rounded-md hover:bg-green-700'>Dinner</button>
                <button className='px-3 py-1 bg-slate-950 text-white rounded-md hover:bg-green-700'>Breakfast</button>
                <button className='px-3 py-1 bg-slate-950 text-white rounded-md hover:bg-green-700'>Advance</button>
                <button className='px-3 py-1 bg-slate-950 text-white rounded-md hover:bg-green-700'>All</button>
            </div>
        </div>
    )
}

export default CategoryMenu