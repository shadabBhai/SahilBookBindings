import React from 'react'
import { Link } from "react-router-dom"

const Hearder = () => {
    return (
        <nav className="bg-gray-800 p-4">
            <div className="container mx-auto flex justify-between items-center">
                {/* Left Side Logo */}
                <div className="flex-shrink-0 text-white text-xl font-bold">
                    <Link to="/">LOGO</Link>
                </div>

                {/* Middle Menu */}
                <div className="hidden md:flex space-x-8">
                    <Link to="/" className="text-gray-300 hover:text-white">Home</Link>
                    <Link to="/product" className="text-gray-300 hover:text-white">Products</Link>
                    <Link to="/thesis" className="text-gray-300 hover:text-white">Thesis</Link>
                </div>

                {/* Right Side Avatar */}
                <div className="flex-shrink-0">
                    <img className="h-8 w-8 rounded-full" src="https://via.placeholder.com/150" alt="Avatar" />
                </div>
            </div>
        </nav>

    )
}

export default Hearder