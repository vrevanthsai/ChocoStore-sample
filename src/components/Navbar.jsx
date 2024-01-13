import { NavLink } from "react-router-dom"
import clsx from "clsx"

import {useContext} from "react";
import {AppContext} from "./AppContext.jsx";

export default function Navbar() {
    const classes = clsx("nav-link", ({ isActive }) => {
        isActive ? "active" : "";
    })
    // context
    const context = useContext(AppContext);
    const cartCount = context.getCartCount();

    return (
        <>
            <nav className="navbar navbar-expand-lg bg-body-secondary" >
                <div className="container-fluid">
                    <NavLink className="navbar-brand" to="/">ChocoStore</NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                        <div className="offcanvas-header">
                            <h5 className="offcanvas-title" id="offcanvasNavbarLabel">ChocoStore</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                        </div>
                        <div className="offcanvas-body">

                            <ul className="navbar-nav ms-auto nav-underline">
                                <li className="nav-item">
                                    <NavLink className={classes} aria-current="page" to="/" end>Home</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className={classes} to="/about">About us</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className={classes} to="/chocolates">Chocolates</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className={classes} to="/desserts">Desserts</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className={classes} to="/user">Profile(user)</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className={classes} to="/admin">Admin-Profile</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className={classes} to="/cart">Cart({cartCount})</NavLink>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}