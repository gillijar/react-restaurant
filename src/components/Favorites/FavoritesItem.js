import { useDispatch } from "react-redux";
import { ReactComponent as FavoriteLogo } from "../../icons/heart.svg";
import { Link } from "react-router-dom";
import { favoritesActions } from "../../store/favorites";

import classes from "./FavoritesItem.module.css";

const FavoritesItem = (props) => {
  const dispatch = useDispatch();

  const removeFavoriteHandler = () => {
    dispatch(favoritesActions.removeFavorite(props.id));
  };

  return (
    <li className={classes.item}>
      <div className={classes.container}>
        <div className={classes["img-container"]}>
          <img src={props.img} alt={props.description} />
        </div>
        <div className={classes.info}>
          <p>{props.title}</p>
          <Link to={`/menu/${props.category}/${props.id}`}>
            View item &#8594;
          </Link>
        </div>
        <FavoriteLogo
          className={classes.logo}
          onClick={removeFavoriteHandler}
        />
      </div>
    </li>
  );
};

export default FavoritesItem;
