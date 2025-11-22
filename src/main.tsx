//Default Imports
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'

//Router
import router from './configs/routes'

//Styles
import './index.css'
import './configs/var.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} /> {/* Provides routing context to the application */}
  </StrictMode>,
)
