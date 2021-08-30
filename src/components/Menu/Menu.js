import { Fragment } from "react";
import { useSelector } from "react-redux";

import MenuItems from "./MenuItems";
import LoadingSpinner from "../UI/LoadingSpinner";
import classes from "./Menu.module.css";

const Menu = (props) => {
  const menuItems = useSelector((state) => state.menuItems.items);

  return (
    <section className={classes.menu}>
      <div className={classes["menu__container"]}>
        {props.isLoading && <LoadingSpinner />}
        {props.hasError && (
          <p className={classes.error}>
            Failed to fetch menu data. Please try again!
          </p>
        )}
        {!props.isLoading && !props.hasError && (
          <Fragment>
            <h2>Our Menu</h2>
            <ul>
              {menuItems.map((item) => (
                <MenuItems
                  key={item.id}
                  id={item.id}
                  title={item.title}
                  price={item.price}
                  description={item.description}
                />
              ))}
            </ul>
          </Fragment>
        )}
      </div>
    </section>
  );
};

export default Menu;
