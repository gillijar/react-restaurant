const CartItem = (props) => {
  return (
    <div>
      <p>{props.name}</p>
      <p>{props.price}</p>
    </div>
  );
};

export default CartItem;
