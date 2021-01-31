import data from '../data/data.js' 
import { CART_ADD_ITEM, CART_REMOVE_ITEM, CART_SAVE_PAYMENT_METHOD, CART_SAVE_SHIPPING_ADDRESS } from "../constants/cartConstants";

export const addToCart = (productId, qty, name) => (dispatch, getState) => {
    if (name === "favorites") {
        let dataa = data.favorites.find((x) => Number(x._id) === Number(productId));
        console.log('data:', dataa)
        dispatch({
            type: CART_ADD_ITEM,
            payload: {
                name: dataa.name,
                category: dataa.category,
                image: dataa.image,
                price: dataa.price,
                countInStock: dataa.countInStock,
                product: dataa._id,
                qty,
            }
        });
        localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems));
    }
    if (name === "newarrivals") {
        let dataa = data.newarrivals.find((x) => Number(x._id) === Number(productId));
        console.log('data:', dataa)
        dispatch({
            type: CART_ADD_ITEM,
            payload: {
                name: dataa.name,
                category: dataa.category,
                image: dataa.image,
                price: dataa.price,
                countInStock: dataa.countInStock,
                product: dataa._id,
                qty,
            }
        });
        localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems));
    }
    if (name === "tops") {
        let dataa = data.tops.find((x) => Number(x._id) === Number(productId));
        console.log('data:', dataa)
        dispatch({
            type: CART_ADD_ITEM,
            payload: {
                name: dataa.name,
                category: dataa.category,
                image: dataa.image,
                price: dataa.price,
                countInStock: dataa.countInStock,
                product: dataa._id,
                qty,
            }
        });
        localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems));
    }
    if (name === "shoes") {
        let dataa = data.shoes.find((x) => Number(x._id) === Number(productId));
        console.log('data:', dataa)
        dispatch({
            type: CART_ADD_ITEM,
            payload: {
                name: dataa.name,
                category: dataa.category,
                image: dataa.image,
                price: dataa.price,
                countInStock: dataa.countInStock,
                product: dataa._id,
                qty,
            }
        });
        localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems));
    }
    if (name === "accessories") {
        let dataa = data.accessories.find((x) => Number(x._id) === Number(productId));
        console.log('data:', dataa)
        dispatch({
            type: CART_ADD_ITEM,
            payload: {
                name: dataa.name,
                category: dataa.category,
                image: dataa.image,
                price: dataa.price,
                countInStock: dataa.countInStock,
                product: dataa._id,
                qty,
            }
        });
        localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems));
    }
};

export const removeFromCart = (productId) => (dispatch, getState) => { 
    dispatch({ type: CART_REMOVE_ITEM, payload: productId});
    localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems));
}

export const saveShippingAddress = (data) => (dispatch) => {
    dispatch({type: CART_SAVE_SHIPPING_ADDRESS, payload: data});
    localStorage.setItem('shippingAddress', JSON.stringify(data))
}

export const savePaymentMethod = (data) => (dispatch) => {
    dispatch({type: CART_SAVE_PAYMENT_METHOD, payload: data})
}
