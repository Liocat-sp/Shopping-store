import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import cart from '../../../../image/cart.svg';
import './halfnav.css';

class Sidedrawer extends Component {
    render () {
        return (
            <div className="fullscreen_nav">
                <div className="cancle" onClick={this.props.clickevent}>X</div>
                <ul>
                    <li><Link to="/" onClick={this.props.clickevent} className="link1">Shop</Link></li>
                    <li><Link to="/cart" onClick={this.props.clickevent} className="link1">cart<img src={cart} className="cartnav" alt="cart"></img></Link></li>
                </ul>
            </div>
        );
    }
}

export default Sidedrawer;