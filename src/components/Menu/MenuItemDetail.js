import { useSelector, useDispatch } from "react-redux";
import { useParams, useHistory } from "react-router-dom";
import { cartActions } from "../../store/cart-items";
import { favoritesActions } from "../../store/favorites";
import { ReactComponent as FavoriteLogoOutlined } from "../../icons/heart-outlined.svg";
import { ReactComponent as FavoriteLogo } from "../../icons/heart.svg";
import GlobalButton from "../UI/GlobalButton";

import classes from "./MenuItemDetail.module.css";

const MenuItemDetail = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  const menuItem = useSelector((state) => state.menuItems.items);
  const { itemId } = useParams();
  const item = menuItem.find((item) => item.id === itemId);
  const { id, title, price, img, category } = item;

  const favorites = useSelector((state) => state.favorites.favorites);
  const isFavorited = favorites.find((item) => item.id === id);

  const goBackHandler = () => {
    history.goBack();
  };

  const addToCartHandler = () => {
    dispatch(
      cartActions.addItemToCart({
        id,
        title,
        price,
      })
    );
  };

  const toggleFavoriteHandler = () => {
    if (!isFavorited) {
      dispatch(
        favoritesActions.addFavorite({
          id,
          title,
          img,
          category,
        })
      );
    } else {
      dispatch(favoritesActions.removeFavorite(id));
    }
  };

  return (
    <div className={classes.detail}>
      <div className={classes["detail__img-container"]}>
        <img
          src={item.img}
          alt={item.description}
          className={classes["detail__img-container--img"]}
        />
        <div className={classes.back} onClick={goBackHandler}>
          <i className="fas fa-arrow-left"></i>
        </div>
      </div>
      <div className={classes["detail__favorites"]}>
        <div
          className={classes["detail__favorites-container"]}
          onClick={toggleFavoriteHandler}
        >
          {!isFavorited && (
            <FavoriteLogoOutlined
              className={classes["detail__favorites-icon"]}
            />
          )}
          {isFavorited && (
            <FavoriteLogo className={classes["detail__favorites-icon"]} />
          )}
        </div>
      </div>
      <div className={classes["detail__info"]}>
        <div className={classes["detail__info--main"]}>
          <p className={classes.title}>{item.title}</p>
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
