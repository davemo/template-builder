import { composeBundles } from 'redux-bundler'
import routes from './routes'
import baseData from './base-data'

export default composeBundles(
  routes,
  baseData
)
