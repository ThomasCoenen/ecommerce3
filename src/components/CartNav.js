import React from 'react'

export default function CartNav({open}) {
    return (
        <>
            <h3 className="exit">X</h3>
            <ul className="CartNav" open={open} style={{ transform: open ? 'translateX(0%)' : 'translateX(100%)' }}>
                <li className="">Your cart</li>
                <li className=""><hr/></li>
                <li className="">Your cart is currently empty.</li>
            </ul>
        </>
    )
}
