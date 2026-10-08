import React from 'react'
import {useForm} from 'react-hook-form'

const Contact = () => {
  const {register,
       handleSubmit,
       reset,
       formState:{errors}

  } = useForm();

  const formSubmit = (data) =>{
    console.log(data)
    reset()
  }
  return (
     <section
     

      id="contact"
      className="bg-slate-900 px-5 py-24"
    >
      <div className="mx-auto max-w-3xl">

        <div className="mb-10 text-center">
          <p className="font-semibold text-cyan-400">
            CONTACT
          </p>

          <h2 className="mt-2 text-4xl font-bold">
            Let's Work Together
          </h2>
        </div>

        <form
          onSubmit={handleSubmit(formSubmit)}
        className="space-y-5">

          <input
            type="text"
            {...register("name")
            }
            
            placeholder="Your Name"
            className="w-full rounded-lg border border-slate-700 bg-slate-950 px-5 py-4 outline-none focus:border-cyan-400"
          />

          <input
            type="email"
            {...register("email")}
            placeholder="Your Email"
            className="w-full rounded-lg border border-slate-700 bg-slate-950 px-5 py-4 outline-none focus:border-cyan-400"
          />

          <textarea
            rows="6"
            {...register("textarea")}
            placeholder="Your Message"
            className="w-full resize-none rounded-lg border border-slate-700 bg-slate-950 px-5 py-4 outline-none focus:border-cyan-400"
          />

          <button
            type="submit"
            className="w-full rounded-lg bg-cyan-400 py-4 font-bold text-slate-950 transition hover:bg-cyan-300"
          >
            Send Message
          </button>

        </form>

      </div>
    </section>

  )
}

export default Contact