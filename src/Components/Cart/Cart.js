import React from "react";
import Modal from "../UI/Modal";

const Cart = (props) => {
  const cartItems = (
    <ul className="cart-items max-h-[20rem] overflow-auto">
      {[{ id: "c1", name: "Sushi", amount: 2, price: 12.99 }].map((item) => (
        <li>{item.name}</li>
      ))}
    </ul>
  );

  return (
    <Modal onHideCart={props.onHideCart}>
      {cartItems}
      <div className="total flex justify-between font-bold text-base">
        <span>Total Amount</span>
        <span>$35.53</span>
      </div>
      <div className="actions text-right space-x-4 mt-2">
        <button
          onClick={props.onHideCart}
          className="button-alt cursor-pointer bg-transparent text-[#8a2b06] border-[1px] px-6 py-1 rounded-full  border-[#8a2b06] hover:text-white hover:bg-[#5a1a01] hover:border-[#5a1a01]"
        >
          Close
        </button>
        <button className="button-alt cursor-pointer bg-transparent text-[#8a2b06] border-[1px] px-6 py-1 rounded-full  border-[#8a2b06] hover:text-white hover:bg-[#5a1a01] hover:border-[#5a1a01]">
          Order
        </button>
      </div>
    </Modal>
  );
};

export default Cart;
