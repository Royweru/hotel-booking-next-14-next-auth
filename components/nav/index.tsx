
import React from 'react'
import { MainNav } from './main-nav'
import { getUserById } from '@/lib/getUser'

import { auth } from '@/auth'
import { GetReservations } from '@/actions/getReservations'
export const Navbar =async () => {
   const session = await auth()
    const user  = await getUserById(session?.user.id as string)
    const reservations =await GetReservations({userId:user?.id})
  return (
   <MainNav  user={user} reservations ={reservations}/>
  )
}
