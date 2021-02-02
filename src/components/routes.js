import { lazyLoad } from '../utils'

const Cake =
  process.env.NODE_ENV === 'production'
    ? lazyLoad(() => import('./client-pages/cake/Cake'))
    : require('./client-pages/cake/Cake').default

export { Cake }
