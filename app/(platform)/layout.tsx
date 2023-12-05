import { ClerkProvider } from '@clerk/nextjs'
import React from 'react'

const PlatFormLayout = ({children}: {children: React.ReactNode}) => {
  return (
    <ClerkProvider>
        {children}
    </ClerkProvider>
  )
}

export default PlatFormLayout
