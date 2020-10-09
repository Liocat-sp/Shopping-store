import * as actionTypes from './actionTypes';

export const adddtoacrt = (id) =>{
        return {
            type : actionTypes.ADD_TO_CART,
            itemid :  id
        }
};
export const removefromcart = (id) => {
    return {
        type :actionTypes.REMOVE_FORM_CART,
        itemid : id 
    }
};
export const increaseqty = (id) => {
    return {
        type : actionTypes.INCREASE,
        itemid : id  
    }
}; 
export const decreaseqty = (id) => {
    return {
        type: actionTypes.DECREASE,
        itemid: id
    }
}