import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { cartActions } from "../../store/cart-items";

import classes from "./MenuItems.module.css";
import DefaultButton from "../UI/DefaultButton";

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
      <div className={classes["menu-item__buttons"]}>
        <Link className={classes["more-info"]}>
          <DefaultButton userClass={classes["user-btn"]}>
            More Info
          </DefaultButton>
        </Link>
        <DefaultButton
          userClass={classes["user-btn"]}
          onClick={addToCartHandler}
        >
          Add To Cart
        </DefaultButton>
      </div>
    </li>
  );
};

export default MenuItems;
