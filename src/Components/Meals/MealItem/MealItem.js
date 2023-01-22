import React, { useContext } from "react";
import CartContext from "../../../store/cart-context";
import MealItemForm from "./MealItemForm";

const MealItem = (props) => {
  const cartCtx = useContext(CartContext);
  const price = `$${props.price.toFixed(2)}`;

  const addToCartHandler = (amount) => {
    cartCtx.addItem({
      id: props.id,
      name: props.name,
      amount: amount,
      price: props.price,
    });
  };
  return (
    <li className="border-b-[1px] border-black">
      <div className="flex justify-between">
        <div className="m-4 pb-4 ">
          <h3 className="font-semibold">{props.name}</h3>
          <p className="italic">{props.description}</p>
          <p className="text-orange-700 font-bold">{price}</p>
        </div>
        <div className="m-4">
          <MealItemForm onAddToCart={addToCartHandler} />
        </div>
      </div>
    </li>
  );
};

export default MealItem;
