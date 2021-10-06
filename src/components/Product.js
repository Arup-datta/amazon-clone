import React from 'react';
import "../styles/Product.css";


import harryPotter from "../images/harryPotter.jpeg";

function Product() {
    return (
        <div className="product">
            <div className="product__info">
                {/* Contains product information, price and rating */}
                <p> Harry Potter and the philosopher's stone </p>
                <p className="product__price"> 
                    <small>$</small>
                    <strong>10.50</strong>
                </p>

                <p className="product__rating">
                     ⭐
                </p>
            </div>
            
            <img src = {harryPotter} alt= "" />

            <button className="product__button">
                Add to basket
            </button>
        </div>
    )
}

export default Product
