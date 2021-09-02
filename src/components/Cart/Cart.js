import { useSelector, useDispatch } from "react-redux";
import { Fragment, useState } from "react";
import { cartActions } from "../../store/cart-items";
import { useHistory } from "react-router-dom";

import CartItem from "./CartItem";
import GlobalButton from "../UI/GlobalButton";
import CartForm from "./CartForm";
import OrderModal from "../UI/OrderModal";
import classes from "./Cart.module.css";

const Cart = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const cartItems = useSelector((state) => state.cart.items);
  const totalCartPrice = useSelector((state) => state.cart.totalCartPrice);
  const orderSummary = useSelector((state) => state.cart.ordered);
  const pickup = useSelector((state) => state.cart.pickup);

  const [checkoutReady, setCheckoutReady] = useState(false);

  const cartItemContent = cartItems.map((item) => (
    <CartItem
      key={item.id}
      id={item.id}
      price={item.price}
      name={item.name}
      totalPrice={item.totalPrice}
      quantity={item.quantity}
    />
  ));

  const readyToCheckout = () => {
    setCheckoutReady((prevState) => !prevState);
  };

  const closeModal = () => {
    dispatch(cartActions.returnOrderState());

    history.push("/home");
  };

  return (
    <Fragment>
      {orderSummary && <OrderModal onClose={closeModal} />}
      <section className={classes.cart}>
        {!orderSummary && (
          <div className={classes["cart-container"]}>
            {cartItems.length === 0 && (
              <p className={classes["empty-cart"]}>
                Your cart is currently empty.
              </p>
            )}
            {cartItems.length > 0 && (
              <Fragment>
                <div className={classes["cart-container__total-price"]}>
                  <div>
                    <p className={classes["order-pickup"]}>
                      Order for <b>{pickup ? "Pickup" : "Delivery"}</b>
                    </p>
                  </div>
                  <div>
                    <label htmlFor="total-cart-price>">Total:</label>
                    <p id="total-cart-price">${totalCartPrice.toFixed(2)}</p>
                  </div>
                </div>
                <ul>{cartItemContent}</ul>
                {!checkoutReady && (
                  <div className={classes["cart-container__btn--checkout"]}>
                    <GlobalButton
                      onClick={readyToCheckout}
                      userClass={classes["cart-container__checkout"]}
                    >
                      Checkout
                    </GlobalButton>
                  </div>
                )}
                {checkoutReady && (
                  <CartForm
                    btnClass={classes["cart-container__btn"]}
                    cancelCheckout={readyToCheckout}
                  />
                )}
              </Fragment>
            )}
          </div>
        )}
      </section>
    </Fragment>
  );
};

export default Cart;
