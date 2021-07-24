
import React, { Component } from 'react';
import './NavBar.css';

const PublicNavbar = () => {
    return ( 
    <nav className="navbar navbar-expand-lg navbar-dark" id="home-navbar" style={{backgroundColor: '#26262c'}}>
        <a className="navbar-brand" href="#">Qlick2Learn</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarContent" aria-controls="#navbarContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-between" id="navbarContent">
            <ul className="navbar-nav">
                <li><a className="nav-item nav-link" href="#">Courses</a></li>
                <li><a className="nav-item nav-link" href="#">News</a></li>
                {/* <li><a className="nav-item nav-link" href="/faq">FAQ</a></li> */}
                <li><a className="nav-item nav-link" href="#">Contact Us</a></li>
            </ul>
            <div>
                <a className="navbar-nav nav-item nav-link" href="/login">Login</a>
            </div>
        </div>
    </nav> 
 );
}
 
export default PublicNavbar;