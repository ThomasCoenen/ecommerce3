import { NEWARRIVALS_DETAILS_FAIL, NEWARRIVALS_DETAILS_REQUEST, NEWARRIVALS_DETAILS_SUCCESS, NEWARRIVALS_LIST_FAIL, NEWARRIVALS_LIST_REQUEST, NEWARRIVALS_LIST_SUCCESS } from "../constants/newArrivalsConstants";

export const newArrivalsListReducer = (
    state = { products: [], loading: true },  
    action
    ) => {
        switch(action.type) {
            case NEWARRIVALS_LIST_REQUEST:
                return { loading: true};
            case NEWARRIVALS_LIST_SUCCESS:
                return { loading: false, data: action.payload };
            case NEWARRIVALS_LIST_FAIL:
                return { loading: false, error: action.payload };
            default: 
                return state; 
        }
}

export const newArrivalsDetailsReducer = (
    state = { product: {}, loading: true },
    action
    ) => {
        switch (action.type) {
            case NEWARRIVALS_DETAILS_REQUEST:
                return {loading: true};
            case NEWARRIVALS_DETAILS_SUCCESS:
                return {loading: false, product: action.payload};
            case NEWARRIVALS_DETAILS_FAIL:
                return {loading: false, error: action.payload};
            default: 
                return state;
        }
    }