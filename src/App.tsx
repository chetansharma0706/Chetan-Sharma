import './App.css'
import About from './components/About/about'
import Contact from './components/contacts/contact'
import Footer from './components/Footer/footer'
import Header from './components/Header/header'
import Home from './components/Home/home'
import Parallex from './components/parallaxImage/parallex'
import Projects from './components/Projects/projects'
import Skills from './components/Skills/skills'

function App() {

  return (
    <>
     <Parallex />
      <Header />
      <main>
        <Home />
        <About />
        <Skills />
        <Projects />
        <Contact />
       </main> 
      <Footer />
      </>
  )
}

export default App
