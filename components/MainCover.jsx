import React from 'react'

function MainCover({children}) {
  return (
    <div className='flex flex-col lg:mx-auto justify-center items-center w-full max-w-6xl'>{children}</div>
  )
}

export default MainCover