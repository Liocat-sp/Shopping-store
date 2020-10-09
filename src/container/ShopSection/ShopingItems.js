import React, { Component } from 'react';
import Item from '../../components/item_card/Item';
import './ShoppingItems.css';
import { connect } from 'react-redux';
import * as action from '../../store/index';

class ShoppingItems extends Component  {
    render () {
        const shopItems = this.props.items.map(item => {
            return (
                <Item 
                    key={item.id}
                    itemid = {item.id}
                    itemtitle={item.title}
                    itemimg={item.image}
                    iteminfo={item.info}
                    itemprice={item.price}
                    itemqty={item.qty} 
                    add= {this.props.onadditem}/>
            )
        });
        return (
            <div className="shopContainer">
                <h1>Shopping Items</h1>
                <div className="shopping_items">
                    {shopItems}
                </div>
            </div>
        );   
    }
}

const mapStateToProps = state => {
    return {
        items: state.items
    }
};

const mapDispatchToProps = dispatch => {
    return {
        onadditem : (id) =>dispatch(action.adddtoacrt(id))
    }
};

export default connect(mapStateToProps,mapDispatchToProps)(ShoppingItems);