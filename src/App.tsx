import React from 'react';
import GitHub from './Components/GitHub/GitHub';
import LinkedIn from './Components/LinkedIn/LinkedIn';
//import backgroundImage from './assets/sky-stars-mountains-trees-wallpaper-preview.jpg';

// import { BrowserRouter, Routes, Route } from 'react-router-dom';
//import { ThemeProvider } from './Components/ThemeContext/ThemeContext';
//import './App.css';
//import Navbar from './Components/NavBar/NavBar';
// import Content from './Components/Content/Content';

import { Intro } from './Components/Intro';
import { Timeline } from './Components/Timeline';
import { Contact } from './Components/Contact';
import { Portfolio } from './Components/Portfolio';
import { Footer } from './Components/Footer';
import { GMail } from './Components/GMail/GMail';
import { ProfilePic } from './Components/ProfilePic';

const App: React.FC = () => {
  return (
    <div>
    {/* className="m-0 p-0 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(${backgroundImage` }> */}
      <ProfilePic />
      <GitHub />
      <LinkedIn />
      <GMail/>
      <Intro/>
      <Portfolio/>
      <Timeline/>
      <Contact/>
      <Footer/>
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
