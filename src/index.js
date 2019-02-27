import { render } from 'preact'
import getStore from './bundles'
import root from './components/root'

const initialData = {};

render(root(getStore(initialData)), document.getElementById('app'))

