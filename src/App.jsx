
import React from 'react'
import Navbar from './componencts/Navbar'
import Home from './componencts/Home'
import Skills from './componencts/Skills'
import Project from './componencts/Project'
import Contact from './componencts/Contact'
import Footer from './componencts/Footer'

const App = () => {
  return (
    <div className="min-h-screen bg-slate-950 text-white" >
     <div className='bg-amber-900 min-height'>
        <Navbar />
      </div> 
   

     <Home />

     <Skills />

     <Project />

     <Contact />

     <Footer />
    </div>
  )
}

export default App