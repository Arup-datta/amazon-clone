import React from 'react';
import "../styles/Home.css";
import amazonBackground from "../images/amazonBackground.jpg";

import Product from './Product';

import {useContext} from 'react';
import { ProductContext } from './ProductProvider';

function Home() {

    const {data, cardData} = useContext(ProductContext);
    const[state, setState] = data;
    const[checkoutData, setCheckoutData] = cardData;

    const addToCart = (id) => {
        /// preserve the existing checkoutData and then add new data to the list
        console.log("Click hoy?");
        console.log("ID!");
        console.log(id);
        console.log("printing done!");
        /// add to checkout data
        state.map(currentState => {
            currentState.id == id ? setCheckoutData([...checkoutData, currentState]) : setCheckoutData(checkoutData)
        })

        console.log(checkoutData.length);
        console.log("YAAY");
    }

    return (
        <div className = "home">
            <div className = "home__container">
               <img 
                    className="home__image"
                    src = {amazonBackground}
                    alt = ""
                />

                {/* <div className="home__row">
                    <Product/>
                    <Product/>
                </div>

                <div className="home__row">
                    <Product />
                    <Product />
                    <Product />
                    <Product />
                </div>

                <div className="home__row">
                    <Product />
                </div> */}

                <div className="home__row">
                    {/* {state.length} */}
                    {
                        state.map(currentState => (
                            <Product call = {addToCart} id = {currentState.id} name = {currentState.name} price = {currentState.price} img = {currentState.img} rating = {currentState.rating} type = {"add"}/>
                        ))
                    }
                </div>

            </div>
        </div>
    )
}

export default Home
