
import React from 'react'
import { MainNav } from './main-nav'
import { getUserById } from '@/lib/getUser'

import { auth } from '@/auth'
export const Navbar =async () => {
   const session = await auth()

    const user  = await getUserById(session?.user.id as string)
  return (
   <MainNav  user={user}/>
  )
}
