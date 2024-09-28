

import React, { useState } from 'react'
import { AuthTypes } from '../types'
import { SignInCard } from '../_components/sign-in-card'
import { SignUpCard } from '../_components/sign-up-card'

export const AuthScreen = () => {

  const [state,setState] = useState<AuthTypes>("signIn")
  return (
    <>
     {state ==="signIn"? <SignInCard setState={setState}/>:<SignUpCard  setState={setState}/>}
    </>
  )
}
