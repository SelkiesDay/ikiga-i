import React from "react";
import {useNavigate} from "react-router-dom";
import styles from "./Welcome.module.css";


function Welcome (){
    const navigate = useNavigate();

    return(
        
        <div className={styles.container}>
            
            <div className={styles.frame}>
                <h4 className={styles.title + " font-tsukimi font-bold text-8xl"}>Ikiga-i</h4>
                <p className={styles.p + " font-gotu"}>old values - new lifestyle</p>
                {/* <div className={styles.top-branch}><img src="" alt="top-branch" /></div> */}
                <h1 className={styles.subtitle + " font-gotu"}>Welcome to your ikigai journey</h1>
                <button className={styles.startButton + " font-gotu px-6 py-3 bg-gray-300 rounded-md hover:bg-gray-500 transition duration-300"} onClick={()=> navigate('/ikigaiDescription')}>get started</button>
                {/* <div className={styles.lower-branch}><img src="" alt="lower-branch" /></div> */}
            </div>
            <div className={styles.team + " font-gotu"}>DEVELOPED BY TEAM ZEN</div>
        </div>
        
        
    )
}

export default Welcome