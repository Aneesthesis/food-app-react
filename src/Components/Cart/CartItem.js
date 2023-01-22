import React from "react";

const CartItem = (props) => {
  const price = `$${props.price.toFixed(2)}`;

  return (
    <li className="cart-item flex justify-between  mt-6 mb-2 space-y-4 font-bold border-b-[1px] border-black">
      <div className="flex flex-col items-center justify-start">
        <h2>{props.name}</h2>
        <div className="summary flex justify-between pb-3 pt-1 space-x-4">
          <span className="price text-red-700">{price}</span>
          <span className="amount text-sm font-md border-[1px] border-red-700 rounded-full px-[3px]">{`×${props.amount}`}</span>
        </div>
      </div>
      <div className="actions space-x-2 text-lg">
        <button
          onClick={props.onRemove}
          className="py-[1px] px-4 text-red-700 border-red-700 border-[1px] rounded-md hover:bg-red-700 hover:text-white"
        >
          –
        </button>
        <button
          onClick={props.onAdd}
          className="py-[1px] px-4 text-red-700 border-red-700 border-[1px] rounded-md hover:bg-red-700 hover:text-white"
        >
          +
        </button>
      </div>
    </li>
  );
};

export default CartItem;
