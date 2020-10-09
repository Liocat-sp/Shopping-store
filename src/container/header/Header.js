import React, { Component } from 'react';
import './Header.css';
import hero from '../../image/hero.png';

class Header extends Component {
    render () {
        return (
            <div className="hero">
                <div className="herotext">
                    <h1>Buy From Best <br /> Shoes <br />Collection.</h1>
                    <p>From Sneakers to casual shoes. we provide Everything here at best price.</p>
                </div>
                <div className="heroimg">
                <img src={hero} className="imagehero" alt="heroImg" />
                </div>
            </div>
        );
    }
}

export default Header;