import { useState } from 'react';

const Login = () => {
    const [isSignIn, SetIsSignIn] = useState(true)
    const [signInFormData, setSignInFormData] = useState({
        useremail: "",
        password: ""
    });
    const [signUpFormData, setSignUpFormData] = useState({
        username: "",
        useremail: "",
        password: ""
    })

    const handleChange = (e) => {
        const { name, value } = e.target;
        if (isSignIn) {
            setSignInFormData({
                ...signInFormData,
                [name]: value
            });
        } else {
            setSignUpFormData({
                ...signUpFormData,
                [name]: value
            });
        }

    };

    const signInHandleSubmit = (e) => {
        e.preventDefault();
        if (signInFormData.useremail.length > 0 && signInFormData.password.length > 0) {
            console.log('signInFormData:', signInFormData);
            setSignInFormData({
                useremail: "",
                password: ""
            })
        } else {
            console.log("Empty input")

        }
    };

    const signUpHandleSubmit = (e) => {
        e.preventDefault();
        if (signUpFormData.useremail.length > 0 && signUpFormData.useremail.length > 0 && signUpFormData.password.length > 0) {
            console.log('signUpFormData:', signUpFormData);
            setSignUpFormData({
                username: "",
                useremail: "",
                password: ""

            })
        } else {
            console.log("Empty input")

        }

    }


    const handleToggle = () => {
        SetIsSignIn(!isSignIn)


    }

    return (
        <div className="flex justify-center items-center h-screen bg-gray-100">
            <div className="box-content h-96 w-80 border bg-gray-200 rounded-lg shadow-md">
                <h1 className="text-center text-xl font-bold pt-4"> {isSignIn ? "Sign In" : "Sign Up"}</h1>
                <div className="mt-10 px-8">
                    <form onSubmit={isSignIn ? signInHandleSubmit : signUpHandleSubmit} className="flex flex-col">
                        {!isSignIn ?
                            <input
                                type="text"
                                id="userename"
                                name="username"
                                value={signUpFormData.username}
                                onChange={handleChange}
                                placeholder="Name"
                                className="mb-5 h-10 w-full rounded-md p-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            /> : <></>
                        }
                        <input
                            type="email"
                            id="useremail"
                            name="useremail"
                            value={isSignIn ? signInFormData.useremail : signUpFormData.useremail}
                            onChange={handleChange}
                            placeholder="Email"
                            className="mb-5 h-10 w-full rounded-md p-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        <input
                            type="password"
                            id="password"
                            name="password"
                            value={isSignIn ? signInFormData.password : signUpFormData.password}
                            onChange={handleChange}
                            placeholder="Password"
                            className="mb-5 h-10 w-full rounded-md p-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        <p className=" mt-4">
                            {isSignIn ? "New user?" : "Already have  an account ? "}
                            <button type="button" onClick={handleToggle} className="text-blue-500">
                                {!isSignIn ? "Sign In" : "Sign Up"}
                            </button>
                        </p>
                        <button
                            type="submit"
                            className="bg-red-500 hover:bg-red-600 text-white py-2 rounded-md mt-5"
                        >
                            {isSignIn ? "Sign In" : "Sign Up"}
                        </button>
                    </form>

                </div>
            </div>
        </div>
    );

};


export default Login;
