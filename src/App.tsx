import React from 'react';
// import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import Header from './Components/Header/Header';
import GitHub from './Components/GitHub/GitHub';
import LinkedIn from './Components/LinkedIn/LinkedIn';
import { ContactPage } from './Components/ContactPage/ContactPage';
//import { ThemeProvider } from './Components/ThemeContext/ThemeContext';
import './App.css';
//import Navbar from './Components/NavBar/NavBar';
// import Content from './Components/Content/Content';
// import Statement from './Components/Statement/Statement';

import { Intro } from './Components/Intro';
import { Timeline } from './Components/Timeline';
import { Contact } from './Components/Contact';
import { Portfolio } from './Components/Portfolio';
import { Footer } from './Components/Footer';

const App: React.FC = () => {
  return (
    <div className="App">
      <Intro/>
      <Portfolio/>
      <Timeline/>
      <Contact/>
      <Footer/>
      <GitHub />
      <LinkedIn />
      <ContactPage />
    </div>
  );
};

export default App;

{
  /* <ThemeProvider>
        <Header />
        <Statement />
        <BrowserRouter>
          <Content />

          <Routes>
            <Route />
          </Routes>
        </BrowserRouter>
      </ThemeProvider> */
}
