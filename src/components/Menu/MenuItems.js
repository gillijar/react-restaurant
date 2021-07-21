import { Link } from "react-router-dom";

import classes from "./MenuItems.module.css";
import DefaultButton from "../UI/DefaultButton";

const MenuItems = (props) => {
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
        <DefaultButton userClass={classes["user-btn"]}>
          Add To Cart
        </DefaultButton>
      </div>
    </li>
  );
};

export default MenuItems;
