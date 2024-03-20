export const  addcart = (product) => {
    return {
        type : "AddITEM",
      payload : product
  
    }
  }
 
  export const  delcart = (product) => {
    return {
        type : "DELITEM",
      payload : product
  
    }
  }
 
export const clearCart = () => {
  return {
      type: "CLEAR_CART",
  };
};
export const incrementQuantity = (id) => {
  return {
    type: "INCREMENT_QUANTITY",
    payload: id
  };
};

export const decrementQuantity = (id) => {
  return {
    type: "DECREMENT_QUANTITY",
    payload: id
  };
};
export const removeFromCart = (id) => {
  return {
    type: 'REMOVE_FROM_CART',
    payload: id
  };
};