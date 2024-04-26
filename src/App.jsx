import Hero from "./components/Hero/Hero"
import Navbar from "./components/Navbar/Navbar"
import Banner from "./components/Banner/Banner"
import WhyChoose from "./WhyChoose/WhyChoose"
import About from "./components/About/About"
import Footer from "./components/Footer/Footer"

function App() {

  return (
    <div>
      <Navbar />
      <Hero />
      <Banner />
      <WhyChoose />
      <About />
      <Banner />
      <Footer />
    </div>
  )
}

export default App
