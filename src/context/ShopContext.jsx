import React, { createContext, useState } from "react";
import all_product from '../components/Assets/all_product'
export const ShopContext = createContext(null)

let getDefaultCart = ()=>{
    let cart = {}
    for(let index = 0 ; index < all_product.length + 1;index++){
        cart[index]=0
    }

    return cart
}




const ShopContextProvider = (props) => {
    const [cartItems, setCartItems] = useState(getDefaultCart());

    const addToCart = (itemId) => {
        setCartItems((prev) => ({
            ...prev,
            [itemId]: prev[itemId] + 1,
        }));
        console.log(cartItems);
    };

    let removeCart = (itemId) => {
        setCartItems((prev) => ({
            ...prev,
            [itemId]: prev[itemId] - 1,
        }));
    };

    let getTotalCartAmount = () => {
        let totalAmount = 0;
        for (const item in cartItems) {
            if (cartItems[item] > 0) {
                let itemInfo = all_product.find(
                    (product) => product.id === Number(item)
                );
                totalAmount += cartItems[item] * itemInfo.new_price;
            }
        }
        return totalAmount;
    };

    let getTotalCartItems = () => {
        let totalItem = 0;
        for (let item in cartItems) {
            if (cartItems[item] > 0) {
                totalItem += cartItems[item];
            };
        }
        return totalItem;
    };

    const contextValue = {
        getTotalCartItems,
        getTotalCartAmount,
        all_product,
        cartItems,
        addToCart,
        removeCart,
    };

    return (
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    );
};

export default ShopContextProvider;
