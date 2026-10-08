import React from 'react'

const Navbar = () => {
  return (
   <nav className="fixed top-0 left-0 z-50 w-full border-b border-slate-800 bg-slate-950/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">

        <a
          href="#home"
          className="text-2xl font-bold text-cyan-400"
        >
          Suhail.
        </a>

        <div className="hidden items-center gap-8 md:flex">
          <a href="#home" className="transition hover:text-cyan-400">
            Home
          </a>

          <a href="#skills" className="transition hover:text-cyan-400">
            Skills
          </a>

          <a href="#projects" className="transition hover:text-cyan-400">
            Projects
          </a>

          <a href="#contact" className="transition hover:text-cyan-400">
            Contact
          </a>
        </div>

        <a
          href="#contact"
          className="hidden rounded-full bg-cyan-400 px-5 py-2 font-semibold text-slate-950 transition hover:bg-cyan-300 sm:block"
        >
          Let's Talk
        </a>

      </div>
    </nav>
  )
}

export default Navbar