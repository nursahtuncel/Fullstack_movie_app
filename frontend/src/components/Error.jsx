import React from 'react'

const Error = ({refetch,info}) => {
  return (
    <div className='my-10 bg-red-500 text-center p-5 rounded-md max-w-[500px] mx-auto text-white'>
      <h1>Üzgünüz bir hata oluştu</h1>
    <h1>{info.message}</h1>

    <button className='border rounded-md px-3 py-1 mt-5 hover:bg-white hover:text-black transition' onClick={refetch}>tekrar dene</button>
      
    </div>
  )
}

export default Error
