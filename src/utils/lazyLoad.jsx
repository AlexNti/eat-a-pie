import React, { useRef, useState, lazy, Suspense } from 'react'

import isBrowser from './isBrowser'

const lazyLoad = componentUrl => props => {
  if (!isBrowser()) {
    return null
  }

  const componentRef = useRef()
  const [init] = useState(() => {
    componentRef.current = lazy(componentUrl)

    return true
  })

  const { current: Component } = init && componentRef

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Component {...props} />
    </Suspense>
  )
}

export default lazyLoad
