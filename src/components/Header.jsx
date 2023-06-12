import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
    return (


        <nav>
            <Link to="/">Home</Link>
            <Link to="/Cart">Cart</Link>
            <Link to="/Shop">Shop</Link>
            <Link to="/Product">Product</Link>
        </nav>

    )
}

export default Header