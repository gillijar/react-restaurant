import { useSelector } from "react-redux";

import CartItem from "./CartItem";
import classes from "./Cart.module.css";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const totalCartPrice = useSelector((state) => state.cart.totalCartPrice);

  return (
    <section className={classes.cart}>
      <div className={classes["cart-container"]}>
        {cartItems.length === 0 && <p>Empty cart</p>}
        {cartItems.length > 0 &&
          cartItems.map((item) => (
            <CartItem
              name={item.name}
              price={item.price}
              quantity={item.quantity}
            />
          ))}
        <p>${totalCartPrice.toFixed(2)}</p>
      </div>
    </section>
  );
};

export default Cart;
