import React from 'react'

const Home = () => {
  return (
   
    <section
      id="home"
      className="flex min-h-screen items-center px-5 pt-20"
    >
      <div className="mx-auto grid w-full max-w-6xl items-center gap-12 md:grid-cols-2">

        {/* Left Content */}
        <div>
          <p className="mb-3 font-semibold text-cyan-400">
            HELLO, I'M
          </p>

          <h1 className="text-5xl font-bold leading-tight sm:text-6xl">
            Suhail <span className="text-cyan-400">Ahamad</span>
          </h1>

          <h2 className="mt-5 text-2xl text-slate-300">
            Frontend Developer
          </h2>

          <p className="mt-6 max-w-lg leading-7 text-slate-400">
            I build responsive and interactive web applications
            using HTML, CSS, JavaScript, React and modern frontend
            technologies.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">

            <a
              href="#projects"
              className="rounded-lg bg-cyan-400 px-6 py-3 font-semibold text-slate-950 transition hover:bg-cyan-300"
            >
              View Projects
            </a>

            <a
              href="#contact"
              className="rounded-lg border border-slate-600 px-6 py-3 transition hover:border-cyan-400 hover:text-cyan-400"
            >
              Contact Me
            </a>

          </div>
        </div>

        {/* Profile */}
        <div className="flex justify-center">
          <div className="flex h-64 w-64 items-center justify-center rounded-full border-4 border-cyan-400 bg-slate-900 shadow-2xl sm:h-80 sm:w-80">
            <span className="text-7xl font-bold text-cyan-400">
              SA
            </span>
          </div>
        </div>

      </div>
    </section>
  )
}

export default Home