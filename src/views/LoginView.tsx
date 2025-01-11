import { Link } from "react-router-dom";

export default function LoginView() {
  return (
    <>
      <nav className="bg-black/50">
        <Link to='/'>
          <img src="/logo.svg" alt="devtree_logo" />
        </Link>
      </nav>
      <nav>
        <p>Don't you have an account yet? <Link to='/auth/register'>Sign Up</Link></p>
      </nav>
    </>
  )
}
