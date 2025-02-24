import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import Router from './Routers/Router'
import DictionaryContext from './Context/DictionaryContext'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <DictionaryContext>
      <RouterProvider router={Router}></RouterProvider>
    </DictionaryContext>
  </StrictMode>,
)
