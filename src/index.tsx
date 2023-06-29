import React from 'react'
import ReactDOM from 'react-dom/client'
import { Global, theme } from './styled'
import App from './App'
import "./index.css"
import { ThemeProvider } from 'styled-components'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Global />
      <App />
    </ThemeProvider>
  </React.StrictMode>
)