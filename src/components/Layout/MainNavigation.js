import { ReactComponent as CartLogo } from "../../icons/shopping-cart.svg";
import classes from "./MainNavigation.module.css";

const MainNavigation = () => {
  return (
    <nav className={classes.nav}>
      <ul>
        <li>Home</li>
        <li>Menu</li>
        <li className={classes["nav-cart"]}>
          <CartLogo className={classes["nav-cart__logo"]} />
          <div className={classes["nav-cart__logo--badge"]}>0</div>
        </li>
      </ul>
    </nav>
  );
};

export default MainNavigation;
