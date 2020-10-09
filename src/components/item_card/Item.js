import React, { Component } from 'react';
import './Item.css';


class Item extends Component {
    render () {
        return (
            <div className="item">
                <div className="itemImage">
                    <img src={this.props.itemimg} alt= "shopping"></img>
                </div>
            <div className="item_Info">
                <h5 className="itemTitle">{this.props.itemtitle}</h5>
                <h2 className="itemPrice">{this.props.itemprice} <span>Rs</span></h2>
                <p>{this.props.iteminfo}</p>
                <div className="itemsbtn">
                    <button className="btnview">View</button>
                    <button className="btnadd" onClick={() => {this.props.add(this.props.itemid)}} >Add To Cart</button>        
                </div>
            </div>
            </div>
        );
    }
}

export default Item;