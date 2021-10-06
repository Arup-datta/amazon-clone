import React from 'react';
import "../styles/Home.css";
import amazonBackground from "../images/amazonBackground.jpg"

function Home() {
    return (
        <div className = "home">
            <div className = "home__container">
               <img 
                    className="home__image"
                    src = {amazonBackground}
                    alt = ""
                />
            </div>
        </div>
    )
}

export default Home
