import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { itemCategoryActions } from "../../store/item-category";
import classes from "./MenuNav.module.css";

const MenuNav = () => {
  const dispatch = useDispatch();

  const changeCategoryHandler = (e) => {
    const categoryTextContent = e.target.textContent.toLowerCase();
    dispatch(itemCategoryActions.changeCategory(categoryTextContent));
  };

  return (
    <nav className={classes.nav}>
      <NavLink
        to="/menu/appetizers"
        activeClassName={classes.active}
        onClick={changeCategoryHandler}
      >
        Appetizers
      </NavLink>
      <NavLink
        to="/menu/entrees"
        activeClassName={classes.active}
        onClick={changeCategoryHandler}
      >
        Entrees
      </NavLink>
      <NavLink
        to="/menu/desserts"
        activeClassName={classes.active}
        onClick={changeCategoryHandler}
      >
        Desserts
      </NavLink>
    </nav>
  );
};

export default MenuNav;
