import { Switch, Route, Redirect } from "react-router-dom";

import Layout from "./components/Layout/Layout";
import HomePage from "./pages/HomePage";
import MenuPage from "./pages/MenuPage";
import MenuItemDetail from "./components/Menu/MenuItemDetail";
import CartPage from "./pages/CartPage";
import PageNotFound from "./pages/PageNotFound";
import "./App.css";

function App() {
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
          <MenuPage />
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
