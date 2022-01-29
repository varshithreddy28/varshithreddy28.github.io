import React, { useEffect, useState } from "react";

import './App.css';
import ScrollToTop from "react-scroll-to-top";
import AOS from 'aos';
import 'aos/dist/aos.css';
import 'react-toastify/dist/ReactToastify.css';

// Default exports
import Navbar from './components/navbar/navbar';
import Projects from './pages/projects/projects';
import Home from './pages/home/home';
import Contact from './pages/contact/contact';
import Homefooter from './pages/homefooter/homefooter';


// Named Exports
import { About } from './pages/about/about';

import 'bootstrap/dist/css/bootstrap.min.css'
import Icons from "./components/contactme/icons";

function App() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const [theme, setTheme] = useState(true);

  // true : dark , false : light

  useEffect(() => {
    console.log(theme)
  }, [theme]);


  return (
    <div className="App" data-theme={theme ? "dark" : "light"}>
      <Navbar />
      <Icons theme={theme} setTheme={setTheme} />

      <Home theme={theme} setTheme={setTheme} />
      <Homefooter theme={theme} />

      <ScrollToTop smooth />
      <Projects theme={theme} />
      <About theme={theme} />
      <Contact theme={theme} />
      {/* <Icons theme={theme} /> */}

    </div>
  );
}

export default App;
