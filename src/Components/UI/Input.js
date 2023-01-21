import React from "react";

function Input(props) {
  return (
    <div className="mb-2">
      <label className="m-4 font-bold" htmlFor={props.input.id}>
        {props.label}
      </label>
      <input {...props.input}></input>
    </div>
  );
}

export default Input;
