import React from 'react'

const Card = ({movie}) => {
  return (
    <div className='border-none shadow-xl p-3 hover:bg-gray-200 cursor-pointer transition max-sm:flex max-sm:gap-5'>
<img src={`https://picsum.photos/seed/${movie.id}/200/300`} alt="poster" />
    </div>
  )
}

export default Card
