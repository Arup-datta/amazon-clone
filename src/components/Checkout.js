import React from 'react'
import "../styles/Checkout.css";

import midnightSunNorway from "../images/midnightSunNorway.jpg";

import Product from './Product';

import {useContext} from 'react';
import { ProductContext } from './ProductProvider';

function Checkout() {

   //// const [state, setState] = useContext(ProductContext);
    const {data, cardData} = useContext(ProductContext);
    const [checkoutData, setCheckoutData] = cardData;

    // const removeFromCart = (id) => {
    //     let ara = checkoutData.filter(myFunction);
    //    /// setFinalData(ara);
    //     setCheckoutData(ara);
    //     function myFunction(cartItem) {
    //         return cartItem.id != id;
    //     }
    // }


    return (
        <div className = "checkout">
            
            <div className="checkout__left">

                <img className="checkout__ad" src = {midnightSunNorway} alt = ""/>

                <div>
                    <h2 className="checkout__title">
                        Your shopping Basket
                    </h2>

                    {/* the components will be here */}
                </div>
                {/* After 1:20 pm */}
                <div className = "checkout__row">
                    {/* checkout row */}
                        {checkoutData.length == 0 ? <div> No items added </div> : <div> ... </div> }
                    
                    {
                        checkoutData.map(currentState => (
                           /// if(currentState.inBasket == 1) (
                                <Product id = {currentState.id} name = {currentState.name} price = {currentState.price} rating = {currentState.rating} img = {currentState.img} type = "remove"/>
                           /// )
                        ))
                    }
                </div>

            </div>

            <div className="checkout__right">
                Total price: 0
               {/* total price will be here */}
            </div>
        </div>
    )
}

export default Checkout
