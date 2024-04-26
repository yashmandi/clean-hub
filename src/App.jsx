import React, { useEffect, useState } from 'react'
import Hero from "./components/Hero/Hero"
import Navbar from "./components/Navbar/Navbar"
import Banner from "./components/Banner/Banner"
import Banner2 from "./components/Banner2/Banner2"
import WhyChoose from "./WhyChoose/WhyChoose"
import About from "./components/About/About"
import Footer from "./components/Footer/Footer"
import Popup from "./components/Popup/Popup"
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {
  const [showPopup, setShowPopup] = useState(false);
  const handlePopup = () => {
    setShowPopup(true);
  }

  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100
    });
    AOS.refresh();
  }, []);

  return (
    <div>
      <Navbar handlePopup={handlePopup} />
      <Hero />
      <Banner />
      <WhyChoose />
      <About handlePopup={handlePopup} />
      <Banner2 />
      <Footer />
      <Popup showPopup={showPopup} setShowPopup={setShowPopup} />
    </div>
  )
}

export default App
