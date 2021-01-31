import Axios from "axios";
import data from '../data/data.js' 
import { PRODUCT_DETAILS_FAIL, PRODUCT_DETAILS_REQUEST, PRODUCT_LIST_FAIL, PRODUCT_LIST_REQUEST, PRODUCT_LIST_SUCCESS, PRODUCT_SEARCH_REQUEST, PRODUCT_SEARCH_SUCCESS, PRODUCT_SEARCH_FAIL } from "../constants/productConstants";

export const listProducts = () => async (dispatch) => {
    dispatch({
        type: PRODUCT_LIST_REQUEST,
    });
    try {
        // const { data } = await Axios.get('/api/favorites');
        // const { data } = await Axios.get('/api/favorites');
        dispatch({ type: PRODUCT_LIST_SUCCESS, payload: data });

    } catch (error) {
        dispatch({type: PRODUCT_LIST_FAIL, payload: error.message})
    }
}

export const listArrivals = () => async (dispatch) => {
    dispatch({
        type: PRODUCT_LIST_REQUEST,
    });
    try {
        // const { data } = await Axios.get('/api/newarrivals');
        dispatch({ type: PRODUCT_LIST_SUCCESS, payload: data });
    } catch (error) {
        dispatch({type: PRODUCT_LIST_FAIL, payload: error.message})
    }
}

export const listTops = () => async (dispatch) => {
    dispatch({
        type: PRODUCT_LIST_REQUEST,
    });
    try {
        // const { data } = await Axios.get('/api/tops');
        dispatch({ type: PRODUCT_LIST_SUCCESS, payload: data });
    } catch (error) {
        dispatch({type: PRODUCT_LIST_FAIL, payload: error.message})
    }
}

export const listShoes = () => async (dispatch) => {
    dispatch({
        type: PRODUCT_LIST_REQUEST,
    });
    try {
        // const { data } = await Axios.get('/api/shoes');
        dispatch({ type: PRODUCT_LIST_SUCCESS, payload: data });
    } catch (error) {
        dispatch({type: PRODUCT_LIST_FAIL, payload: error.message})
    }
}

export const listAccessories = () => async (dispatch) => {
    dispatch({
        type: PRODUCT_LIST_REQUEST,
    });
    try {
        // const { data } = await Axios.get('/api/accessories');
        dispatch({ type: PRODUCT_LIST_SUCCESS, payload: data });
    } catch (error) {
        dispatch({type: PRODUCT_LIST_FAIL, payload: error.message})
    }
}

export const detailsProduct = (productId, name) => async (dispatch) => {
    console.log(productId, name)
    dispatch({type: PRODUCT_DETAILS_REQUEST, payload: productId})
    try {
        const {data} = await Axios.get(`/api/${name}/${productId}`)
        dispatch({type: PRODUCT_LIST_SUCCESS, payload: data})
    } catch(error) {
        dispatch({
            type: PRODUCT_DETAILS_FAIL, 
            payload: 
                error.response && error.response.data.message 
                    ? error.response.data.message 
                    : error.message
        })
    }
}

export const searchAllProducts = (searchname) => async (dispatch) => {
    dispatch({
        type: PRODUCT_SEARCH_REQUEST,
    });
    try {
        const { data } = await Axios.get(`/searchproduct/${searchname}`); 
        dispatch({ type: PRODUCT_SEARCH_SUCCESS, payload: data });
    } catch (error) {
        dispatch({type: PRODUCT_SEARCH_FAIL, payload: error.message})
    }
}

export const detailsProduct2 = (productId, name) => async (dispatch) => {
    console.log(productId, name)
    dispatch({type: PRODUCT_DETAILS_REQUEST, payload: productId})
    try {
        const {data} = await Axios.get(`/api/${name}/${productId}`)
        dispatch({type: PRODUCT_LIST_SUCCESS, payload: data})
    } catch(error) {
        dispatch({
            type: PRODUCT_DETAILS_FAIL, 
            payload: 
                error.response && error.response.data.message 
                    ? error.response.data.message 
                    : error.message
        })
    }
}