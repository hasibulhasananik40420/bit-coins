import React from 'react'

const Homepage = () => {
  return (
    <div className='md:px-16 py-8 bg-gray-100'>
      <div className='flex flex-col justify-center h-[80vh] items-center'>
        <h1 className=' font-mono text-xl md:text-5xl '>
          Welcome to <span className='text-indigo-500'>CRYPTO</span> CAFE<span className='text-4xl'>☕</span>
        </h1>
        <button className='py-2 px-3 text-white mt-3 rounded-full bg-cyan-600'>
          Explore Coins
        </button>
      </div>
    </div>
  )
}

export default Homepage
