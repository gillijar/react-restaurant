import MenuItems from "./MenuItems";
import classes from "./Menu.module.css";

const Menu = () => {
  const DUMMY_ITEMS = [
    { id: "m1", title: "Pizza", price: 19.99 },
    { id: "m2", title: "Hamburger", price: 13 },
  ];

  return (
    <section className={classes.menu}>
      <p>You have 3 items in your cart</p>
      <ul>
        {DUMMY_ITEMS.map((item) => (
          <MenuItems key={item.id} title={item.title} price={item.price} />
        ))}
      </ul>
    </section>
  );
};

export default Menu;
