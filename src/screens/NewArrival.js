import React from 'react'
import { Link } from 'react-router-dom'

export default function NewArrival(props) {
    const {product} = props
    return (
        <div key={product._id} className="product">
            <Link to={`/newarrivals/${product._id}`}>
                <img className="image_prod" src={product.image} alt={product.name}/>
                <div className="itemstuff">
                    <h1 className="itemname">{product._id}</h1>-
                    <h1 className="itemname">{product.name}</h1>-
                    <h2 className="itemname">{product.price}</h2>
                </div>
            </Link>  
        </div>       
    )
}
