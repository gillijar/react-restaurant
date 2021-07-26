import MainNavigation from "./MainNavigation";
import { Link } from "react-router-dom";

import classes from "./Header.module.css";

const Header = () => {
  return (
    <header className={classes.header}>
      <Link to="/home">
        <div className={classes["header__title"]}>QuickEats</div>
      </Link>
      <MainNavigation />
    </header>
  );
};

export default Header;
