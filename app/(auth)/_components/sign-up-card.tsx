import React from 'react'
import { AuthTypes } from '../types'
export const SignUpCard = (
    {
        setState
     }:{
         setState:(state:AuthTypes) =>void
     }
) => {
  return (
    <div className=' p-6 bg-white text-black'>
    <h1 className=' text-5xl font-bold'>
    SignUpCard
    </h1>
    <div
     className=' w-full flex justify-center items-center cursor-pointer' 
     onClick={()=>setState("signIn")}
     >
       Sign In 
    </div>
    </div>
  )
}
