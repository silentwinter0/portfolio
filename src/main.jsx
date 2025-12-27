import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import FrontPage from './FrontPage.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path ="/*" element={<FrontPage />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
)
