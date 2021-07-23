import { useDispatch } from "react-redux";
import { cartActions } from "../../store/cart-items";

import classes from "./CartItem.module.css";

const CartItem = (props) => {
  const dispatch = useDispatch();

  const { id, name, quantity, totalPrice, price } = props;

  const addItemToCart = () => {
    dispatch(
      cartActions.addItemToCart({
        id,
        name,
        price,
        totalPrice,
        quantity,
      })
    );
  };

  return (
    <li className={classes["cart-item"]}>
      <figure>
        <div className={classes["cart-item__details"]}>
          <p className={classes["cart-item__details--multi"]}>
            x{props.quantity}
          </p>
          <p>{props.name}</p>
        </div>
        <div>
          <div className={classes["cart-item__price"]}>
            <p>${props.totalPrice.toFixed(2)}</p>
          </div>
          <button>-</button>
          <button onClick={addItemToCart}>+</button>
        </div>
      </figure>
    </li>
  );
};

export default CartItem;
