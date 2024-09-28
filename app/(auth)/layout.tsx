import React from 'react'

const AuthLayout = ({
    children
}:{
    children:React.ReactNode
}) => {
  return (
    <div className=' w-full min-h-screen flex items-center justify-center
      bg-gradient-to-bl from-sky-200 via-blue-400 to-sky-900
    '>
        {children}
    </div>
  )
}

export default AuthLayout