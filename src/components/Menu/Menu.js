import { useEffect, useState, Fragment } from "react";
import { useDispatch } from "react-redux";
import { menuItemsActions } from "../../store/menu-items";

import MenuItems from "./MenuItems";
import LoadingSpinner from "../UI/LoadingSpinner";
import classes from "./Menu.module.css";

const Menu = () => {
  const dispatch = useDispatch();

  const [menuItems, setMenuItems] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    const fetchMenuData = async () => {
      setIsLoading(true);

      try {
        const response = await fetch(
          "https://react-ecommerce-17663-default-rtdb.firebaseio.com/meals.json"
        );

        if (!response.ok) {
          throw new Error("Failed to fetch the menu, please try again!");
        }
        const data = await response.json();

        const transformedMenuData = [];

        for (const key in data) {
          const menuObj = {
            key: data[key].id,
            ...data[key],
          };

          transformedMenuData.push(menuObj);
        }

        setMenuItems(transformedMenuData);
        setIsLoading(false);
      } catch (err) {
        console.log(err.message);
        setHasError(true);
        setIsLoading(false);
      }
    };

    fetchMenuData();
  }, []);

  useEffect(() => {
    dispatch(menuItemsActions.addMenuItems(menuItems));
  }, [menuItems, dispatch]);

  return (
    <section className={classes.menu}>
      <div className={classes["menu__container"]}>
        {isLoading && <LoadingSpinner />}
        {hasError && (
          <p className={classes.error}>
            Failed to fetch menu data. Please try again!
          </p>
        )}
        {!isLoading && !hasError && (
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
