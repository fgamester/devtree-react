import { Link } from "react-router-dom";

export default function RegisterView() {
  return (
    <>
      <nav>
        <p>You already registered? <Link to='/auth/login'>Log In</Link></p>
      </nav>
    </>
  )
}
