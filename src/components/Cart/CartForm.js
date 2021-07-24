import GlobalButton from "../UI/GlobalButton";

import classes from "./CartForm.module.css";

const CartForm = (props) => {
  return (
    <div className={classes.form}>
      <form>
        <div className={classes["form__section"]}>
          <label>Name</label>
          <input type="text" />
        </div>
        <div className={classes["form__section"]}>
          <label>Address</label>
          <input type="text" />
        </div>
        <div className={classes["form__section"]}>
          <label>City</label>
          <input type="text" />
        </div>
        <div className={classes["form__section"]}>
          <label>Zip Code</label>
          <input type="number" maxLength="5" />
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
