import React from 'react'
import "../styles/Checkout.css";

import midnightSunNorway from "../images/midnightSunNorway.jpg";

import Product from './Product';

import {useContext} from 'react';
import { ProductContext } from './ProductProvider';

function Checkout() {

   //// const [state, setState] = useContext(ProductContext);
    const {data, cardData, totalPrice} = useContext(ProductContext);
    const [checkoutData, setCheckoutData] = cardData;
    const [price, setPrice] = totalPrice;

    const removeFromCart = async (id) => {
        let temp = checkoutData.find(myFunction1);

        function myFunction1(cartItem) {
            if(cartItem.id == id) {
                return cartItem;
            }
        }

        // console.log("Object that need to be deleted~")
        // console.log(temp)

        let ara = checkoutData.filter(myFunction);
       /// setFinalData(ara);
        function myFunction(cartItem) {
            return cartItem.id != id
        }

        /// Reduce the price
        setCheckoutData(ara);
        setPrice(price - temp.price);
    }

    // const removeFromCart = (id) => {
    //     console.log("Remove from Cart called")
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
                                <Product call = {removeFromCart} id = {currentState.id} name = {currentState.name} price = {currentState.price} rating = {currentState.rating} img = {currentState.img} type = "remove"/>
                           /// )
                        ))
                    }
                </div>

            </div>

            <div className="checkout__right">
                Total price: {price}
               {/* total price will be here */}
            </div>
        </div>
    )
}

export default Checkout
