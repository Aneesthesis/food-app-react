import React from "react";

const CartContext = React.createContext({
  //these data wont be used later, will assist in autocompletion though
  items: [],
  totalAmount: 0,
  addItem: (item) => {},
  removeItem: (id) => {},
});
export default CartContext;
