"use client"
import React, { useState } from 'react'
import { Textarea } from '@relume_io/relume-ui';
import { Button } from './ui/button';
import axios from 'axios';
import { toast } from 'sonner';
import { User } from '@prisma/client';
import { redirect } from 'next/navigation';

export const Reviews = ({
  user
}:{
  user:User|null
}) => {
    const  [message,setMessage] = useState("")
    const onSubmit =async ()=>{
      try {
        if(!user) return redirect("/auth")
         await axios.post('/api/reviews',{
          message
        })
        toast.success("We got your feedback thanks for using our services")
        setMessage("")
      } catch (error) {
        console.error(error)
        return toast.error("Somethig went wrong while subniting your message")
      }
    }
  return (
    <>
    <div className=' font-semibold text-2xl md:text-3xl tracking-wide lg:text-4xl text-rose-500 text-center my-3'>
            <h2 className='leading-snug'>
              Give us a feedback, file a complaint, give a positive review
            </h2>
        </div>
        <div className=' lg:px-24 md:px-18 sm:px-12 px-6 flex flex-col gap-y-3 justify-center items-center'>
         <Textarea 
         className=' lg:max-w-md  w-full min-h-[90px]'
         value={message}
         onChange={(e)=>setMessage(e.target.value)}
         />
         <div className=' w-full items-center justify-center flex'>
           <Button className=' font-semibold text-neutral-300' onClick={onSubmit}>
                 Submit
           </Button>
         </div>
        </div>
    </>
  )
}
