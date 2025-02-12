import React from 'react'
import ReactDOM from 'react-dom/client'
import Page from '../app/page'
import '../app/globals.css'

const root = document.getElementById('root')
if (!root) throw new Error('Root element not found')

try {
  ReactDOM.createRoot(root).render(
    <React.StrictMode>
      <Page />
    </React.StrictMode>
  )
} catch (error) {
  console.error('Error rendering app:', error)
}
