import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { useState, Fragment } from "react";

import { ReactComponent as CartLogo } from "../../icons/shopping-cart.svg";
import MobileNavigation from "../UI/MobileNavigation";
import classes from "./MainNavigation.module.css";

const MainNavigation = () => {
  const [mobileNav, setMobileNav] = useState(false);
  const cartNumberOfItems = useSelector((state) => state.cart.totalQuantity);
  const category = useSelector((state) => state.category.category);

  const toggleMobileNav = () => {
    setMobileNav((prevState) => !prevState);
  };

  return (
    <Fragment>
      {mobileNav && <MobileNavigation closeMobileNav={toggleMobileNav} />}
      <nav className={classes.nav}>
        <div className={classes["mobile-nav"]}>
          <button onClick={toggleMobileNav}></button>
        </div>
        <ul>
          <div className={classes["desktop-nav"]}>
            <li>
              <NavLink activeClassName={classes.active} to="/home">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                activeClassName={classes.active}
                to={`/menu/${category}`}
              >
                Menu
              </NavLink>
            </li>
          </div>
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
    </Fragment>
  );
};

export default MainNavigation;
