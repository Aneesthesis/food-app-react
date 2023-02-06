import React, { Fragment, useContext, useState } from "react";
import CartContext from "../../store/cart-context";
import Modal from "../UI/Modal";
import CartItem from "./CartItem";
import Checkout from "./Checkout";

const Cart = (props) => {
  const [isCheckingOut, setIsCheckingOut] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [didSubmit, setDidSubmit] = useState(false);
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

  const orderHandler = () => {
    console.log(isCheckingOut);
    setIsCheckingOut(true);
  };

  const submitOrderHandler = async (userData) => {
    setIsSubmitting(true);
    await fetch(
      "https://react-http-35719-default-rtdb.firebaseio.com/orders.json",
      {
        method: "POST",
        body: JSON.stringify({
          user: userData,
          orderedItems: cartCtx.items,
        }),
      }
    );
    setIsSubmitting(false);
    setDidSubmit(true);
    cartCtx.clearCart();
  };

  const cartModalContent = (
    <Fragment>
      {cartItems}
      <div className="total flex justify-between font-bold text-base">
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      {isCheckingOut && (
        <Checkout onConfirm={submitOrderHandler} onCancel={props.onHideCart} />
      )}
      {!isCheckingOut && (
        <div className="actions text-right space-x-4 mt-2">
          <button
            onClick={props.onHideCart}
            className="button-alt cursor-pointer bg-transparent text-[#8a2b06] border-[1px] px-6 py-1 rounded-full  border-[#8a2b06] hover:text-white hover:bg-red-700 hover:border-[#5a1a01]"
          >
            Close
          </button>
          {hasItems && (
            <button
              onClick={orderHandler}
              className="button-alt cursor-pointer bg-red-700 text-white border-[1px] px-6 py-1 rounded-full  border-[#8a2b06] hover:text-white hover:bg-red-800 hover:border-[#c93b02]"
            >
              Order
            </button>
          )}
        </div>
      )}
    </Fragment>
  );

  const isSubmittingModalContent = (
    <p className="text-center">Sending order request ...</p>
  );

  const didSubmitModalContent = (
    <p className="text-center">
      🎉🎉🎉 <br /> Order Accepted!
    </p>
  );
  return (
    <Modal onHideCart={props.onHideCart}>
      {!isSubmitting && !didSubmit && cartModalContent}{" "}
      {isSubmitting && isSubmittingModalContent}
      {didSubmit && !isSubmitting && didSubmitModalContent}
    </Modal>
  );
};

export default Cart;
