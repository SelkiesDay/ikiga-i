import React from "react";
import { useNavigate } from "react-router-dom";

function Congratulations() {
    const navigate = useNavigate();
    return (
        <div className="grid place-items-center min-h-screen text-center bg-gray-100">
            <div className="">
                <div className="mb-80">
                <h3 className="font-tsukimi font-bold text-3xl">Ikiga-i</h3>
                </div>
                <h1 className="font-gotu text-6xl mb-6">Congratulations</h1>
                <h3 className="font-gotu text-lg">
                    You have successfully created a new account
                </h3>
            </div>
        </div>
    );
}

export default Congratulations;
