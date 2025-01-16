import React from "react";
import { useNavigate } from "react-router-dom";

function Login() {
    const navigate = useNavigate();

    return (
        <div className="login flex flex-col items-center min-h-screen px-4 py-8">
            {/* Logo/Header Section */}
            <header className="mb-8 text-center">
                <h4 className="font-tsukimi font-bold text-2xl mb-32">Ikiga-i</h4>
                <h1 className="font-gotu text-6xl mb-8">Log in</h1>
            </header>

            {/* Login Form Section */}
            <form className="w-full max-w-sm flex flex-col items-center">
                <label htmlFor="email" className="font-gotu text-lg mb-2">Email</label>
                <input
                    id="email"
                    type="text"
                    className="font-gotu w-full p-2 mb-4 border border-gray-500  bg-gray-300 rounded-xl"
                />

                <label htmlFor="password" className="font-gotu text-lg mb-2">Password</label>
                <input
                    id="password"
                    type="password"
                    className="font-gotu w-full p-2 mb-6 border border-gray-500  bg-gray-300 rounded-xl"
                />

                <button
                    type="button"
                    className="font-gotu bg-gray-400 text-white py-2 px-6 rounded hover:bg-gray-600"
                    onClick={() => navigate("/Congratulations")}
                >
                    Log in
                </button>
            </form>

       
            <div className="alternative flex items-center my-6">
               
                <p className="font-gotu mx-2">or</p>
                
            </div>

           
            <div className="sign-up">
                <button
                    id="sign-up"
                    className="font-gotu  bg-gray-500  text-white py-2 px-6 rounded hover:bg-gray-600"
                    onClick={() => navigate("/Signup")}
                >
                    Sign up
                </button>
               
            </div>
        </div>
    );
}

export default Login;
