import classes from "./DefaultButton.module.css";

const DefaultButton = (props) => {
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

export default DefaultButton;
