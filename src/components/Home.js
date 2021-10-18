import React from 'react';
import "../styles/Home.css";
import amazonBackground from "../images/amazonBackground.jpg";

import Product from './Product';

import {useContext, useEffect, useState} from 'react';
import { ProductContext } from './ProductProvider';

function Home() {

    const {data, cardData, totalPrice} = useContext(ProductContext);
    const[state, setState] = data;
    const[checkoutData, setCheckoutData] = cardData; /// locally set
    const[price, setPrice] = totalPrice; 

    useEffect(() => {
        console.log("Use effect called")
    });

    const addToCart = (id) => {
        /// preserve the existing checkoutData and then add new data to the list
        //console.log("State: " + state.length);
        // console.log("Click hoy?");
        // console.log("ID!");
        //console.log("ID: " + id);
        // console.log("printing done!");
        // console.log(checkoutData.length);
        // console.log("ta ache");

       // console.log(state)
        /// add to checkout data
       
        // state.map(currentState => (
        //     ///{currentState.id == id ? setCheckoutData([...checkoutData, currentState]) : setCheckoutData(checkoutData)}
        //    // console.log((currentState.id == id) + " " + id)
        //     (currentState.id == id) ?  setCheckoutData([...checkoutData, currentState]) : setCheckoutData([...checkoutData])
        //    // console.log(currentState)
        //     ///setCheckoutData([currentState])
        // ))

        const temp = state.filter(filterMethod)

        function filterMethod(currentObject) {
            if(currentObject.id == id) {
                return currentObject;
            }
        }
        
        console.log(price)
        setPrice(price + parseInt(temp[0].price))
        console.log(price)
        // console.log("temp printed")
        // console.log(temp)
        // console.log("temp printing done")
       // console.log(checkoutData.length);
        setCheckoutData([...checkoutData, temp[0]])
      ///  console.log(checkoutData)
       // console.log("YAAY");
    }

    // const removeFromCart = (id) => {
    //     console.log("Remove from Cart called")
    // }

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
