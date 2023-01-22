import React from "react";

const Input = React.forwardRef((props, ref) => {
  return (
    <div className="mb-2">
      <label className="m-4 font-bold" htmlFor={props.input.id}>
        {props.label}
      </label>
      <input ref={ref} {...props.input}></input>
    </div>
  );
});

export default Input;
