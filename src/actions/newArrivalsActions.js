import Axios from "axios";
import { NEWARRIVALS_DETAILS_FAIL, NEWARRIVALS_DETAILS_REQUEST, NEWARRIVALS_DETAILS_SUCCESS, NEWARRIVALS_LIST_FAIL, NEWARRIVALS_LIST_REQUEST, NEWARRIVALS_LIST_SUCCESS } from "../constants/newArrivalsConstants";

export const listNewArrivals = () => async (dispatch) => {
    dispatch({
        type: NEWARRIVALS_LIST_REQUEST,
    });
    try {
        const { data } = await Axios.get('/api/newarrivals');
        dispatch({ type: NEWARRIVALS_LIST_SUCCESS, payload: data });
    } catch (error) {
        dispatch({type: NEWARRIVALS_LIST_FAIL, payload: error.message})
    }
}

export const detailsNewArrivals = (productId) => async (dispatch) => {
    dispatch({type: NEWARRIVALS_DETAILS_REQUEST, payload: productId})
    try {
        const {data} = await Axios.get(`/api/newarrivals/${productId}`)
        dispatch({type: NEWARRIVALS_DETAILS_SUCCESS, payload: data})
    } catch(error) {
        dispatch({
            type: NEWARRIVALS_DETAILS_FAIL, 
            payload: 
                error.response && error.response.data.message 
                    ? error.response.data.message 
                    : error.message
        })
    }
}
