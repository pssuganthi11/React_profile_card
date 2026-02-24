import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Project from "../src/component/projects-day-4/project"

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    <Project />
  </StrictMode>
)
