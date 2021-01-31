import React from 'react'
import mainlogo from '../images/logo6.png';
import { useDispatch, useSelector } from 'react-redux';
import Burger from './Burger'
import { Link} from 'react-router-dom';
import { signout } from '../actions/userActions'
import { FaUserAlt, FaShoppingCart, FaSearch } from 'react-icons/fa';

export default function Navbar() {
    const cart = useSelector(state => state.cart)
    const { cartItems } = cart; 
    const userSignin = useSelector(state => state.userSignin)
    const { userInfo } = userSignin; 
    const dispatch = useDispatch();

    const signoutHandler = () => {
        dispatch(signout())
    }

    return (
        <div className="Navbar">
            <Burger />

            <div className="homelogocontainer">
                <Link className="" to="/">
                    <img className="mainlogo" src={mainlogo} alt=""/>
                </Link>
            </div>

            <div className={userInfo ? 'topiconssignedin' : 'topiconsnosignedin'}>
                {
                    userInfo ? (
                        
                        <div className="topicon dropdown">
                            <div className="dropdown-select">
                                <FaUserAlt className="individualicon" style={{color: 'black'}}/>
                            </div>
                            <div className="dropdown-list">
                                <Link to="/profile" className="dropdown-list__item">User Profile</Link>
                                <Link to="/orderhistory" className="dropdown-list__item">Order History</Link>
                                <Link
                                        to="#signout"
                                        className="dropdown-list__item"
                                        onClick={signoutHandler}
                                        >SignOut
                                </Link>
                            </div>
                        </div>
                    ) : 
                    (
                        <div className="topicon">
                            <Link className="topicon" to="/account">
                                <FaUserAlt className="individualicon" style={{color: 'black'}}/>
                            </Link> 
                        </div>
                    )
                }
                
                <div className={userInfo ? 'carticon' : 'topicon'}>
                    <Link className="" to="/search">
                        <FaSearch className="individualicon" style={{color: 'black'}}/>
                    </Link>
                </div>

                <div className="topicon">
                    <Link className="" to="/cart">
                        <FaShoppingCart style={{color: 'black'}}/>
                            {cartItems.length > 0 && (
                                <span className="badge">{cartItems.length}</span>
                            )}
                    </Link>
                </div>

            </div>

        </div>
    )
}
