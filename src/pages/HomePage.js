import { Link } from "react-router-dom";
import { useEffect } from "react";

import classes from "./HomePage.module.css";
import HeroImg from "../img/homepage-hero.jpg";
import GlobalButton from "../components/UI/GlobalButton";

const HomePage = () => {
  useEffect(() => {
    document.title = `QuickEats | Home`;
  }, []);

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
        <Link to="/menu/entrees" className={classes["menu-link"]}>
          <GlobalButton type="button" userClass={classes.button}>
            View Our Menu
          </GlobalButton>
        </Link>
      </div>
    </section>
  );
};

export default HomePage;
