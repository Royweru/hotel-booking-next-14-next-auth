"use client"
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import { useReserveModal } from '@/hooks/use-reserve-modal'
import { Room } from '@/types'
import Image from 'next/image'

export const RoomCard = ({
    room
}:{
    room:Room
}) => {
  const {onOpen} = useReserveModal()
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
              <div className=' w-full relative flex justify-between items-center'>
                <p className=' text-xs font-bold text-neutral-darkest font-mono tracking-wide capitalize'>
                   {room.name}
                </p>
                <button className=' px-4 py-1 bg-emerald-500 text-white font-bold text-sm
              flex items-center justify-center gap-x-2 tracking-wide rounded-lg hover:bg-emerald-500'>
                 <span className=' text-xs font-mono font-light text-neutral-100 mr-1
                  '> 
                  Per night
                 </span>
                 <span className=' text-xs font-semibold'>
                  Kes
                 </span>
                   {room.price.toLocaleString('en')}
                 
                </button>
              </div>  
              <Separator  className=' bg-black my-1'/>
              <div className=' w-full flex items-center justify-center px-8 mb-1'>
                  <Button 
                  variant={"reserve"} 
                  className=' w-full'
                  onClick={()=>onOpen(room)}
                  >
                    Rerserve now
                  </Button>
              </div>
            </div>
            
         </div>
        </div>
  )
}
