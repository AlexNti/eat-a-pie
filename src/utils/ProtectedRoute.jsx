import React from 'react'

const ProtectedRoute = ({ component: Component, authenticated, ...props }) => {
  if (!authenticated) {
    window.location = '/'

    return <div />
  }

  return <Component {...props} />
}

export default ProtectedRoute
