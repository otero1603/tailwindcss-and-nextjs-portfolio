import React from 'react'
import Image from 'next/image'
const Contacto = () => {
  return (
    <section id="contacto">
        <div className='flex flex-col text-center items-center justify-center  py-16 sm:py-32 md:flex-row md:space-x-4 md:py-32'>
            <div className='md:mt-2 md:w-1/2'>
                <h1 className='font-bold text-4xl mt-6 md:text-7xl md:mt-0'>Contacto</h1>
                <h2>Instagram</h2>
            </div>
            <div className='md:w-1/2 md:mt-0'><Image src="/logofull.png" alt="" width={500} height={500}/></div>
        </div>
    </section>
  )
}

export default Contacto