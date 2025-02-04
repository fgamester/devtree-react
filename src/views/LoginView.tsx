import { Link } from "react-router-dom";

export default function LoginView() {
  return (
    <>
      <nav>
        <p>Don't you have an account yet? <Link to='/auth/register'>Sign Up</Link></p>
      </nav>
    </>
  )
}
