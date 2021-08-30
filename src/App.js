import { Switch, Route, Redirect } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { menuItemsActions } from "./store/menu-items";

import Layout from "./components/Layout/Layout";
import HomePage from "./pages/HomePage";
import MenuPage from "./pages/MenuPage";
import MenuItemDetail from "./components/Menu/MenuItemDetail";
import CartPage from "./pages/CartPage";
import PageNotFound from "./pages/PageNotFound";
import "./App.css";

function App() {
  const dispatch = useDispatch();

  const [menuItems, setMenuItems] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    const fetchMenuData = async () => {
      setIsLoading(true);

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

        setMenuItems(transformedMenuData);
        setIsLoading(false);
      } catch (err) {
        console.log(err.message);
        setHasError(true);
        setIsLoading(false);
      }
    };

    fetchMenuData();
  }, []);

  useEffect(() => {
    dispatch(menuItemsActions.addMenuItems(menuItems));
  }, [menuItems, dispatch]);

  return (
    <Layout>
      <Switch>
        <Route path="/" exact>
          <Redirect to="/home" />
        </Route>
        <Route path="/home">
          <HomePage />
        </Route>
        <Route path="/menu" exact>
          <MenuPage isLoading={isLoading} hasError={hasError} />
        </Route>
        <Route path="/menu/:itemId">
          <MenuItemDetail />
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
