import React from 'react';

import { createContext, useReducer, useState } from 'react';
import harryPotter from "../images/harryPotter.jpeg";


export const ProductContext = createContext();

function ProductProvider(props) {

    const initialState = [
        {
            name: 'Harry Potter',
            price: '1000',
            rating: 5,
           /// imgLink: "random string"
            img:harryPotter,
            id: 1
        },

        {
            name: "Game of Thrones",
            price: '1000',
            rating: 3,
            img: harryPotter,
            id: 2
        }
    ]
    
    const [state, setState] = useState(initialState); //// filled with dummy data --- all the data available

    const [checkoutData, setCheckoutData] = useState([]);

    const [price, setPrice] = useState(0)
  
    return (
        <ProductContext.Provider value = {{data : [state, setState], cardData: [checkoutData, setCheckoutData], totalPrice: [price, setPrice]}}>
            {props.children}
        </ProductContext.Provider>
    )
}

export default ProductProvider



