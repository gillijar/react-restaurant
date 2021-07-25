import GlobalButton from "../UI/GlobalButton";
import useInput from "../../hooks/use-input";

import classes from "./CartForm.module.css";

const isNotEmpty = (value) => value.trim() !== "";
const isFiveChars = (value) => value.length === 5;

const CartForm = (props) => {
  // Entered name hook
  const {
    value: enteredName,
    isValid: enteredNameIsValid,
    hasError: enteredNameHasError,
    valueChangeHandler: enteredNameChangeHandler,
    valueBlurHandler: enteredNameBlurHandler,
    reset: resetName,
  } = useInput(isNotEmpty);

  // Entered address hook
  const {
    value: enteredAddress,
    isValid: enteredAddressIsValid,
    hasError: enteredAddressHasError,
    valueChangeHandler: enteredAddressChangeHandler,
    valueBlurHandler: enteredAddressBlurHandler,
    reset: resetAddress,
  } = useInput(isNotEmpty);

  // Entered city hook
  const {
    value: enteredCity,
    isValid: enteredCityIsValid,
    hasError: enteredCityHasError,
    valueChangeHandler: enteredCityChangeHandler,
    valueBlurHandler: enteredCityBlurHandler,
    reset: resetCity,
  } = useInput(isNotEmpty);

  // Entered postal hook
  const {
    value: enteredPostal,
    isValid: enteredPostalIsValid,
    hasError: enteredPostalHasError,
    valueChangeHandler: enteredPostalChangeHandler,
    valueBlurHandler: enteredPostalBlurHandler,
    reset: resetPostal,
  } = useInput(isFiveChars);

  const validClasses = (valueHasError) => {
    return !valueHasError ? "" : "invalid";
  };

  return (
    <div className={classes.form}>
      <form>
        <div className={classes["form__section"]}>
          <label htmlFor="name">Name</label>
          <input
            className={validClasses(enteredNameHasError)}
            type="text"
            id="name"
            value={enteredName}
            onChange={enteredNameChangeHandler}
            onBlur={enteredNameBlurHandler}
          />
          {enteredNameHasError && (
            <p className={classes.errorMsg}>Please enter a valid name.</p>
          )}
        </div>
        <div className={classes["form__section"]}>
          <label htmlFor="address">Address</label>
          <input
            className={validClasses(enteredAddressHasError)}
            type="text"
            id="address"
            value={enteredAddress}
            onChange={enteredAddressChangeHandler}
            onBlur={enteredAddressBlurHandler}
          />
          {enteredAddressHasError && (
            <p className={classes.errorMsg}>Please enter a valid address.</p>
          )}
        </div>
        <div className={classes["form__section"]}>
          <label htmlFor="city">City</label>
          <input
            className={validClasses(enteredCityHasError)}
            type="text"
            id="city"
            value={enteredCity}
            onChange={enteredCityChangeHandler}
            onBlur={enteredCityBlurHandler}
          />
          {enteredCityHasError && (
            <p className={classes.errorMsg}>Please enter a valid city.</p>
          )}
        </div>
        <div className={classes["form__section"]}>
          <label htmlFor="postal">Zip Code</label>
          <input
            className={validClasses(enteredPostalHasError)}
            type="number"
            maxLength="5"
            id="postal"
            value={enteredPostal}
            onChange={enteredPostalChangeHandler}
            onBlur={enteredPostalBlurHandler}
          />
          {enteredPostalHasError && (
            <p className={classes.errorMsg}>
              Please enter a valid postal code.
            </p>
          )}
        </div>
        <div className={props.btnClass}>
          <GlobalButton
            userClass={classes["form__cancel"]}
            onClick={props.cancelCheckout}
          >
            Cancel
          </GlobalButton>
          <GlobalButton userClass={classes["form__order"]}>Order</GlobalButton>
        </div>
      </form>
    </div>
  );
};

export default CartForm;
