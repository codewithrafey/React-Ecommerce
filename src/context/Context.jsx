import React, { createContext, useState } from 'react'
import all_product from '../assets/all_product'
import { toast } from 'react-toastify';


export const Context = createContext(null);

const getDefaultCart = () => {
    let cart = {};
    for (let index = 0; index < all_product.length+1; index++) {
        cart[index] = 0;
    }
    return cart;
}
const ContextProvider = (props) => {
    const [cartItems, setCartItems] = useState(getDefaultCart());
    
    const addToCart = (itemId) =>{
        setCartItems((prev) => ({...prev,[itemId]:prev[itemId] +1}))
    }
    const removeFromCart = (itemId) =>{
        setCartItems((prev) => ({...prev,[itemId]:prev[itemId] -1}))
        if (cartItems[itemId] <= 1) {
        toast.info("Item removed from cart!", {
            position: "top-right",
            autoClose: 2000,
        });
        }
    }
    const totalCartAmount = () =>{
        let totalAmount = 0;
        for (const items in cartItems) {
            if(cartItems[items] > 0){
                let itemInfo = all_product.find((product) => product.id === Number(items));
                totalAmount += itemInfo.price_new * cartItems[items]; 
            } 
        }
        return totalAmount;
    }
    const totalCartItems = () => {
        let totalItem = 0;
        for (const items in cartItems) {
            if (cartItems[items] > 0) {
                totalItem += cartItems[items];
            }
        }
        return totalItem;
    }
    const contextValue = {all_product, cartItems, addToCart, removeFromCart, totalCartAmount, totalCartItems};

    return (
        <Context.Provider value={contextValue}>
            {props.children}
        </Context.Provider>
    )
}

export default ContextProvider;