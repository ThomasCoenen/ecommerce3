import React, {useState} from 'react'
import data from '../data/data.js' 


export default function ProductScreen(props) {

    const [qty, setQty] = useState(1) 

    let product

    if (props.match.params.name === "favorites") {
      product = data.favorites.find((x) => Number(x._id) === Number(props.match.params.id));
    } 
    else if (props.match.params.name === "newarrivals") {
      product = data.newarrivals.find((x) => Number(x._id) === Number(props.match.params.id));
    }
    else if (props.match.params.name === "tops") {
      product = data.tops.find((x) => Number(x._id) === Number(props.match.params.id));
    }
    else if (props.match.params.name === "shoes") {
      product = data.shoes.find((x) => Number(x._id) === Number(props.match.params.id));
    }
    else if (props.match.params.name === "accessories") {
      product = data.accessories.find((x) => Number(x._id) === Number(props.match.params.id));
    }

    if(!product) {  
        return <div>Product Not Found</div>
    }

    const productId = props.match.params.id;
    const name = props.match.params.name;
    console.log(name, productId)

    const addToCartHandler = () => {
      props.history.push(`/cart/${productId}/${name}/?qty=${qty}`)
    }

  return (
    <div className="favorites">

      <div className="">
        <img
          className="largeimg"
          src={product.image}
          alt={product.name}
        ></img>
      </div>

      <div className="card singleitem">
        <ul className="singleproductlist" style={{listStyle: "none"}}>
          <li>
            <div className="row">
              <div className="price">${product.price}</div>
            </div>
          </li>
          <li>
            <div className="row">
              <div>
                {product.countInStock > 0 ? (
                  <span className="success">In Stock!</span>
                ) : (
                  <span className="danger">Sorry this item is currenlly unavailable</span>
                )}
              </div>
            </div>
          </li>

          {
          product.countInStock > 0 && (
            <>
              <li>
                  <div>Qty</div>
                  <div>
                    <select 
                      value={qty} 
                      onChange={e => setQty(e.target.value)}
                    >
                      {
                        [...Array(product.countInStock).keys()].map(x => (
                          <option key={x+1} value={x+1}>{x+1}</option>
                        ))
                      }
                    </select>
                  </div>
              </li>
              <li>
                <button 
                  onClick={addToCartHandler}
                  className="addtocartbutton"
                  >Add to Cart
                </button>
              </li>
            </>
          ) 
          }

        </ul>
      </div>
    </div>    
    )
}