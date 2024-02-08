// import * as React from "react";
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './Components/Header/Header';
import GitHub from './Components/GitHub/GitHub';
import LinkedIn from './Components/LinkedIn/LinkedIn';

function App() {
  return (
    <>
    <BrowserRouter>
      <Header/>
      <GitHub/>
      <LinkedIn/>
      <Routes>
        <Route/> 
        {/* path="/" element={<Header/>}/> */}
      </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
