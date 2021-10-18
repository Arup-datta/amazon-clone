import React from 'react';
import "../styles/Product.css";


import harryPotter from "../images/harryPotter.jpeg";

function Product({call, id, name, price, img, rating, type}) {

    const upLift = () => {
        call(id);
    }

    return (
        <div className="product">
            <div className="product__info">
                {/* Contains product information, price and rating */}
                <p> {name} </p>
                <p className="product__price"> 
                    <small> $ </small>
                    <strong> {price} </strong>
                </p>

                <p className="product__rating">
                     {rating}🌟 stars
                </p>
            </div>
            
            <img src = {img} alt= "" />
            {
                // remove button is calling uplift, change it later
                type == "add"? <button onClick = {upLift} className="product__button"> Add to basket </button> : <button onClick = {upLift} className="product__button">
                Remove from basket </button>
            }
        </div>
    )
}

export default Product
