import React from 'react'
import ReactDOM from 'react-dom/client'
import { Global, theme } from './styled'
import App from './App'
import "./index.css"

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <React.StrictMode>
    <Global theme={theme} />
    <App />
  </React.StrictMode>
)