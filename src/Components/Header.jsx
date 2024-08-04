
import { Link } from "react-router-dom"
import { auth } from '../utils/Firebase'
import { signOut } from 'firebase/auth'
import { useNavigate } from 'react-router-dom'

const Hearder = () => {

    const navigate = useNavigate()
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

                {/* Middle Menu */}
                <div className="hidden md:flex space-x-8">
                    <Link to="/layout/home" className="text-gray-300 hover:text-white">Home</Link>
                    <Link to="/layout/product" className="text-gray-300 hover:text-white">Products</Link>
                    <Link to="/layout/thesis" className="text-gray-300 hover:text-white">Thesis</Link>
                </div>

                {/* Right Side Avatar */}
                <div className="flex-shrink-0">
                    <Link onClick={handleLogout} className="text-gray-300 hover:text-white">Logout</Link>
                </div>
            </div>
        </nav>

    )
}

export default Hearder