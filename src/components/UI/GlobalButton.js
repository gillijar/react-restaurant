import classes from "./GlobalButton.module.css";

const GlobalButton = (props) => {
  return (
    <button
      type={props.type}
      onClick={props.onClick}
      className={`${classes.button} ${props.userClass}`}
    >
      {props.children}
    </button>
  );
};

export default GlobalButton;
