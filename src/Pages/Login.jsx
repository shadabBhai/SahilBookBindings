import { useState } from 'react';

const Login = () => {
    const [isSignIn, SetIsSignIn] = useState(false)
    const [formData, setFormData] = useState({
        useremail: '',
        password: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormData({
            ...formData,
            [name]: value
        });

    };

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log('FormData:', formData);
        setFormData({
            useremail: "",
            password: ""
        })
    };

    const handleToggle = () => {
        SetIsSignIn(!isSignIn)
        console.log("signUp")
    }

    return (
        <div className="flex justify-center items-center h-screen bg-gray-100">
            <div className="box-content h-96 w-80 border bg-gray-200 rounded-lg shadow-md">
                <h1 className="text-center text-xl font-bold pt-4">Sign In</h1>
                <div className="mt-10 px-8">
                    <form onSubmit={handleSubmit} className="flex flex-col">

                        <input
                            type="email"
                            id="useremail"
                            name="useremail"
                            value={formData.useremail}
                            onChange={handleChange}
                            placeholder="Email"
                            className="mb-5 h-10 w-full rounded-md p-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        <input
                            type="password"
                            id="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            placeholder="Password"
                            className="mb-5 h-10 w-full rounded-md p-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        <p className=" mt-4">
                            New user? <button onClick={handleToggle} className="text-blue-500">Sign Up</button>
                        </p>
                        <button
                            type="submit"
                            className="bg-red-500 hover:bg-red-600 text-white py-2 rounded-md mt-5"
                        >
                            Sign In
                        </button>
                    </form>

                </div>
            </div>
        </div>
    );
};

export default Login;
