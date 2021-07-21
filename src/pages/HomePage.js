import { Link } from "react-router-dom";

import classes from "./HomePage.module.css";
import HeroImg from "../img/homepage-hero.jpg";
import DefaultButton from "../components/UI/DefaultButton";

const HomePage = () => {
  const backgroundImage = {
    backgroundImage: `linear-gradient(
    rgba(78, 89, 140, 0.6) 0%,
    rgba(78, 89, 140, 0.6) 100%,
    transparent 100%
  ),
  url(${HeroImg})`,
    backgroundSize: "cover",
  };

  return (
    <section className={classes["home-page"]}>
      <div className={classes["home-page__hero"]} style={backgroundImage}>
        <h1>Don't starve, just order!</h1>
        <Link to="/menu" className={classes["menu-link"]}>
          <DefaultButton type="button" userClass={classes.button}>
            View Our Menu
          </DefaultButton>
        </Link>
      </div>
    </section>
  );
};

export default HomePage;
