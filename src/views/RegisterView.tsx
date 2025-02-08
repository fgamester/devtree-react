import { Link } from "react-router-dom";
import { useForm } from 'react-hook-form';
import type { RegisterForm } from '../types'
import ValidationError from "../components/ValidationError";

export default function RegisterView() {
  const initialValues : RegisterForm = {
    name: '',
    email: '',
    handle: '',
    password: '',
    password_confirmation: '',
  };

  const { register, watch, handleSubmit, formState: { errors } } = useForm({
    defaultValues: initialValues
  });

  const password = watch('password');

  const handleRegister = (formData : RegisterForm) => {
    console.log(formData)
  };

  return (
    <>
      <form
        onSubmit={handleSubmit(handleRegister)}
        className="bg-white px-5 py-10 sm:mx-auto sm:rounded-xl space-y-5 sm:my-5 w-full sm:w-3/4 md:w-3/5 lg:w-1/2 xl:w-5/12 2xl:w-1/3 min-h-remain sm:min-h-0"
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
          {errors.name && <ValidationError>{errors.name.message}</ValidationError>}
        </div>
        <div className="grid grid-cols-1 space-y-3">
          <label htmlFor="email" className="text-2xl text-slate-500">E-mail</label>
          <input
            id="email"
            type="email"
            placeholder="email@email.com"
            className="bg-slate-100 border-none p-3 rounded-lg placeholder-slate-400"
            {...register('email', {
              required: 'The email is required',
              pattern: {
                value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/,
                message: 'Email is not valid'
              }
            })}
          />
          {errors.email && <ValidationError>{errors.email.message}</ValidationError>}
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
          {errors.handle && <ValidationError>{errors.handle.message}</ValidationError>}
        </div>
        <div className="grid grid-cols-1 space-y-3">
          <label htmlFor="password" className="text-2xl text-slate-500">Password</label>
          <input
            id="password"
            type="password"
            placeholder="********"
            className="bg-slate-100 border-none p-3 rounded-lg placeholder-slate-400"
            {...register('password', {
              required: 'The password is required',
              minLength: {
                value: 8,
                message: 'The password must have between 8 and 25 characters'
              },
              maxLength: {
                value: 25,
                message: 'The password must have between 8 and 25 characters'
              }
            })}
          />
          {errors.password && <ValidationError>{errors.password.message}</ValidationError>}
        </div>
        <div className="grid grid-cols-1 space-y-3">
          <label htmlFor="password_confirmation" className="text-2xl text-slate-500">Confirm Password</label>
          <input
            id="password_confirmation"
            type="password"
            placeholder="********"
            className="bg-slate-100 border-none p-3 rounded-lg placeholder-slate-400"
            {...register('password_confirmation', {
              required: 'You need to repeat the password',
              validate: (value) => value === password || "Passwords don't match"
            })}
          />
          {errors.password_confirmation && <ValidationError>{errors.password_confirmation.message}</ValidationError>}
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
    </>
  )
}
