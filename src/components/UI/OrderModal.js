import ReactDOM from "react-dom";
import React, { Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import { cartActions } from "../../store/cart-items";
import { useHistory } from "react-router-dom";

import classes from "./OrderModal.module.css";

const Backdrop = (props) => {
  return <div className={classes.backdrop} onClick={props.onClick}></div>;
};

const ModalOverlay = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const orderNumber = Math.floor(Math.random() * 100 * Math.random() * 1000);

  const customerName = useSelector((state) => state.cart.customerName);
  const customerFirstName =
    customerName.split(" ")[0][0].toUpperCase() +
    customerName.split(" ")[0].slice(1).toLowerCase();

  const hour = new Date().getHours();
  const minute = new Date().getMinutes() + 20;
  const convertedHour = minute > 60 ? (hour + 1) % 12 : hour % 12;
  const convertedMinute = String(minute % 60).padStart(2, 0);

  const closeModal = () => {
    dispatch(cartActions.returnOrderState());

    history.push("/home");
  };

  return (
    <div className={classes["modal-container"]}>
      <div className={classes.modal}>
        <div>
          <p>
            <i
              className={`${classes["modal-icon"]} fas fa-times`}
              onClick={closeModal}
            ></i>
          </p>
        </div>
        <p>
          Order Number: <strong>#{orderNumber}</strong>
        </p>
        <p>
          Thank you for your order, <strong>{customerFirstName}</strong>!
        </p>
        <p>
          Your food should be ready at approximately{" "}
          <strong>
            {convertedHour}:{convertedMinute} {hour < 12 ? "AM" : "PM"}
          </strong>
        </p>
      </div>
    </div>
  );
};

const OrderModal = (props) => {
  return (
    <Fragment>
      {ReactDOM.createPortal(
        <Backdrop onClick={props.onClose} />,
        document.getElementById("backdrop-root")
      )}
      {ReactDOM.createPortal(
        <ModalOverlay />,
        document.getElementById("modal-overlay-root")
      )}
    </Fragment>
  );
};

export default OrderModal;
