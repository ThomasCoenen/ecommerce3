import React, {useRef, useState, useEffect} from 'react'
import { useSelector } from 'react-redux';
import { Link} from 'react-router-dom';
import { FaSearch } from 'react-icons/fa';

export default function Burger() {

    const userSignin = useSelector(state => state.userSignin)
    const { userInfo } = userSignin; 

    const dropdownRef = useRef(null);
    const [isActive, setIsActive] = useState(false);
    const onClick = () => setIsActive(!isActive);

    useEffect(() => {
        const pageClickEvent = (e) => {
            if (dropdownRef.current !== null && !dropdownRef.current.contains(e.target)) {
                setIsActive(!isActive);
            }
        };
        if (isActive) {
            window.addEventListener('click', pageClickEvent);
        }
        return () => {
            window.removeEventListener('click', pageClickEvent);
          }
    }, [isActive]);
  
    return (
      <div className="menu-container">
        <button className="menu-trigger Burger" onClick={onClick} >
            <div className="burgclose"/>
            <div className= "burgclose"/>
            <div className="burgclose"/>
        </button>
        
        <nav ref={dropdownRef} className={`menu ${isActive ? 'active' : 'inactive'}`}>
          <ul>
            <li><Link to="/" className="linkproducttype" onClick={() => setIsActive(false)}>Home</Link></li>
            <li><Link to="/newarrivals" className="linkproducttype" onClick={() => setIsActive(false)}>New Arrivals</Link></li>
            <li><Link to="/tops" className="linkproducttype" onClick={() => setIsActive(false)}>T-Shirts</Link></li>
            <li><Link to="/shoes" className="linkproducttype" onClick={() => setIsActive(false)}>Shoes</Link></li>
            <li><Link to="/accessories" className="linkproducttype" onClick={() => setIsActive(false)}>Accessories</Link></li>      
            <li>
                <ul className="sidenavbottomlinkscontainer">

                    {
                    userInfo ? (
                        <li><Link to="/profile" className="sidenavbottomlinks" onClick={() => setIsActive(false)}>Your Profile</Link></li>
                    ) : 
                    (
                        <li><Link to="/register" className="sidenavbottomlinks" onClick={() => setIsActive(false)}>Create Account</Link></li>
                    )

                    }

                    <li><Link to="/search" className="sidenavbottomlinks" onClick={() => setIsActive(false)}>Search<FaSearch /></Link></li>
                    <li><Link to="/contact" className="sidenavbottomlinks" onClick={() => setIsActive(false)}>Contact</Link></li>
                    <li><Link to="/policies" className="sidenavbottomlinks" onClick={() => setIsActive(false)}>Policies</Link></li>

                </ul>
            </li>
          </ul>
        </nav>
      </div>
    );
}
