import React, { useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { addToCart, removeFromCart } from '../actions/cartActions';
import MessageBox from './MessageBox';

export default function CartScreen(props) {
    const name = props.match.params.name;
    const productId = props.match.params.id;
    const qty = props.location.search 
        ? Number(props.location.search.split('=')[1]) 
        : 1;

    const cart = useSelector((state) => state.cart)
    console.log(cart)
    const {cartItems} = cart
    console.log(cartItems)
    const dispatch = useDispatch();

    useEffect(() => {
        if(productId) {
            dispatch(addToCart(productId, qty, name));
        }
    }, [dispatch, productId, qty])

    //
    const removeFromCartHandler = (id) => {
        dispatch(removeFromCart(id))
    }

    const checkoutHandler = () => {
        props.history.push('/account?redirect=shipping')
    }

    return (
        <div className="shoppingcart">
            <div className="shoppingcartrow">
                <h1>Shopping Cart</h1>
                <br />
                {
                cartItems.length === 0 ? (
                    <MessageBox>Cart is Empty
                        <Link to="/">Go Shopping</Link>
                    </MessageBox>)
                :
                (
                    <ul className="cartitems">
                        {
                            cartItems.map((item) => (
                                <li key={item.product} className="rowitem">
                                    <div className="">
                                        <img 
                                            src={item.image} 
                                            alt={item.name} 
                                            className="smallimg">
                                        </img>
                                    </div>
                                    
                                    <div className="">
                                        <Link to={`/product/${item.product}/${item.category}`} style={{textDecoration: "none"}}>{item.name}</Link>
                                    </div>

                                    <div className="">
                                        <select 
                                            value={item.qty} 
                                            onChange={(e) => 
                                                dispatch(
                                                    addToCart(item.product, Number(e.target.value))
                                                
                                                )
                                            }
                                        >
                                            {
                                                [...Array(item.countInStock).keys()].map(x => (
                                                <option key={x+1} value={x+1}>{x+1}</option>
                                                ))
                                            }
                                        </select>
                                    </div>

                                    <div>${item.price}</div>

                                    <div>
                                        <button
                                            className="formbutton"
                                            type="button" 
                                            onClick={() => removeFromCartHandler(item.product)}
                                            >Delete
                                        </button>
                                    </div>
                                </li>
                            ))
                        }
                    </ul>
                    )
                }
            </div>
            <div>
                <h2>Special Instructions for Seller</h2>
                <textarea className="sellerinstructions"></textarea>
            </div>

            <div>
                <div className="">
                    <ul className="cartbottom">
                        <li className="">
                            <h2 className="">
                                Subtotal ({cartItems.reduce((a, c) => a + c.qty, 0)} items) : $
                                {cartItems.reduce((a, c) => a + c.price * c.qty, 0)}
                            </h2>
                        </li>
                        <li className="">
                            <button 
                                type="formbutton" 
                                onClick={checkoutHandler} 
                                className="checkoutbutton"
                                disabled={cartItems.length===0}
                                >Proceed to Checkout
                            </button>
                        </li>
                    </ul>

                </div>
            </div>
        </div>
    )
}
