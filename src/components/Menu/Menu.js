import { useSelector } from "react-redux";
import { useEffect, useState, useCallback } from "react";

import MenuItems from "./MenuItems";
import classes from "./Menu.module.css";

const Menu = () => {
  const cartAmount = useSelector((state) => state.cart.totalQuantity);
  const [menuItems, setMenuItems] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchMenuData = useCallback(async () => {
    setIsLoading(true);
    const response = await fetch(
      "https://react-ecommerce-17663-default-rtdb.firebaseio.com/meals.json"
    );
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
  }, []);

  useEffect(() => {
    fetchMenuData();
  }, [fetchMenuData]);

  return (
    <section className={classes.menu}>
      <div className={classes.menu__container}>
        <p className={classes["menu__container--cart-desc"]}>
          You have {cartAmount} items in your cart
        </p>
        {isLoading && <p>Loading...</p>}
        {!isLoading && (
          <ul>
            {menuItems.map((item) => (
              <MenuItems
                key={item.id}
                id={item.id}
                title={item.title}
                price={item.price}
              />
            ))}
          </ul>
        )}
      </div>
    </section>
  );
};

export default Menu;
