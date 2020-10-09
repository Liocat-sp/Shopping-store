import React, { Component } from 'react';
import './Navbar.css';
import Navfull from './navfull/navfull';
import { Link } from 'react-router-dom';
import Navhalf from './navhalf/navhalf';

class Navbar extends Component {
    render () {
        return (
            <div className="nav">
                <div className="logo"><Link to="/" className="link">FakeZon</Link></div>
                <Navfull className="navlist1"/>
                <Navhalf className="navicon1"/>
            </div>
        );
    }
}

export default Navbar;