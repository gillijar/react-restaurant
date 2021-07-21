import { Link } from "react-router-dom";

import classes from "./HomePage.module.css";
import HeroImg from "../img/homepage-hero.jpg";
import DefaultButton from "../components/UI/DefaultButton";

const HomePage = () => {
  return (
    <section className={classes["home-page"]}>
      <div className={classes["home-page__hero"]}>
        <img src={HeroImg} />
        <h1>Don't starve, just order!</h1>
      </div>
      <Link to="/menu" className={classes["menu-link"]}>
        <DefaultButton type="button" userClass={classes.button}>
          View Our Menu
        </DefaultButton>
      </Link>
    </section>
  );
};

export default HomePage;
