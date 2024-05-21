import React from 'react'

const Navbar = () => {
  return (
    <nav className='flex flex-col lg:flex-row justify-between py-3 mx-6 mb-10'>
     <div>
        <h2 className='text-xl font-bold text-gray-700'>{new Date().toUTCString().slice(0,16)}</h2>
        <h2 className='text-2xl font-bold'>G_B PIZZA FAST FOOD CENTER</h2>
    </div>
    <div>
        <input className='px-3 py-2 border border-gray-400 rounded-md text-sm outline-none w-full lg:w-[25vw]' type="search" placeholder='search here' name='search' id='' autoComplete='off'/>
    </div>
   </nav>
  )
}

export default Navbar