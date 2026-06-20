import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Event from './EventListener.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Event />
  </StrictMode>,
)
