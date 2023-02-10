import React from "react";
import CartWidget from "../CartWidget";
import Brand from "../Brand";
import './style.css';
import { Link } from "react-router-dom";

export default function NavBar() {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">TUTIENDA.COM</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/category/electronics">electronics</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/category/jewelery">jewelery</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/category/men's clothing">men's clothing</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/category/women's clothing">women's clothing</Link>
                        </li>
                    </ul>
                </div>
                <div className="logoCarrito">
                    <CartWidget/>
                </div>
            </div>
        </nav>
    )
}


