import { useSelector, useDispatch } from "react-redux";
import { useParams, useHistory } from "react-router-dom";
import { cartActions } from "../../store/cart-items";
import GlobalButton from "../UI/GlobalButton";

import classes from "./MenuItemDetail.module.css";

const MenuItemDetail = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  const menuItem = useSelector((state) => state.menuItems.items);
  const { itemId } = useParams();
  const item = menuItem.find((item) => item.id === itemId);

  const goBackHandler = () => {
    history.goBack();
  };

  const { id, title, price } = item;

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
    <div className={classes.detail}>
      <div className={classes["detail__img-container"]}>
        <img src={item.img} className={classes["detail__img-container--img"]} />
        <div className={classes.back} onClick={goBackHandler}>
          <i className="fas fa-arrow-left"></i>
        </div>
      </div>
      <div className={classes["detail__info"]}>
        <div className={classes["detail__info--main"]}>
          <p>{item.title}</p>
          <p>
            <strong>${item.price}</strong>
          </p>
        </div>
        <div className={classes["detail__info--description"]}>
          <p>{item.description}</p>
        </div>
      </div>
      <div className={classes["detail__btn-container"]}>
        <GlobalButton userClass={classes.btn} onClick={addToCartHandler}>
          Add to Cart
        </GlobalButton>
      </div>
    </div>
  );
};

export default MenuItemDetail;
