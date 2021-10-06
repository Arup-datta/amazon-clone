import React from 'react';
import "../styles/Home.css";
import amazonBackground from "../images/amazonBackground.jpg";

import Product from './Product';

function Home() {
    return (
        <div className = "home">
            <div className = "home__container">
               <img 
                    className="home__image"
                    src = {amazonBackground}
                    alt = ""
                />

                <div className="home__row">
                    {/* List of the products are rendered */}
                    {/* this one will have two components */}
                    <Product/>
                    <Product/>
                </div>

                <div className="home__row">
                    {/* List of the products are rendered */}
                    {/* this one will have three components */}
                </div>

                <div className="home__row">
                    {/* List of the products are rendered */}
                    {/* this one will have single component */}
                </div>

                

            </div>
        </div>
    )
}

export default Home
