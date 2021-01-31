import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { searchAllProducts } from '../actions/productActions'
import Product from '../screens/Product'
import MessageBox from './MessageBox.js';

require("es6-promise").polyfill()
require("isomorphic-fetch")

export default function Search() {
    const [searchname, setSearchname] = useState("")

    const dispatch = useDispatch();
    const searchProduct = useSelector((state) => state.searchProduct)
    const { loading, error, products } = searchProduct
    

    const submitHandler = (e) => {
        e.preventDefault()
        dispatch(searchAllProducts(searchname))
    }

    useEffect(() => {
    }, [products])
    

    return (
        <div>
            <form className="form" onSubmit={submitHandler}>
                <h2>Search our Store</h2>
                <label htmlFor="searchname"></label>
                <input 
                    className="forminput"
                    type="text" 
                    id="searchname" 
                    placeholder="search"
                    onChange={e => setSearchname(e.target.value)}>
                </input>
                <button 
                    className="formbutton" 
                    type="submit"
                    >Search
                </button>
            </form>                  
            <div className="favorites">
                {
                loading ? (
                    <></>
                )
                :
                error ? (<MessageBox variant="danger">{error}</MessageBox>)
                : (
                    <div className="favoriterroducts">
                        { 
                            products.map((product) => (
                                    <Product key={product._id} product={product} name={product.category}></Product>
                                )  
                        )
                        }
                    </div>
                )
                }
            </div>
            
        </div>
    )
}
