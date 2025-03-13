import React from "react";

const Navbar = () => {
    return (
        <nav className="bg-white shadow-md p-4 flex justify-between items-center">
            <h1 className="text-xl font-bold">Bartending Co.</h1>
            <button className="bg-orange-500 text-white px-4 py-2 rounded">Get a Quote</button>
        </nav>
    );
};

export default Navbar;
