import React from 'react'

function Hero() {
  return (
    <div className='grid grid-cols-2 items-center justify-items-center md:px-40 pt-20 pb-20'>

      <div className='text-center '>
          <h1 className='md:text-5xl'>Dick'S Burger</h1>
          <button type="button" class="flex items-center mt-6 text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-3 py-1.5 text-center mr-2 mb-2 dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800">
            Find your burger
            <svg className=' w-8 pl-1' fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
  <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75l3 3m0 0l3-3m-3 3v-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
</svg>
          </button>
      </div>
      <div>
        <img className='w-10/12 rounded-lg '  src='https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=999&q=80'></img>
      </div>
      
    </div>
  )
}

export default Hero