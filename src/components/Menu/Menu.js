import { Fragment } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import MenuItems from "./MenuItems";
import MenuNav from "./MenuNav";
import classes from "./Menu.module.css";

const Menu = (props) => {
  const menuItemsStore = useSelector((state) => state.menuItems.items);
  let { category } = useParams();
  const menuItems = menuItemsStore.filter((item) => item.category === category);

  return (
    <section className={classes.menu}>
      <MenuNav />
      <div className={classes["menu__container"]}>
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
      </div>
    </section>
  );
};

export default Menu;
