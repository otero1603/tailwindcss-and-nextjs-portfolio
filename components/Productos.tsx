import React from 'react'
import Image from 'next/image'
const Productos = () => {
  return (
    <section id ="productos">
        <div className='flex flex-col text-center items-center justify-center  py-16 sm:py-32 md:space-x-4 md:py-32'>
            <div><h1 className='font-bold text-2xl mt-6 md:text-7xl md:mt-0'>Productos</h1></div>
            <div className='md:w-1/2 md:mt-0 justify-center md:flex '><Image src="/logofull.png" alt="" width={300} height={300}/></div>
            <div className='md:mt-2 md:w-1/2'>
                <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
            </div>
        </div>
    </section>
  )
}

export default Productos