import Menu from "../components/Menu/Menu";
import { useEffect } from "react";

const MenuPage = () => {
  useEffect(() => {
    document.title = `QuickEats | Menu`;
  }, []);

  return <Menu />;
};

export default MenuPage;
