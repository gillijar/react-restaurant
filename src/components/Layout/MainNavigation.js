import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

import { ReactComponent as CartLogo } from "../../icons/shopping-cart.svg";
import classes from "./MainNavigation.module.css";

const MainNavigation = () => {
  const cartNumberOfItems = useSelector((state) => state.cart.totalQuantity);

  return (
    <nav className={classes.nav}>
      <div className={classes["mobile-nav"]}>
        <button></button>
      </div>
      <ul>
        <li>
          <NavLink activeClassName={classes.active} to="/home">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName={classes.active} to="/menu">
            Menu
          </NavLink>
        </li>
        <li>
          <NavLink to="/cart" className={classes["nav-cart"]}>
            <CartLogo className={classes["nav-cart__logo"]} />
            <div className={classes["nav-cart__logo--badge"]}>
              {cartNumberOfItems}
            </div>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default MainNavigation;
