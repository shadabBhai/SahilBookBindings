import { useState, useRef } from 'react';
import { checkValidFormData } from '../utils/Validate';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../utils/Firebase';

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
    const email = useRef(null)
    const password = useRef(null)
    const [errorMessage, setErrorMessage] = useState(null)


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
        // using useRef()
        const message = checkValidFormData(email.current.value, password.current.value)
        setErrorMessage(message)
        if (message) return
        signInWithEmailAndPassword(auth, email.current.value, password.current.value)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                console.log(user)

            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;

                setErrorMessage(errorCode + "-" + errorMessage)
            });
        setSignInFormData({
            useremail: "",
            password: ""
        })


    };

    const signUpHandleSubmit = (e) => {
        e.preventDefault();
        const message = checkValidFormData(signUpFormData.useremail, signUpFormData.password)
        setErrorMessage(message)
        if (message) {
            setErrorMessage(message)
            return
        }
        createUserWithEmailAndPassword(auth, signUpFormData.useremail, signUpFormData.password)
            .then((userCredential) => {
                // Signed up 
                const user = userCredential.user;
                console.log(user)
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                setErrorMessage(errorCode + "-" + errorMessage)
            });
        setSignUpFormData({
            username: "",
            useremail: "",
            password: ""
        })

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
                        {!isSignIn && (
                            <input
                                type="text"
                                id="userename"
                                name="username"
                                value={signUpFormData.username}
                                onChange={handleChange}
                                placeholder="Full Name"
                                className="mb-5 h-10 w-full rounded-md p-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />)
                        }
                        <input
                            type="text"
                            ref={email}
                            id="useremail"
                            name="useremail"
                            value={isSignIn ? signInFormData.useremail : signUpFormData.useremail}
                            onChange={handleChange}
                            placeholder="Email"
                            className="mb-5 h-10 w-full rounded-md p-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />

                        <input
                            type="password"
                            ref={password}
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
                        <p className="text-red-800">{errorMessage}</p>
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
