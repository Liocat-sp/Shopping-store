import React, { Component } from 'react';
import './cart.css'
import trash from '../../image/trash.svg';
import down from '../../image/down.svg';
import up from '../../image/up.svg';

class CartItem extends Component {
    render () {
        return (
            <div className="cartItem">
                <div className="cartimg">
                    <img src={this.props.itemimg} alt="item"/>
                </div>
                <div className="cartcontent">
                    <h4 className="itemName">{this.props.title}</h4>
                    <p className="itemDetail">{this.props.info}</p>
                </div>
                <div className="cartprice">
                    <h3 className="itemcost">Price: {this.props.price} <span>Rs</span></h3>
                    <div className="Quantity">Qty: {this.props.qty} <span> <img src={down} className="keyup" onClick={() => {this.props.decrease(this.props.itemid)}}  alt="downkey"></img> <img src={up} className="keydown" onClick={() => {this.props.increase(this.props.itemid)}} alt="inckey"></img></span> </div>
                </div>
                <div className="deletebtn">
                    <img src={trash} onClick ={() => {this.props.remove(this.props.itemid)}} className="delete" alt="delete"></img>
                </div>
            </div>
        );
    }
}

export default CartItem;