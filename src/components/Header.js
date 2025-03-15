import React from "react";

import {Link} from "react-router-dom";

// import Logo from "../assets/img/logo.svg";

const Header = () => {
    return (
        <header className="py-6 mb-12 border-b">
            <div className="container mx-auto flex justify-between items-center font-bold text-gray-800" >
                <div className="flex justify-between items-center gap-6">
                    <Link to="/">
                        {/* <img src={Logo} alt="logo"/> */}
                        <p className="text-grey-700 hover:text-gray-900 text-3xl font-bold transition">Build</p>
                    </Link>
                    <Link className="px-4 py-3 bg-gray-600 text-white rounded-lg" to="">Rent</Link>
                    <Link className="px-4 py-3 hover:bg-gray-500 hover:text-gray-900 rounded-lg" to="">Buy</Link>
                    <Link className="px-4 py-3 hover:bg-gray-500 hover:gray-gray-900  rounded-lg"  to="">Sell</Link>
                    <Link className="px-4 py-3 hover:bg-gray-500 hover:text-gray-900  rounded-lg"  to="">Manage Property</Link>
                    <Link className="px-4 py-3 hover:bg-gray-500 hover:text-gray-900  rounded-lg"  to="">Resources</Link>
                </div>
                <div className="flex items-center gap-6 ">
                    <Link className="border-2 text-gray-500  px-4 py-3 rounded-lg hover:bg-gray-800 hover:text-white transition" to="">Log in</Link>
                    <Link className="bg-gray-500 hover:bg-gray-800 text-white px-4 py-3 rounded-lg transition " to="">Sign up</Link>
                </div>

            </div>
        </header>
    )
}

export default Header;