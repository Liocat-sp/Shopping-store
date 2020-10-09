import React, { Component } from 'react';
import cart from '../../../image/cart.svg';
import { Link } from 'react-router-dom';
import './navfull.css';

class Navfull extends Component {
    render() {
        return (
            <div className="navfull">
                <ul>
                    <li><Link to="/" className="link">Shop</Link></li>
                    <li><Link to="/cart" className="link">cart<img src={cart} className="cart" alt="cart"></img></Link></li>
                </ul>
            </div>
        );
    }
}

export default Navfull;