import { useEffect} from 'react'
import React from "react";
import Navigation from './components/Navbar/Navigation'
import Slider from './components/Slider/Slider'
import About from './components/About/About'
import Services from './components/Services/Services'
import Whyus from './components/Whyus/Whyus'
import Contact from './components/Contact/Contact'
import AOS from 'aos';
import 'aos/dist/aos.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"

function App() {
   React.useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <Navigation />
      <Slider />
      <About/>
      <Services/>
      <Whyus/>
      <Contact/>
    </>
  );
}

export default App
