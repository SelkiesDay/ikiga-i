import React from "react";
import { useNavigate } from "react-router-dom";

function Login() {
    const navigate = useNavigate();

    return (
        <div className="login flex flex-col items-center min-h-screen px-4 py-8">
           
            <header className="mb-8 text-center">
                <h4 className="font-tsukimi  text-2xl mb-28 mt-2 ">Ikiga-i</h4>
                <h1 className="font-gotu text-6xl mb-8">Log in</h1>
            </header>

           
            <form className="w-full max-w-sm flex flex-col items-center">
                <label htmlFor="email" className="font-gotu text-lg mb-2 ">Email</label>
                <input
                    id="email"
                    type="text"
                    className="font-gotu w-full p-2 mb-10 border  bg-gray-300 rounded-2xl"
                />

                <label htmlFor="password" className="font-gotu text-lg mb-2">Password</label>
                <input
                    id="password"
                    type="password"
                    className="font-gotu w-full p-2 mb-20 border   bg-gray-300 rounded-2xl"
                />

                <button
                    type="button"
                    className="font-gotu bg-gray-200 text-black  py-2 px-8 rounded-xl hover:bg-gray-600 mb-16"
                    onClick={() => navigate("/Congratulations")}
                >
                    Log in
                </button>
            </form>

       
            <div className="alternative flex items-center my-6 mb-20">
               
                <p className="font-gotu mx-2 text-black">or</p>
                
            </div>

           
            <div className="sign-up">
                <button
                    id="sign-up"
                    className="font-gotu  bg-gray-200  text-black py-2 px-8 rounded-xl hover:bg-gray-600 mb-2"
                    onClick={() => navigate("/Signup")}
                >
                    Sign up
                </button>
                <h3 className="font-gotu text-lg -mx-14 mt-6 pl-4 text-gray-400">To create an account</h3>
               
            </div>
        </div>
    );
}

export default Login;
