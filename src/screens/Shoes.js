import React, {useEffect} from 'react'
import '../App.css';
import Product from './Product';

import { useDispatch, useSelector } from 'react-redux';
import MessageBox from '../components/MessageBox';
import LoadingBox from '../components/LoadingBox.js';
import { listShoes } from '../actions/productActions';

import data from '../data/data.js' ////STATIC DATA

export default function Shoes(props) {

    let name = "shoes"

    //REDUX
    const dispatch = useDispatch();
    const productList = useSelector((state) => state.productList)
    const { loading, error, products } = productList

    useEffect(() => {
        dispatch(listShoes())
    }, [dispatch])

    return (
        <div className="favorites">
            <h1>Shoes</h1>
            <div className="favorites">

                {
                    loading ? (<LoadingBox></LoadingBox>)
                    :
                    error ? (<MessageBox variant="danger">{error}</MessageBox>)
                    : (
                        <div className="favoriterroducts">
                            { 
                                data.shoes.map((product) => (
                                        <Product key={product._id} product={product} name={name}></Product>
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
