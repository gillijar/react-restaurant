import ReactDOM from "react-dom";
import { Fragment } from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

import classes from "./MobileNavigation.module.css";

const MobileNavigation = (props) => {
  const category = useSelector((state) => state.category.category);

  return (
    <Fragment>
      {ReactDOM.createPortal(
        <div className={classes["mobile-nav"]}>
          <div>
            <p>
              <i
                className={`${classes["mobile-nav__icon"]} fas fa-times`}
                onClick={props.closeMobileNav}
              ></i>
            </p>
          </div>
          <ul>
            <li>
              <NavLink
                activeClassName={classes.active}
                to="/home"
                onClick={props.closeMobileNav}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                activeClassName={classes.active}
                to={`/menu/${category}`}
                onClick={props.closeMobileNav}
              >
                Menu
              </NavLink>
            </li>
            <li>
              <NavLink
                activeClassName={classes.active}
                to="/cart"
                onClick={props.closeMobileNav}
              >
                Cart
              </NavLink>
            </li>
          </ul>
        </div>,
        document.getElementById("mobile-nav-root")
      )}
    </Fragment>
  );
};

export default MobileNavigation;
