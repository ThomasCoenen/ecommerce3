import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Product from '../screens/Product'

export default function ProductSearch({data, searchname, searchedProducts}) {
    const dispatch = useDispatch();
    const searchProduct = useSelector((state) => state.searchProduct)
    const { loading, error, products } = searchProduct

    return (
        <div>
            <h1>searchstuff here</h1>
                {
                    <div className="favoriterroducts">
                        { 
                            searchedProducts.map((product) => (
                                    <Product key={product._id} product={product} searchname={searchname}></Product>
                                )  
                            )
                        }
                    </div>
                }
        </div>
    )
}
