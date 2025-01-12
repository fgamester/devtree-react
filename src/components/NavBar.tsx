import { Link } from "react-router-dom";
import DevtreeLogo from "./icons/DevtreeLogo";

export default function NavBar() {
    return (
        <>
            <nav className="bg-black/50 flex">

                <Link to='/' className=" p-3 block w-fit">
                    <DevtreeLogo className=" text-4xl" title="Devtree logo" titleId="devtree-logo"/>
                </Link>
            </nav>
        </>
    )
}
