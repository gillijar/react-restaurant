import MainNavigation from "./MainNavigation";

import classes from "./Header.module.css";

const Header = () => {
  return (
    <header className={classes.header}>
      <div className={classes["header__title"]}>Application Title</div>
      <MainNavigation />
    </header>
  );
};

export default Header;
