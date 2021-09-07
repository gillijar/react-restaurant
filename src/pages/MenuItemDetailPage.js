import MenuItemDetail from "../components/Menu/MenuItemDetail";
import { useSelector } from "react-redux";
import { useParams } from "react-router";
import { Fragment } from "react";

const MenuItemDetailPage = () => {
  const menuItems = useSelector((state) => state.menuItems.items);
  const { itemId } = useParams();
  const item = menuItems.find((item) => item.id === itemId);

  return (
    <Fragment>
      {menuItems.length > 0 && (
        <MenuItemDetail
          itemId={itemId}
          id={item.id}
          title={item.title}
          price={item.price}
          img={item.img}
          category={item.category}
          description={item.description}
        />
      )}
    </Fragment>
  );
};

export default MenuItemDetailPage;
