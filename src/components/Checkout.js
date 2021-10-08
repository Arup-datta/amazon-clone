import React from 'react'
import "../styles/Checkout.css";

import midnightSunNorway from "../images/midnightSunNorway.jpg";

function Checkout() {
    return (
        <div className = "checkout">
            <div className="checkout__left">
                <img className="checkout__ad" src = {midnightSunNorway} alt = ""/>
            </div>

            <div className="checkout__right">
                checkout right
            </div>
        </div>
    )
}

export default Checkout
