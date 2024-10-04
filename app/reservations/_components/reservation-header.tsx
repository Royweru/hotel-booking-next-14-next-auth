
import React from 'react'

export const ReservationHeader = ({title,subTitle}:{
   
    title:string,
    subTitle :string
}) => {
  return (
    <div className=' w-full my-2 flex flex-col space-y-2 lg:px-20 md:px-18 sm:px-14 px-6'>
        <div className=' text-start font-semibold lg:text-8xl md:text-7xl sm:text-5xl text-4xl'>
             <h1 className=' text-emerald-500 leading-snug tracking-wide'>
              {title}
             </h1>
        </div>
        <p className=' text-gray-900/80 font-normal text-md tracking-tight leading-relaxed font-mono'>
           {subTitle}
        </p>
    </div>
  )
}
