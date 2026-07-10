import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/fonts.css'
import './styles/tokens.css'
import './styles/base.css'
import App from './App.tsx'

// The corporate-standard devtools notice.
console.log(
  '%cCONSENSUS HOLDINGS',
  'font-weight:bold;font-size:14px;color:#0f4c81;',
)
console.log(
  'You are inspecting this page. Curiosity is a documented trait, and documentation is our specialty.\n' +
    'If you enjoy looking at how things work, we should talk: careers@consensus-holdings.example\n' +
    'We were going to reach out anyway.',
)

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
