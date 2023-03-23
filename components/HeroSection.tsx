import React from 'react'
import Image from 'next/image'
const HeroSection = () => {
  return (
    <section id ="inicio" className='justify-center md:flex'>
        <Image src="/landingpage.svg" alt="" height={2000} width={2000} style={{alignSelf: 'center'}}/> 
    </section>
  )
}

export default HeroSection