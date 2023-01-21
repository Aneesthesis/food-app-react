import React, { Fragment } from "react";
import meals from "../../assets/meals.jpg";
import HeaderCartButton from "./HeaderCartButton";

function Header() {
  return (
    <Fragment>
      <header className="fixed w-full flex justify-around items-center h-[5rem] bg-[#8a2b06] text-white text-3xl z-10">
        <h1 className="font-semibold">Konnoiseur's Kafe</h1>
        <HeaderCartButton />
      </header>
      <div className="w-full h-[25rem] overflow-hidden z-0">
        <img
          src={meals}
          className="h-full w-[120%] object-cover -rotate-[5deg] -translate-x-[1rem] -translate-y-[4rem] "
          alt="Meals"
        ></img>
      </div>
    </Fragment>
  );
}

export default Header;
