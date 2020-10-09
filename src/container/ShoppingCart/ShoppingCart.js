import React, { Component } from 'react';
import CartItem from '../../components/cart/cart';
import './ShoppingCart.css';
import * as action from '../../store/index';
import { connect } from 'react-redux';

class Cart extends Component {
    state = {
        total: this.props.total,
        tax: this.props.total * 5 / 100,
        Delivery: this.props.total>1000?0:50
    }

    render () {
       let cartItem = this.props.cart.map(cart => { 
        return (
               <CartItem 
               key={cart.id}
               itemid={cart.id}
               itemimg={cart.image}
               title={cart.title}
               info={cart.info}
               price={cart.price}
               qty={cart.qty}
               increase={this.props.onincrease}
               decrease={this.props.ondecrease}
               remove={this.props.onremoveitem}/>
           )
       });
        return (
            <div className="ShoppingCart">
                <h1>Your Cart</h1>
                {cartItem}
                <div className="checkoutinfo">
                    <h3>Items Total: {this.props.total} Rs</h3>
                    <h3>Tax: {this.props.tax} Rs</h3>
                    <h3>Delivery: {this.props.Delivery} Rs </h3>
                    <h3>Grand Total: {this.props.total + this.props.tax + this.props.Delivery} Rs</h3>
                </div>
                <div className="checkout">
                        <button onClick={() => alert('Your Order is Placed and if you want to pay me for real you can just contact me.')} disabled={this.props.total>0?false:true}>Checkout</button>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        cart: state.cart,
        total: state.cartTotal,
        tax: state.cartTotal * 5 / 100,
        Delivery: state.cartTotal>1000?0:50
    }
};

const mapDispatchToProps = dispatch => {
    return {
        onremoveitem: (id) => {dispatch(action.removefromcart(id))},
        onincrease: (id) => {dispatch(action.increaseqty(id))},
        ondecrease: (id) => {dispatch(action.decreaseqty(id))}
    }
};

export default connect(mapStateToProps,mapDispatchToProps)(Cart);