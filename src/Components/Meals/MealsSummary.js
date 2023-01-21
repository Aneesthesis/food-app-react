import { Fragment } from "react";

const MealsSummary = () => {
  return (
    <section className="relative -mt-[10rem] m-auto text-center w-[90%] max-w-[40rem] bg-[#383838] p-1 mb-4 text-white shadow-md shadow-black rounded-md">
      <h2 className="font-semibold text-2xl mt-0 pb-4">
        Delicious Food, Delivered To You
      </h2>
      <div className=" pb-4">
        <p className="pb-2">
          Choose your favorite meal from our broad selection of available meals
          and enjoy a delicious lunch or dinner at home.
        </p>
        <p>
          All our meals are cooked with high-quality ingredients, just-in-time
          and of course by experienced chefs!
        </p>
      </div>
    </section>
  );
};

export default MealsSummary;
