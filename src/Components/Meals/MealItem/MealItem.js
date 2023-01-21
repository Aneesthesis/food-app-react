import React from "react";

const MealItem = (props) => {
  const price = `$${props.price.toFixed(2)}`;
  return (
    <li>
      <div className="m-4 pb-4 border-b-[1px] border-black">
        <h3 className="font-semibold">{props.name}</h3>
        <p className="italic">{props.description}</p>
        <p className="text-orange-700 font-bold">{price}</p>
      </div>
    </li>
  );
};

export default MealItem;
