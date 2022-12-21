import React from "react";
import CartWidget from "../CartWidget";
import Brand from "../Brand";
import './style.css';

export default function NavBar(){
    return (
        <ul className="navList">
            <li className="navItem"><a href="#home">Home</a></li>
            <li className="navItem"><a href="#news">News</a></li>
            <li className="navItem"><a href="#contact">Contact</a></li>
            <li className="navItem"><a href="#about">About</a></li>
            <div className="logoCarrito">
                <CartWidget/>  
            </div>
            <div className="brand">
                <Brand/> 
            </div>
        </ul>
    )
}