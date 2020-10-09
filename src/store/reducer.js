import * as actionType from './actionTypes';
import Shoe1 from '../image/shoe1.jpg';
import Shoe2 from '../image/shoe2.jpg';
import Shoe3 from '../image/shoe3.jpg';
import Shoe4 from '../image/shoe4.jpg';

const initialState = {
    items: [
        {id:1, title: "Nike Jordan", price: 400, info: "mical jourdan signature air Jordan shoe very exclusive and brand new.", image: Shoe1,qty: 1},
        {id:2, title: "Adidas Bounce", price: 550, info: "Adidas Bounce signature Bounce shoe very exclusive and brand new.", image: Shoe2,qty:1},
        {id:3, title: "Puma Street", price: 640, info: "Puma Street signature Puma Street shoe very exclusive and brand new.", image: Shoe3,qty:1},
        {id:4, title: "Adidas Spike", price: 890, info: "mical Adidas Spikes air Adidas Spikes very exclusive and brand new.", image: Shoe4,qty:1}
    ],
    cart: [],
    cartTotal: 0
}

const reducer = (state = initialState, action) => {
    switch(action.type){
        case actionType.ADD_TO_CART : const itemtoinsert = state.items.find( item => action.itemid === item.id);
                                      const item_exist = state.cart.find(item => itemtoinsert.id === item.id);
                                      if(item_exist) {
                                        itemtoinsert.qty += 1;
                                        return {
                                            ...state,
                                            cartTotal: state.cartTotal + itemtoinsert.price,
                                        }
                                      }

                                      else {
                                          return {
                                              ...state,
                                              cart: [...state.cart,itemtoinsert],
                                              cartTotal: state.cartTotal + itemtoinsert.price
                                          }
                                      }
                                    
        case actionType.REMOVE_FORM_CART :  const itemtoremove = state.cart.find(item => item.id === action.itemid)
                                            const newcart = state.cart.filter(item => item.id !== itemtoremove.id)
                                            const newTotal = (state.cartTotal - (itemtoremove.price * itemtoremove.qty))
                                            return {
                                                ...state,
                                                cart: newcart,
                                                cartTotal: newTotal
                                            }                              
        
        case actionType.INCREASE :  const item_qty_to_inc = state.items.find(item => item.id === action.itemid);
                                        item_qty_to_inc.qty += 1;
                                        const newtotal = state.cartTotal + item_qty_to_inc.price;
                                        return{
                                            ...state,
                                            cartTotal: newtotal
                                    }
                                    
        case actionType.DECREASE : const item_qty_to_dec = state.items.find(item => item.id === action.itemid);
                                    if(item_qty_to_dec.qty === 1) {
                                        const newcart = state.cart.filter(item => item.id !== item_qty_to_dec.id);
                                        const newtotal = state.cartTotal - item_qty_to_dec.price;
                                        return {
                                            ...state,
                                            cart: newcart,
                                            cartTotal: newtotal
                                        } 
                                    }
                                    else if(item_qty_to_dec.qty > 1) {
                                        item_qty_to_dec.qty -=1;
                                        return {
                                            ...state,
                                            cartTotal: (state.cartTotal - item_qty_to_dec.price)
                                        };
                                    }
                                    break;
        default: return state;
    }
}

export default reducer;