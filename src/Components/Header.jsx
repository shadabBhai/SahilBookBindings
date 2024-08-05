
import { Link } from "react-router-dom"
import { auth } from '../utils/Firebase'
import { signOut } from 'firebase/auth'
import { useNavigate } from 'react-router-dom'
import { useState } from "react"

const Hearder = () => {

    const navigate = useNavigate()
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };
    const handleLogout = () => {

        signOut(auth).then(() => {
            // Sign-out successful.
            navigate("/")
        }).catch((error) => {
            // An error happened.
            console.log(error.message)
        });
    }
    return (
        <nav className="bg-gray-800 p-4">
            <div className="container mx-auto flex justify-between items-center">
                {/* Left Side Logo */}
                <div className="flex-shrink-0 text-white text-xl font-bold">
                    <Link to="/">LOGO</Link>
                </div>

                {/* Hamburger Menu Icon */}
                <div className="md:hidden">
                    <button
                        onClick={toggleMenu}
                        type="button"
                        className="text-gray-300 hover:text-white focus:outline-none"
                    >
                        <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            {isOpen ? (
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            ) : (
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h16m-7 6h7"
                                />
                            )}
                        </svg>
                    </button>
                </div>

                {/* Middle Menu */}
                <div className={`hidden md:flex space-x-8`}>
                    <Link to="/layout/home" className="text-gray-300 hover:text-white">Home</Link>
                    <Link to="/layout/product" className="text-gray-300 hover:text-white">Products</Link>
                    <Link to="/layout/thesis" className="text-gray-300 hover:text-white">Thesis</Link>
                    <Link onClick={handleLogout} className="text-gray-300 hover:text-white">Logout</Link>

                </div>

                {/* Right Side Avatar */}

            </div>

            {/* Mobile Menu */}
            <div className={`md:hidden ${isOpen ? 'block' : 'hidden'}`}>
                <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                    <Link to="/layout/home" className="block text-gray-300 hover:text-white">Home</Link>
                    <Link to="/layout/product" className="block text-gray-300 hover:text-white">Products</Link>
                    <Link to="/layout/thesis" className="block text-gray-300 hover:text-white">Thesis</Link>
                    <Link onClick={handleLogout} className="block text-gray-300 hover:text-white">Logout</Link>
                </div>
            </div>
        </nav>

    )
}

export default Hearder