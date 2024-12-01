import './App.css'
import Navbar from './Components/NavBar/Navbar'
import Intro from './Components/Intro/Intro'
import About from './Components/About/About'
import Skills from './Components/Skills/Skills'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Project from './Components/Project/Project'
import Experience from './Components/Experience/Experience'
function App() {
  
  return (
    <>
      <Navbar/>
      <Intro/>
      <About/>
      <Skills/>
      <Project/>
      <Experience/>
    </>
  )
}

export default App
