import React, { useRef, useState } from "react";

const isEmpty = (value) => value.trim() === "";
const isNotFiveChars = (value) => value.trim().length !== 6;

const Checkout = (props) => {
  const [formInputsValidity, setFormInputsValidity] = useState({
    nameIsValid: true,
    streetIsValid: true,
    postalCodeIsValid: true,
    cityIsValid: true,
  });

  const nameInputRef = useRef();
  const streetInputRef = useRef();
  const postalCodeInputRef = useRef();
  const cityInputRef = useRef();

  const confirmHandler = (e) => {
    e.preventDefault();
    const enteredName = nameInputRef.current.value;
    const enteredStreet = streetInputRef.current.value;
    const enteredPostalCode = postalCodeInputRef.current.value;
    const enteredCity = cityInputRef.current.value;

    const enteredNameIsValid = !isEmpty(enteredName);
    const enteredStreetIsValid = !isEmpty(enteredStreet);
    const enteredPostalCodeIsValid = !isNotFiveChars(enteredPostalCode);
    const enteredCityIsValid = !isEmpty(enteredCity);

    //setting individual input's validity
    setFormInputsValidity({
      nameIsValid: enteredNameIsValid,
      streetIsValid: enteredStreetIsValid,
      cityIsValid: enteredCityIsValid,
      postalCodeIsValid: enteredPostalCodeIsValid,
    });

    //overall form's validity
    const formIsValid =
      enteredCityIsValid &&
      enteredStreetIsValid &&
      enteredNameIsValid &&
      enteredPostalCodeIsValid;

    if (!formIsValid) return;

    props.onConfirm({
      name: enteredName,
      street: enteredStreet,
      postalCode: enteredPostalCode,
      city: enteredCity,
    });
  };

  return (
    <form onSubmit={confirmHandler}>
      <div className="my-[1rem] max-h-[8rem] overflow-auto">
        <div className="">
          <label htmlFor="name" className="font-bold mb-1 block">
            Name
          </label>
          <input
            id="name"
            type="text"
            className="border-2 rounded-md"
            ref={nameInputRef}
          />
          {!formInputsValidity.nameIsValid && (
            <p className="text-red-500">Please enter a valid name!</p>
          )}
        </div>

        <div className="">
          <label htmlFor="street" className="font-bold mb-1 block">
            Street
          </label>
          <input
            id="street"
            type="text"
            name="Street"
            className="border-2 rounded-md"
            ref={streetInputRef}
          />
          {!formInputsValidity.streetIsValid && (
            <p className="text-red-500">Street is not valid!</p>
          )}
        </div>

        <div className="">
          <label htmlFor="postal" className="font-bold mb-1 block">
            Postal Code
          </label>
          <input
            id="postal"
            type="text"
            name="Postal Code"
            className="border-2 rounded-md"
            ref={postalCodeInputRef}
          />
          {!formInputsValidity.postalCodeIsValid && (
            <p className="text-red-500"> Entered Postal Code invalid</p>
          )}
        </div>

        <div className="">
          <label htmlFor="City" className="font-bold mb-1 block">
            City
          </label>
          <input
            id="City"
            type="text"
            className="border-2 rounded-md"
            ref={cityInputRef}
          />
          {!formInputsValidity.cityIsValid && (
            <p className="text-red-500">City not valid</p>
          )}
        </div>

        <div className="actions flex justify-end gap-4">
          <button className="bg-transparent text-[#5a1a01] cursor-pointer border-none rounded-[25px] py-2 px-8 hover:bg-[#ffe6dc]">
            Confirm
          </button>
          <button
            type="button"
            onClick={props.onCancel}
            className="bg-transparent text-[#5a1a01] cursor-pointer border-none rounded-[25px] py-2 px-8 hover:bg-[#ffe6dc]"
          >
            Cancel
          </button>
        </div>
      </div>
    </form>
  );
};

export default Checkout;
