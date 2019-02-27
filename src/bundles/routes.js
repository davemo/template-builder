import { createRouteBundle } from 'redux-bundler'
import HomePage from '../components/pages/home'
import GoatsPage from '../components/pages/goats'

export default createRouteBundle({
  '/': HomePage,
  '/goats': GoatsPage
})
