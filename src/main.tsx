import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './tailwind.css'

const element = document.getElementById('root') || document.createElement('p');



  ReactDOM.createRoot(element).render(
    <React.StrictMode>
    <App />
  </React.StrictMode>,
)