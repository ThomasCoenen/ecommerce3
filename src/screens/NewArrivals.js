import React, { useEffect} from 'react'
import '../App.css';
import Product from './Product';
import { useDispatch, useSelector } from 'react-redux';
import MessageBox from '../components/MessageBox';
import LoadingBox from '../components/LoadingBox.js';
import { listArrivals } from '../actions/productActions';

import data from '../data/data.js' 


export default function NewArrivals(props) {
    let name = "newarrivals"
    const dispatch = useDispatch();
    const productList = useSelector((state) => state.productList)
    const { loading, error, products } = productList

    useEffect(() => {
        dispatch(listArrivals())
    }, [dispatch])

    return (
            <div className="favorites">
                <h1 style={{textAlign: "center"}}>New Arrivals</h1>
                {
                    loading ? (<LoadingBox></LoadingBox>)
                    :
                    error ? (<MessageBox variant="danger">{error}</MessageBox>)
                    : (
                        <div className="favoriterroducts">
                            { 
                                data.newarrivals.map((product) => (
                                        <Product key={product._id} product={product} name={name}></Product>
                                    )  
                            )
                            }
                        </div>
                    )
                }
            </div>
    )
}
