import ReactDOM from 'react-dom/client'
import { BrowserRouter, Outlet } from 'react-router-dom'
import { App } from './App'

ReactDOM.hydrateRoot(
  document.getElementById('app'),
  <BrowserRouter >
    <App />
    <Outlet />
  </BrowserRouter>,

)
console.log('hydrated')
