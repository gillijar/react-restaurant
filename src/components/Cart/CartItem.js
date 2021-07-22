import classes from "./CartItem.module.css";

const CartItem = (props) => {
  return (
    <figure className={classes["cart-item"]}>
      <div className={classes["cart-item__details"]}>
        <p className={classes["cart-item__details--multi"]}>
          x{props.quantity}
        </p>
        <p>{props.name}</p>
      </div>
      <div>
        <div className={classes["cart-item__price"]}>
          <p>${props.price}</p>
        </div>
        <button>-</button>
        <button>+</button>
      </div>
    </figure>
  );
};

export default CartItem;
