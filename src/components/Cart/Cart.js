import { useSelector } from "react-redux";

import CartItem from "./CartItem";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.items);

  return (
    <section>
      {cartItems.length === 0 && <p>Empty cart</p>}
      {cartItems.length > 0 &&
        cartItems.map((item) => (
          <CartItem name={item.name} price={item.price} />
        ))}
    </section>
  );
};

export default Cart;
