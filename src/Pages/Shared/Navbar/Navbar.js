import React from 'react';
import { Link } from 'react-router-dom';
// import { Link } from 'react-router-dom';
import './Navbar.css'

const Navbar = () => {
    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
                <div class="container-fluid">
                    <a class="navbar-brand" href="#">MI SHOP</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#main_nav">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="main_nav">
                        <ul class="navbar-nav">
                            <li class="nav-item active"> <Link to="/home"><a class="nav-link" href="#"> Home </a></Link> </li>
                            <li class="nav-item"><Link to="/login"><a class="nav-link" href="#"> About </a></Link></li>
                            <li class="nav-item"><a class="nav-link" href="#"> Services </a></li>
                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown">  Category  </a>
                                <ul class="dropdown-menu fade-up">
                                    <li><a class="dropdown-item" href="#"> Submenu item 1</a></li>
                                    <li><a class="dropdown-item" href="#"> Submenu item 2 </a></li>
                                    <li><a class="dropdown-item" href="#"> Submenu item 3 </a></li>
                                </ul>
                            </li>
                        </ul>
                        <ul class="navbar-nav ms-auto">
                            <button>Login</button>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;