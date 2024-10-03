"use client"
import React, { useEffect, useState } from 'react'
import { ReserveModal } from './modal/reserve-modal'

export const ModalProvider = () => {

    const [mounted,setMounted ]= useState(false)

    useEffect(()=>{
        setMounted(true)
    },[])

    if(!mounted) return null
  return (
    <>
    <ReserveModal />
    </>
  )
}
