import React from 'react'
import { AuthTypes } from '../types'

export const SignInCard = (
    {
       setState
    }:{
        setState:(state:AuthTypes) =>void
    }
) => {
  return (
    <div className=' p-6 bg-white text-black'>
      <h1 className=' text-5xl font-bold'>
      SignInCard
      </h1>
      <div
       className=' w-full flex justify-center items-center'
       onClick={()=>setState("signUp")}
       >
         Sign Up  
      </div>
      </div>
  )
}
