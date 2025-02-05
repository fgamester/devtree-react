import { Link } from "react-router-dom";

export default function RegisterView() {
  return (
    <>
      <div className=" flex flex-col justify-center items-center">
        <form
          onSubmit={() => { }}
          className="bg-white px-5 py-10 sm:rounded-xl space-y-5 sm:my-5 w-full sm:w-2/3 md:w-2/4 lg:w-2/5 xl:w-2/6"
        >
          <div className="grid grid-cols-1 space-y-3">
            <label htmlFor="name" className="text-2xl text-slate-500">Nombre</label>
            <input
              id="name"
              type="text"
              placeholder="Tu Nombre"
              className="bg-slate-100 border-none p-3 rounded-lg placeholder-slate-400"
            />
          </div>
          <div className="grid grid-cols-1 space-y-3">
            <label htmlFor="email" className="text-2xl text-slate-500">E-mail</label>
            <input
              id="email"
              type="email"
              placeholder="Email de Registro"
              className="bg-slate-100 border-none p-3 rounded-lg placeholder-slate-400"
            />
          </div>
          <div className="grid grid-cols-1 space-y-3">
            <label htmlFor="handle" className="text-2xl text-slate-500">Handle</label>
            <input
              id="handle"
              type="text"
              placeholder="Nombre de usuario: sin espacios"
              className="bg-slate-100 border-none p-3 rounded-lg placeholder-slate-400"
            />
          </div>
          <div className="grid grid-cols-1 space-y-3">
            <label htmlFor="password" className="text-2xl text-slate-500">Password</label>
            <input
              id="password"
              type="password"
              placeholder="Password de Registro"
              className="bg-slate-100 border-none p-3 rounded-lg placeholder-slate-400"
            />
          </div>

          <div className="grid grid-cols-1 space-y-3">
            <label htmlFor="password_confirmation" className="text-2xl text-slate-500">Repetir Password</label>
            <input
              id="confirmPassword"
              type="password"
              placeholder="Repetir Password"
              className="bg-slate-100 border-none p-3 rounded-lg placeholder-slate-400"
            />
          </div>

          <input
            type="submit"
            className="bg-cyan-400 p-3 text-lg w-full uppercase text-slate-600 rounded-lg font-bold cursor-pointer"
            value='Crear Cuenta'
          />
          <p className="!mt-2 text-center">
            You already registered?
            <Link className="underline underline-offset-2 hover:no-underline ps-2" to='/auth/login'>Log In</Link>
          </p>
        </form>
      </div>
    </>
  )
}
