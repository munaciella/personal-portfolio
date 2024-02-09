import React from "react";
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './Components/Header/Header';
import GitHub from './Components/GitHub/GitHub';
import LinkedIn from './Components/LinkedIn/LinkedIn';
import { ThemeProvider } from "./Components/ThemeContext/ThemeContext";
import Navbar from "./Components/NavBar/NavBar";
import Content from "./Components/Content/Content";


const App: React.FC = () => {
  return (
    <>
    <ThemeProvider>
    <div className="App">
    <BrowserRouter>
      <Header/>
        <Navbar />
      <GitHub/>
      <LinkedIn/>
      <Routes>
        <Route/> 
        {/* path="/" element={<Header/>}/> */}
      </Routes>
      </BrowserRouter>
        <Content />
      </div>
    </ThemeProvider>
    </>
  );
}

export default App;
