import { Fragment } from "react";
import { useSelector } from "react-redux";

import classes from "./Favorites.module.css";
import FavoritesItem from "./FavoritesItem";

const Favorites = () => {
  const favorites = useSelector((state) => state.favorites.favorites);

  return (
    <section className={classes.favorites}>
      <ul>
        {favorites.length === 0 && (
          <p>You don't have any favorites. Add some items!</p>
        )}
        {favorites.length > 0 && (
          <Fragment>
            <h2>Your Favorites</h2>
            {favorites.map((item) => (
              <FavoritesItem
                key={item.id}
                id={item.id}
                title={item.title}
                img={item.img}
                category={item.category}
                description={item.description}
              />
            ))}
          </Fragment>
        )}
      </ul>
    </section>
  );
};

export default Favorites;
