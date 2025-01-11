import { Link } from "react-router-dom";
import DevtreeLogo from "./icons/DevtreeLogo";

export default function NavBar() {
    return (
        <>
            <nav className="bg-black/50">
                <Link to='/'>
                    <DevtreeLogo className=" text-9xl" />
                    <img src="/logo.svg" alt="devtree_logo" className=" " />
                </Link>
            </nav>
        </>
    )
}
