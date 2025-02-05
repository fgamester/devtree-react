import { Link } from "react-router-dom";
import { useForm } from 'react-hook-form'
import ValidationError from "../components/ValidationError";

export default function RegisterView() {
  const { register, watch, handleSubmit, formState: { errors } } = useForm()

  console.log(errors)

  const handleRegister = () => {
    console.log(errors)
  }

  return (
    <>
      <div className=" flex flex-col justify-center items-center">
        <form
          onSubmit={handleSubmit(handleRegister)}
          className="bg-white px-5 py-10 sm:rounded-xl space-y-5 sm:my-5 w-full sm:w-2/3 md:w-2/4 lg:w-2/5 xl:w-2/6"
        >
          <div className="grid grid-cols-1 space-y-3">
            <label htmlFor="name" className="text-2xl text-slate-500">Name</label>
            <input
              id="name"
              type="text"
              placeholder="John Doe"
              className="bg-slate-100 border-none p-3 rounded-lg placeholder-slate-400"
              {...register('name', {
                required: 'The name is required'
              })}
            />
            {errors.name && <ValidationError message={String(errors.name?.message)} />}
          </div>
          <div className="grid grid-cols-1 space-y-3">
            <label htmlFor="email" className="text-2xl text-slate-500">E-mail</label>
            <input
              id="email"
              type="email"
              placeholder="email@email.com"
              className="bg-slate-100 border-none p-3 rounded-lg placeholder-slate-400"
              {...register('email', {
                required: 'The email is required'
              })}
            />
          </div>
          <div className="grid grid-cols-1 space-y-3">
            <label htmlFor="handle" className="text-2xl text-slate-500">Handle</label>
            <input
              id="handle"
              type="text"
              placeholder="johndoe"
              className="bg-slate-100 border-none p-3 rounded-lg placeholder-slate-400"
              {...register('handle', {
                required: 'The handle is required'
              })}
            />
          </div>
          <div className="grid grid-cols-1 space-y-3">
            <label htmlFor="password" className="text-2xl text-slate-500">Password</label>
            <input
              id="password"
              type="password"
              placeholder="********"
              className="bg-slate-100 border-none p-3 rounded-lg placeholder-slate-400"
              {...register('password', {
                required: 'The password is required'
              })}
            />
          </div>

          <div className="grid grid-cols-1 space-y-3">
            <label htmlFor="password_confirmation" className="text-2xl text-slate-500">Confirm Password</label>
            <input
              id="confirmPassword"
              type="password"
              placeholder="********"
              className="bg-slate-100 border-none p-3 rounded-lg placeholder-slate-400"
            />
          </div>

          <button
            type="submit"
            className=" bg-devtree-2 p-3 text-lg w-full uppercase text-white rounded-lg font-bold cursor-pointer"
            value='Crear Cuenta'
          >
            Create Account
          </button>
          <p className="!mt-2 text-center">
            You already registered?
            <Link className="underline underline-offset-2 hover:no-underline ps-2" to='/auth/login'>Log In</Link>
          </p>
        </form>
      </div>
    </>
  )
}
