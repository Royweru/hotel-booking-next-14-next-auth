import { GetReservations } from '@/actions/getReservations'
import { serverUser } from '@/lib/serveruser'
import { redirect } from 'next/navigation'
import React from 'react'
import { ReservationCard } from './_components/reservation-card'

const ReservationsPage =async() => {
    const user = await serverUser()
    if(!user) return redirect("/auth")
    const reservations = await GetReservations({userId:user.id})
  return (
    <div className='lg:p-24 md:p-16 sm:p-8 p-4'>
         <div className=' w-full grid lg:grid-cols-3 md:grid-cols-2  grid-cols-1 lg:gap-1 md:gap-2 gap-3'>
             {reservations?.map((reservation)=>(
                <ReservationCard 
                 key={reservation.id}
                 reservation={reservation}
                 room={reservation.room}
                />
             ))}
         </div>
    </div>
  )
}

export default ReservationsPage