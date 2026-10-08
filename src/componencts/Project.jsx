import React from 'react'

const Project = () => {

     const projects = [
    {
      id: 1,
      title: "Fintrack pro",
      description:
        "A responsive finance management app for tracking income, expenses, and transactions through a clean and interactive dashboard.",
      technologies: ["HTML", "CSS","JavaScript"],
      image:"fintrack.png (2).png",
      link:"https://cohort30-assignment7-fintrack.vercel.app/"
    },

    {
      id: 2,
      title: "Task Manager",
      description:
        "A responsive task management app built with HTML, CSS & JavaScript for creating, editing, searching, and tracking tasks..",
      technologies: ["HTML", "CSS","JavaScript"],
       image:"taskmanager.jpg.png",
      link:"https://cohort30-assignment6-task-manager.vercel.app/"
    },

    {
      id: 3,
      title: "Productivity Dashboard",
      description:
        "A productivity dashboard built with HTML, Tailwind CSS & JavaScript featuring Todo List, Daily Planner, Weather, Pomodoro Timer, Daily Goals, and motivational quotes.",
      technologies: ["HTML", "CSS","JavaScript"],
      image:"produdctivity.jpg.png",
      link:"https://cohort30-productivity.vercel.app/"
    },
  ];
    
  return (
      <section
      id="projects"
      className="px-5 py-24"
    >
      <div className="mx-auto max-w-6xl">

        <div className="mb-12 text-center">
          <p className="font-semibold text-cyan-400">
            MY WORK
          </p>

          <h2 className="mt-2 text-4xl font-bold">
            Featured Projects
          </h2>
        </div>

        <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-3">

          {projects.map((project) => (
            <div
              key={project.id}
              className="overflow-hidden rounded-2xl border border-slate-800 bg-slate-900 transition hover:-translate-y-2"
            >

              <div className="flex h-48 items-center justify-center bg-slate-800">
                <span className="text-slate-500">
                <img src={project.image} alt="" />
                </span>
              </div>

              <div className="p-6">

                <h3 className="text-xl font-bold">
                  {project.title}
                </h3>

                <p className="mt-3 text-slate-400">
                  {project.description}
                </p>

                <div className="mt-5 flex flex-wrap gap-2">

                  {project.technologies.map((technology) => (
                    <span
                      key={technology}
                      className="rounded-full bg-slate-800 px-3 py-1 text-sm"
                    >
                      {technology}
                    </span>
                  ))}

                </div>

                <button
               onClick={() => window.open(project.link, "_blank")}
                className="mt-6 text-cyan-400 transition hover:text-cyan-300">
                  View Project →
                </button>

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>

  )
}

export default Project