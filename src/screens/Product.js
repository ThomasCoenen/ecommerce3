import React from 'react'
import { Link } from 'react-router-dom'

export default function Product(props) {
    const {product} = props
    const {name} = props 

    return (
        <div key={product._id} className="product">
            <Link to={`/product/${product._id}/${name}`} style={{textDecoration:"none"}}>
                <img className="image_prod" src={product.image} alt={product.name}/>
                <div className="itemstuff">
                    <h1 className="itemname">{product.name} - ${product.price}</h1>
                </div>
            </Link>  
        </div>       
    )
}
