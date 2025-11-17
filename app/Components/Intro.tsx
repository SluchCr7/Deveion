import React from 'react'

const Intro = ({heading , para} : {heading : string , para : string}) => {
  return (
    <div className='flex flex-col items-center gap-3 justify-center'>
      <h1 className='text-3xl font-bold'>{heading}</h1>
      <p className='text-center text-xs'>{para}</p>
    </div>
  )
}

export default Intro