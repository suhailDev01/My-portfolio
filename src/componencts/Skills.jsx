import React from 'react'

const Skills = () => {
      const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Tailwind CSS",
  ];
  
  return (
  <section
      id="skills"
      className="bg-slate-900 px-5 py-24"
    >
      <div className="mx-auto max-w-6xl">

        <div className="mb-12 text-center">
          <p className="font-semibold text-cyan-400">
            MY SKILLS
          </p>

          <h2 className="mt-2 text-4xl font-bold">
            Technologies I Work With
          </h2>
        </div>

        <div className="grid grid-cols-2 gap-5 sm:grid-cols-3 md:grid-cols-5">

          {skills.map((skill) => (
            <div
              key={skill}
              className="rounded-xl border border-slate-800 bg-slate-950 p-6 text-center transition hover:border-cyan-400"
            >
              {skill}
            </div>
          ))}

        </div>

      </div>
    </section>

  )
}

export default Skills