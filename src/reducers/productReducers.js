const { PRODUCT_LIST_REQUEST, PRODUCT_LIST_SUCCESS, PRODUCT_LIST_FAIL, PRODUCT_DETAILS_REQUEST, PRODUCT_DETAILS_FAIL, PRODUCT_SEARCH_REQUEST, PRODUCT_SEARCH_SUCCESS, PRODUCT_SEARCH_FAIL } = require("../constants/productConstants");

export const productListReducer = (
    state = { products: [], loading: true },  
    action
    ) => {
        switch(action.type) {
            case PRODUCT_LIST_REQUEST:
                return { loading: true};
            case PRODUCT_LIST_SUCCESS:
                let products = []
                return { loading: false, products: products.concat(action.payload) };
            case PRODUCT_LIST_FAIL:
                return { loading: false, error: action.payload };
            default: 
                return state; 
        }
}

export const productDetailsReducer = (
    state = { product: {}, loading: true },
    action
    ) => {
        switch (action.type) {
            case PRODUCT_DETAILS_REQUEST:
                return {loading: true};
            case PRODUCT_LIST_SUCCESS:
                return {loading: false, product: action.payload};
            case PRODUCT_DETAILS_FAIL:
                return {loading: false, error: action.payload};
            default: 
                return state;
        }
    }

export const searchProductReducer = (
    state = { products: [], loading: true },  
    action
    ) => {
        switch(action.type) {
            case PRODUCT_SEARCH_REQUEST:
                return { loading: true};
            case PRODUCT_SEARCH_SUCCESS:
                let products = []
                return { loading: false, products: products.concat(action.payload) };
            case PRODUCT_SEARCH_FAIL:
                return { loading: false, error: action.payload };
            default: 
                return state; 
        }
}