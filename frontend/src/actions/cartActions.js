import Axios from "axios";
import { CARD_ADD_ITEM, CARD_REMOVE_ITEM } from "../constants/cartConstant";

export const addToCart = (productId, qty) => async(dispatch, getState) => {
    const { data } = await Axios.get(`/api/products/${productId}`);
    dispatch({
        type: CARD_ADD_ITEM,
        payload: {
            name: data.name,
            image: data.image,
            price: data.price,
            countInStock: data.countInStock,
            product: data._id,
            qty,
        },
    });
    localStorage.setItem("cartItems", JSON.stringify(getState().cart.cartItems));
};

export const removeFromCart = (productId) => (dispatch, getState) => {
    dispatch({ type: CARD_REMOVE_ITEM, payload: productId });
    localStorage.setItem("cartItems", JSON.stringify(getState().cart.cartItems));
};