import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import FrontPage from './pages/FrontPage.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import CommunicationCampaign from './pages/CommunicationCampaign.jsx'
import SimpleScheduler from './pages/SimpleScheduler.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path ="/*" element={<FrontPage />} />
        <Route path ="/projects/communication-campaign" element={<CommunicationCampaign />} />
        <Route path ="/projects/c-scheduler" element={<SimpleScheduler />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
)
