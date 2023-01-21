import React from "react";
import Input from "../../UI/Input";

const MealItemForm = (props) => {
  return (
    <div>
      <Input
        label="Amount"
        input={{
          id: "amount_" + props.id,
          type: "number",
          min: "0",
          max: "9",
          step: "1",
          default: "0",
        }}
      />
      <button className="text-white font-bold bg-red-800 text-center ml-10 px-6 py-1 rounded-full">
        +Add
      </button>
    </div>
  );
};

export default MealItemForm;
