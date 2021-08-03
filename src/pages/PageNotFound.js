import { Link } from "react-router-dom";
import { useEffect } from "react";
import PageNotFoundLogo from "../icons/404.png";
import GlobalButton from "../components/UI/GlobalButton";

import classes from "./PageNotFound.module.css";

const PageNotFound = () => {
  useEffect(() => {
    document.title = `QuickEats | Page Not Found`;
  }, []);

  return (
    <figure className={classes["page-not-found"]}>
      <div>
        <img src={PageNotFoundLogo} alt="404 error" />
      </div>
      <figcaption>Couldn't find the requested page. Try again!</figcaption>
      <Link to="/home">
        <GlobalButton userClass={classes.btn}>Try again!</GlobalButton>
      </Link>
    </figure>
  );
};

export default PageNotFound;
