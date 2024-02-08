// import * as React from "react";
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './Components/Header/Header';
import GitHub from './Components/GitHub/GitHub';

function App() {
  return (
    <>
    <BrowserRouter>
      <Header/>
      <GitHub/>
      <Routes>
        <Route/> 
        {/* path="/" element={<Header/>}/> */}
      </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
