import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './Components/Header/Header';
import GitHub from './Components/GitHub/GitHub';
import LinkedIn from './Components/LinkedIn/LinkedIn';
import { ThemeProvider } from './Components/ThemeContext/ThemeContext';
// import { useTheme } from './Components/ThemeContext/ThemeContext';
import './App.css';
import Navbar from "./Components/NavBar/NavBar";
import Content from "./Components/Content/Content";

const App: React.FC = () => {
  // const { theme, toggleTheme } = useTheme();

  // const toggleThemeColor = () => {
  //   toggleTheme();
  // };

  return (
    <>
      <ThemeProvider>
        <div>
            <Header />
          <BrowserRouter>
          <Content/>
          <Navbar/>
            <GitHub />
            <LinkedIn />
        {/* <div className={theme === 'dark' ? 'dark-theme' : 'light-theme'}>
          <button onClick={toggleThemeColor}>Toggle Theme</button> */}
            <Routes>
              <Route />
              {/* path="/" element={<Header/>}/> */}
            </Routes>
          </BrowserRouter>
        </div>
      </ThemeProvider>
    </>
  );
};

export default App;
