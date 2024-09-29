import React from 'react'
import { SignInCard } from './sign-in-card'
import { SignUpCard } from './sign-up-card'
import { AuthTypes } from '../types'
import { useState } from 'react'
export const AuthScreen = () => {
    const [state,setState] = useState<AuthTypes>("signIn")
  return (
    <>
    {state ==="signIn"? <SignInCard setState={setState}/>:<SignUpCard  setState={setState}/>}
   </>
  )
}
