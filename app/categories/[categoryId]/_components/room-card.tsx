"use client"
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import { Room } from '@prisma/client'
import Image from 'next/image'

export const RoomCard = ({
    room
}:{
    room:Room
}) => {
  return (
    <div className=' col-span-1 bg-white
    shadow-medium min-h-[300px] rounded-md 
     active:opacity-95 group overflow-hidden'
     onClick={()=>{}}
    >

         <div className='  w-full  h-full relative flex flex-col gap-y-1'>
            <div className=' w-full h-[250px] relative'>
            <Image
              src={room.imageUrl}
              alt='Placeholder image'
              fill
              className='bg-center bg-cover rounded-md'
              />
            </div>
            
            <div className=' lg:px-2 px-3 flex flex-col gap-y-1 mt-2 relative pb-0.5'>
              <p className=' text-sm font-semibold tracking-tight leading-relaxed  text-black/85'>
               {room.details}
              </p>
              <Separator  className=' bg-black my-1'/>
              <div className=' w-full relative flex justify-between items-center'>
                <p className=' text-xs font-bold text-emerald-600 font-mono tracking-wide capitalize'>
                   {room.name}
                </p>
                <Button variant={"reserve"} size={'lg'} 
                 className=' font-semibold'
                >
                   Reserve now
                </Button>
              </div>
            </div>
            
         </div>
        </div>
  )
}
