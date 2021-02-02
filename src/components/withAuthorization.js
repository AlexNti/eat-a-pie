import React from 'react'
import { useAuth } from '../hooks'

const withAuthorization = Component => props => {
  const auth = useAuth()

  const handleSignIn = () => {
    auth.signIn()
  }

  return <Component handleSignIn={handleSignIn} {...props} />
}

export default withAuthorization
