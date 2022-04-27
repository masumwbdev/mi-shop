import React from 'react';
import { Link } from 'react-router-dom';
// import { Link } from 'react-router-dom';
import './Navbar.css'

const Navbar = () => {
    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
                <div class="container-fluid">
                    <Link className='text-light' to="/home"><span>MI SHOP</span></Link>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#main_nav">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="main_nav">
                        <ul class="navbar-nav">
                            <li class="nav-item active"> <Link to="/home"><a class="nav-link" href="#"> Home </a></Link> </li>
                            <li class="nav-item"><Link to="/smartphones"><a class="nav-link" href="#"> Smartphones </a></Link></li>
                            <li class="nav-item dropdown">
                                <Link to="/phones-accessories"><a class="nav-link" href="#"> Phones Accessories </a></Link>
                                <ul class="dropdown-menu fade-up">
                                    <li><Link to="/chargers">Charger</Link></li>
                                    <li><Link to="/ear-phone">Ear-phone</Link></li>
                                    <li><Link to="/phone-cover">Phone Cover</Link></li>
                                    <li><Link to="/usb-cable">USB Cable</Link></li>
                                </ul>
                            </li>
                            <li class="nav-item"><Link to="/laptops"><a class="nav-link" href="#"> Laptops </a></Link></li>
                            <li class="nav-item dropdown">
                                <Link to="/laptops-accessories"><a class="nav-link" href="#"> Laptops Accessories </a></Link>
                                <ul class="dropdown-menu fade-up">
                                    <li><Link to="/headphones">Head Phone</Link></li>
                                    <li><Link to="/keyboards">Keyboard</Link></li>
                                    <li><Link to="/mouse">Mouse</Link></li>
                                </ul>
                            </li>
                            <li class="nav-item"><Link to="/tablets"><a class="nav-link" href="#"> Tablets </a></Link></li>
                            <li class="nav-item"><Link to="/tv"><a class="nav-link" href="#"> Tv </a></Link></li>
                            <li class="nav-item"><Link to="/mi-routers"><a class="nav-link" href="#"> Routers </a></Link></li>
                            <li class="nav-item"><Link to="/camera"><a class="nav-link" href="#"> Camera </a></Link></li>

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