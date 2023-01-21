const Card = (props) => {
  return (
    <div className="bg-amber-200 rounded-lg p-4 shadow-md w-3/4 m-auto">
      {props.children}
    </div>
  );
};
export default Card;
