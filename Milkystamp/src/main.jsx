import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom';
import Contextapi from './context/Contextapi.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Contextapi>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Contextapi>
  </StrictMode>,
)
