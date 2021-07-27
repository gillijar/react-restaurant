import { useDispatch } from "react-redux";
import { cartActions } from "../../store/cart-items";

import classes from "./MenuItems.module.css";
import GlobalButton from "../UI/GlobalButton";

const MenuItems = (props) => {
  const dispatch = useDispatch();

  const { id, title, price } = props;

  const addToCartHandler = () => {
    dispatch(
      cartActions.addItemToCart({
        id,
        title,
        price,
      })
    );
  };

  return (
    <li className={classes["menu-item"]}>
      <div className={classes["menu-item__details"]}>
        <p>{props.title}</p>
        <p>${props.price}</p>
      </div>
      <p className={classes["menu-items__details--description"]}>
        {props.description}
      </p>
      <div className={classes["menu-item__buttons"]}>
        <GlobalButton
          userClass={classes["user-btn"]}
          onClick={addToCartHandler}
        >
          Add To Cart
        </GlobalButton>
      </div>
    </li>
  );
};

export default MenuItems;
