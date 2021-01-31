import React from 'react'
import { useSelector } from 'react-redux';
import { Link} from 'react-router-dom';
import { FaSearch } from 'react-icons/fa';


export default function LeftNav({open, setOpen}) {
    const userSignin = useSelector(state => state.userSignin)
    const { userInfo } = userSignin; 

    return (
        <>
            <ul className="linkslist" open={open} style={{ transform: open ? 'translateX(0%)' : 'translateX(-100%)' }}>
                <li><Link to="/" className="linkproducttype" onClick={() => setOpen(false)}>Home</Link></li>
                <li><Link to="/newarrivals" className="linkproducttype" onClick={() => setOpen(false)}>New Arrivals</Link></li>
                <li><Link to="/tops" className="linkproducttype" onClick={() => setOpen(false)}>Tops</Link></li>
                <li><Link to="/bottoms" className="linkproducttype" onClick={() => setOpen(false)}>Bottoms</Link></li>
                <li><Link to="/accessories" className="linkproducttype" onClick={() => setOpen(false)}>Accessories</Link></li>
                <li>
                    <ul className="sidenavbottomlinkscontainer">
                        {
                        userInfo ? (
                            <li><Link to="/profile" className="sidenavbottomlinks">Your Profile</Link></li>
                        ) : 
                        (
                            <li><Link to="/register" className="sidenavbottomlinks">Create Account</Link></li>
                        )
                        }
                        <li><Link to="/search" className="sidenavbottomlinks">Search<FaSearch /></Link></li>
                        <li><Link to="/policies" className="sidenavbottomlinks">Policies</Link></li>
                    </ul>
                </li>
            </ul>
        </>
    )
}
