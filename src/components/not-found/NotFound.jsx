import React from 'react'

import { isBrowser } from '../../utils'

const NotFound = ({ authenticated }) => {
  if (isBrowser()) {
    window.location = authenticated ? '/app' : '/'
  }

  return <div />
}

export default NotFound
