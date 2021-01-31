import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import LoadingBox from '../components/LoadingBox.js';
import MessageBox from '../components/MessageBox.js';
import { detailsNewArrivals } from '../actions/newArrivalsActions';

export default function NewArrivalsScreen(props) {
    const dispatch = useDispatch();
    const productId = props.match.params.id;
    const newArrivalsDetails = useSelector((state) => state.newArrivalsDetails);
    const { loading, error, product } = newArrivalsDetails;
    useEffect(() => {
        dispatch(detailsNewArrivals(productId));
    }, [dispatch, productId]); 

    return (

    <div className="favorites">
        {loading ? (
            <LoadingBox></LoadingBox>
        ) : error ? (
            <MessageBox variant="danger">{error}</MessageBox>
        ) : (
            <div>
            <Link to="/">Back to result</Link>
            <div className="">
                <div className="">
                <img
                    className=""
                    src={product.image}
                    alt={product.name}
                ></img>
                </div>
                <div className="">
                <ul>
                    <li>
                    <h1>{product.name}</h1>
                    </li>

                    <li>Pirce : ${product.price}</li>
                    <li>
                    Description:
                    <p>{product.description}</p>
                    </li>
                </ul>
                </div>
                <div className="">
                <div className="">
                    <ul>
                    <li>
                        <div className="">
                        <div>Price</div>
                        <div className="">${product.price}</div>
                        </div>
                    </li>
                    <li>
                        <div className="">
                        <div>Status</div>
                        <div>
                            {product.countInStock > 0 ? (
                            <span className="success">In Stock</span>
                            ) : (
                            <span className="danger">Unavailable</span>
                            )}
                        </div>
                        </div>
                    </li>
                    <li>
                        <button className="">Add to Cart</button>
                    </li>
                    </ul>
                </div>
                </div>
            </div>
            </div>
        )}
    </div>
        


    )
}
