import Cart from "../components/Cart/Cart";
import { useEffect } from "react";
import { useSelector } from "react-redux";

const CartPage = () => {
  const cartTotal = useSelector((state) => state.cart.totalQuantity);

  useEffect(() => {
    document.title = `QuickEats | Cart (${cartTotal})`;
  }, []);

  return <Cart />;
};

export default CartPage;
