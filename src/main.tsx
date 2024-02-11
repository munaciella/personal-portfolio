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


// import React from 'react';
// import ReactDOM from 'react-dom';
// import App from './App';
// import './index.css';


// ReactDOM.createRoot(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );
