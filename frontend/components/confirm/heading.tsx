import React from 'react'

function FormHeading({heading}:{heading:string}) {
  return (
    <div className='flex justify-center'>
        <h2
        className='text-3xl font-bold'>{heading}</h2>
    </div>
  )
}

export default FormHeading