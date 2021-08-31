import { useSelector } from "react-redux";

import classes from "./Favorites.module.css";
import FavoritesItem from "./FavoritesItem";

const Favorites = () => {
  const favorites = useSelector((state) => state.favorites.favorites);

  return (
    <section className={classes.favorites}>
      <h1>This page is currently still being built</h1>
      <ul>
        {!favorites && (
          <p>You currently don't have any favorites. Add some items!</p>
        )}
        {favorites &&
          favorites.map((item) => (
            <FavoritesItem key={item.id} id={item.id} title={item.title} />
          ))}
      </ul>
    </section>
  );
};

export default Favorites;
