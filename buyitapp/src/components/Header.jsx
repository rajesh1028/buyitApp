import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import CartBtn from './CartBtn'


const Header = () => {
    const [user, setUser] = useState("");
    if (!user && localStorage.getItem("userID")) {
        console.log("notuser");
        setUser(localStorage.getItem("userID"));
    }
    console.log(user);
    const handleLogOut = () => {
        localStorage.setItem("token", "");
        localStorage.setItem("userID", "");
        setUser("");
        alert("Logged out successfully");
    }

    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid py-2">

                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <NavLink className="nav-link" aria-current="page" to="/">Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/products">Product</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/about">About</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/contact">Contact</NavLink>
                            </li>
                        </ul>
                        <NavLink className="navbar-brand mx-auto fw-bold" to="/">MOBILE MART</NavLink>
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/login">{user ? user : "Login"}</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/signup">Register</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink onClick={handleLogOut} className="nav-link" to="/">Logout</NavLink>
                            </li>
                        </ul>
                        <CartBtn />
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Header
