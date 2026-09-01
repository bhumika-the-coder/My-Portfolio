import About from "./Components/About/About"
import Contact from "./Components/Contact/Contact"
import Education from "./Components/Education/Education"
import Footer from "./Components/Footer/Footer"
import Home from "./Components/Home/Home"
import Navbar from "./Components/Navbar/Navbar"
import Projects from "./Components/Projects/Projects"
function App() {
  return (
    <div className="bg-[#171d32] h-auto w-full overflow-hidden">
        <Navbar/>
        <Home/>
        <About/>
        <Education/>
        <Projects/>
        <Contact/>
        <Footer/>
    </div>
  )
}

export default App
