import React, { useContext } from "react";
import CartContext from "../../store/cart-context";
import Modal from "../UI/Modal";
import CartItem from "./CartItem";

const Cart = (props) => {
  const cartCtx = useContext(CartContext);
  const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
  const hasItems = cartCtx.items.length > 0;

  const cartItemAddHandler = (item) => {
    cartCtx.addItem({ ...item, amount: 1 });
  };
  const cartItemRemoveHandler = (id) => {
    cartCtx.removeItem(id);
  };

  const cartItems = (
    <ul className="cart-items max-h-[20rem] overflow-auto">
      {cartCtx.items.map((item) => (
        <CartItem
          key={item.key}
          name={item.name}
          amount={item.amount}
          price={item.price}
          onRemove={cartItemRemoveHandler.bind(null, item.id)}
          onAdd={cartItemAddHandler.bind(null, item)}
        />
      ))}
    </ul>
  );

  return (
    <Modal onHideCart={props.onHideCart}>
      {cartItems}
      <div className="total flex justify-between font-bold text-base">
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      <div className="actions text-right space-x-4 mt-2">
        <button
          onClick={props.onHideCart}
          className="button-alt cursor-pointer bg-transparent text-[#8a2b06] border-[1px] px-6 py-1 rounded-full  border-[#8a2b06] hover:text-white hover:bg-red-700 hover:border-[#5a1a01]"
        >
          Close
        </button>
        {hasItems && (
          <button className="button-alt cursor-pointer bg-red-700 text-white border-[1px] px-6 py-1 rounded-full  border-[#8a2b06] hover:text-white hover:bg-red-800 hover:border-[#c93b02]">
            Order
          </button>
        )}
      </div>
    </Modal>
  );
};

export default Cart;
