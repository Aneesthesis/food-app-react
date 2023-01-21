import CartIcon from "../Cart/CartIcon";

const HeaderCartButton = (props) => {
  return (
    <button className="flex justify-around items-center bg-[#4d1601] w-[16%] px-8 py-[0.40rem] rounded-2xl text-sm font-bold hover:bg-[#2c0d00] animate-[bump_300ms_ease-out] ">
      <span>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className="badge py-1 px-3 ml-1 bg-[#b94517] rounded-[25px]">
        3
      </span>
    </button>
  );
};

export default HeaderCartButton;