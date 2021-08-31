import classes from "./FavoritesItem.module.css";
import { ReactComponent as FavoriteLogo } from "../../icons/heart.svg";

const FavoritesItem = (props) => {
  return (
    <li className={classes.item}>
      <div>
        <p>{props.id}</p>
        <p>{props.title}</p>
        <FavoriteLogo className={classes.logo} />
      </div>
    </li>
  );
};

export default FavoritesItem;
