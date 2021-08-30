import { Fragment } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import MenuItems from "./MenuItems";
import MenuNav from "./MenuNav";
import LoadingSpinner from "../UI/LoadingSpinner";
import classes from "./Menu.module.css";

const Menu = (props) => {
  const menuItemsStore = useSelector((state) => state.menuItems.items);
  let { category } = useParams();
  const menuItems = menuItemsStore.filter((item) => item.category === category);

  return (
    <section className={classes.menu}>
      <MenuNav />
      <div className={classes["menu__container"]}>
        {props.isLoading && <LoadingSpinner />}
        {props.hasError && (
          <p className={classes.error}>
            Failed to fetch menu data. Please try again!
          </p>
        )}
        {!props.isLoading && !props.hasError && (
          <Fragment>
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
