import { GetReservations } from '@/actions/getReservations'
import { serverUser } from '@/lib/serveruser'
import { redirect } from 'next/navigation'
import React from 'react'
import { ReservationHeader } from './_components/reservation-header'
import { Button } from '@/components/ui/button'

import Link from 'next/link'

import { ReservationClient } from './_components/reservation-client'

const ReservationsPage =async() => {
   
    const user = await serverUser()
    if(!user) return redirect("/auth")
        const reservations = await GetReservations({userId:user.id})
    if(reservations?.length===0){
        return(
            <div className='lg:p-20 md:p-16 sm:p-8 p-4 flex flex-col gap-y-2'>
                <ReservationHeader  title={'Currently no Reservations'} subTitle ={"Head over back to our home page to book yourself a room"}/>
                <div className=' lg:px-24 md:px-18 px-12'>
               <Button className=' w-full font-semibold text-rose-500' variant={"link"}>
                <Link href={"/"}>
                Back to home page
                </Link>
                
               </Button>
                </div>
            </div>
        )
    }
  
  return (
    <>
    
    <ReservationHeader 
     title={'Reservations'} subTitle ={`Hey ${user.name},make sure to have paid a 50% deposit on all your reservations pending,else your reservation will be deleted automaticaly after
            24 hours if the 50% deposit is not met.Only a maximum of three reservations are allowed per user`}
            
            />
    <ReservationClient reservations={reservations}/>
    </>
   
  )
}

export default ReservationsPage