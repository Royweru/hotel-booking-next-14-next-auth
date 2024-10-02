import { Room } from '@/types'
import React from 'react'
import { RoomCard } from './room-card'

export const RoomsGrid = ({
    rooms
}:{
    rooms:Room[] |undefined
}) => {
  return (
    <div className=' h-full w-full relative grid lg:grid-cols-2 gap-3 lg:gap-2 '>
         {rooms?.map((room)=>(
            <RoomCard 
             key={room?.id}
             room={room}
            />
         ))}
    </div>
  )
}
