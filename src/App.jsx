import './App.css'
import Navbar from './Components/NavBar/Navbar'
import Intro from './Components/Intro/Intro'
import About from './Components/About/About'
import Skills from './Components/Skills/Skills'
// import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Project from './Components/Project/Project'
import Experience from './Components/Experience/Experience'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'
function App() {
  
  return (
    <>
      <Navbar/>
      <Intro/>
      <About/>
      <Skills/>
      <Project/>
      <Experience/>
      <Contact/>
      <Footer/>
    </>
  )
}

export default App
