import React, { Component } from 'react';
import './navhalf.css';
import navicon from '../../../image/navicon.svg';
import Sidedrawer from './halfnav/halfnav';

class Navhalf extends Component {
    state = {
        show: false
    }
    onclick = () => {
        let show = !this.state.show;
        this.setState({show: show});
    }
    render () {
        return (
            <div className="navicon">
                <img src={navicon} onClick={this.onclick} alt="navicon"></img>
                {this.state.show?<Sidedrawer clickevent={this.onclick}/> : null}
            </div>
        );
    }
}

export default Navhalf; 