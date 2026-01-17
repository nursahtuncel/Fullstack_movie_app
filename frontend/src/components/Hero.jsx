import React from 'react'

const Hero = () => {
  return (
    <div className="px-10  py-20 lg:px-20 bg-[linear-gradient(#00000071,#00000071),url('silo.jpg')] bg-cover bg-center text-white">
        <h1 className='text-4xl md:text-5xl'>Hoşgeldin</h1>
        <h1 className='text-xl md:text-2xl font-semibold'>Milyonlarca Film,Dizi ve Aktörü keşfet</h1>
        <div className='rounded-lg overlow-hidden flex mt-5'> 
          <input className='border-none max-w-[300px] bg-white py-2 px-4 text-black' type="text" placeholder='Film,Dizi,Aktör arayın'/>
          <button className='bg-blue-500 px-5 font-semibold hover:bg-blue-600 '>Ara</button>
        </div>
   
    </div>
  )
}

export default Hero
