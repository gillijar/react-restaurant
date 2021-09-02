import { Switch, Route, Redirect } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { menuItemsActions } from "./store/menu-items";
import { favoritesActions } from "./store/favorites";

import Layout from "./components/Layout/Layout";
import HomePage from "./pages/HomePage";
import MenuPage from "./pages/MenuPage";
import MenuItemDetail from "./components/Menu/MenuItemDetail";
import CartPage from "./pages/CartPage";
import PageNotFound from "./pages/PageNotFound";
import FavoritesPage from "./pages/FavoritesPage";
import "./App.css";

function App() {
  const dispatch = useDispatch();

  // Loading the menu data from the API so that once app loads menu will never be re rendered until user leaves or reloads app
  useEffect(() => {
    const fetchMenuData = async () => {
      try {
        const response = await fetch(
          "https://react-ecommerce-17663-default-rtdb.firebaseio.com/meals.json"
        );

        if (!response.ok) {
          throw new Error("Failed to fetch the menu, please try again!");
        }
        const data = await response.json();

        const transformedMenuData = [];

        for (const key in data) {
          const menuObj = {
            key: data[key].id,
            ...data[key],
          };

          transformedMenuData.push(menuObj);
        }

        dispatch(menuItemsActions.addMenuItems(transformedMenuData));
      } catch (err) {
        console.log(err.message);
      }
    };

    fetchMenuData();
  }, [dispatch]);

  // Checking for local storage to set users favorites when app loads
  useEffect(() => {
    if (localStorage.length !== 0) {
      const test = JSON.parse(localStorage.getItem("favorites"));
      dispatch(favoritesActions.setStoredData(test));
    }
  }, [dispatch]);

  return (
    <Layout>
      <Switch>
        <Route path="/" exact>
          <Redirect to="/home" />
        </Route>
        <Route path="/home">
          <HomePage />
        </Route>
        <Route path="/menu/:category" exact>
          <MenuPage />
        </Route>
        <Route path="/menu/:category/:itemId">
          <MenuItemDetail />
        </Route>
        <Route path="/favorites">
          <FavoritesPage />
        </Route>
        <Route path="/cart">
          <CartPage />
        </Route>
        <Route path="*">
          <PageNotFound />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
