import { Link } from "react-router-dom";

export function HomeView() {
    return (
        <>
            <h1>Home</h1>
            <h3>Work in progress...</h3>
            <Link to='/auth/login'>Log In</Link>
            <br />
            <Link to='/auth/register'>Register</Link>
        </>
    )
}