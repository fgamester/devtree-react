import { Link } from "react-router-dom";

export default function RegisterView() {
  return (
    <>
      <div className="bg-black/50">
        <Link to='/'>
          <img src="/logo.svg" alt="devtree_logo" />
        </Link>
      </div>
      <nav>
        <p>You already registered? <Link to='/auth/login'>Log In</Link></p>

      </nav></>
  )
}
