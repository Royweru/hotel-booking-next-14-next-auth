"use client"
import { SignUpCard } from '../_components/sign-up-card'
import { SignInCard } from '../_components/sign-in-card'
import { AuthTypes } from '../types'
import { useState } from 'react'
const AuthPage = () => {
  const [state,setState] = useState<AuthTypes>("signIn")
  return (
    <>
    {state ==="signIn"? <SignInCard setState={setState}/>:<SignUpCard  setState={setState}/>}
   </>
  )
}

export default AuthPage