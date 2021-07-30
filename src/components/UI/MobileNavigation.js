import ReactDOM from "react-dom";
import { Fragment } from "react";
import { NavLink } from "react-router-dom";

import classes from "./MobileNavigation.module.css";

const MobileNavigation = (props) => {
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
                to="/menu"
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
