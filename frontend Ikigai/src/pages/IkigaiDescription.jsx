import React from "react";
import {useNavigate} from "react-router-dom";
import  "./IkigaiDescription.module.css";

function IkigaiDescription (){
    const navigate = useNavigate();

    return (
        <div>
            <section className="firstScreen flex flex-col items-center min-h-screen px-4">
                <h4 className="font-tsukimi font-bold text-7xl ">Ikiga-i</h4>
                <p className="font-gotu text-lg">Ikigai is a Japanese concept that translates to "reason for being."<br></br>
                    It represents the intersection of four elements:<br></br>
                    what you love, 
                    what you are good at, what the world needs,<br></br>
                    and what you can be paid for.<br></br>
                    Finding your ikigai brings purpose, fulfillment, and balance to life, <br></br>
                    blending passion, mission, vocation, and profession into a harmonious existence.
                </p>
                <button className="font-gotu px-6 py-3 bg-gray-300 rounded-md hover:bg-gray-500 transition duration-300"  onClick={()=>navigate("/login")}>continue</button>
            </section>
        </div>

    )
}

export default IkigaiDescription;




