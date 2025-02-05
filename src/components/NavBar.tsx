import { Link } from "react-router-dom";
import DevtreeLogo from "./icons/DevtreeLogo";

export default function NavBar() {
    return (
        <>
            <nav className="fixed top-0 left-0 right-0 bg-devtree-1 flex px-10">
                <Link to='/' className="py-3 block w-fit">
                    <DevtreeLogo className="text-4xl" title="Devtree logo" titleId="devtree-logo"/>
                </Link>
            </nav>
        </>
    )
}