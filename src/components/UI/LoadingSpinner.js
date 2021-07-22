import classes from "./LoadingSpinner.module.css";

const LoadingSpinner = () => {
  return (
    <div className={classes["spinner-container"]}>
      <div
        className={`fas fa-circle-notch ${classes["loading-spinner"]}`}
      ></div>
    </div>
  );
};

export default LoadingSpinner;
