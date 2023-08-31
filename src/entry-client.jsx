import ReactDOM from 'react-dom/client'
import { HashRouter } from 'react-router-dom'
import { App } from './App'

ReactDOM.hydrateRoot(
  document.getElementById('app'),
  <HashRouter>
    <App />
  </HashRouter>,
)
console.log('hydrated')
