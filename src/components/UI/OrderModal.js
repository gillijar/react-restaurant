import ReactDOM from "react-dom";
import React, { Fragment } from "react";
import { useSelector } from "react-redux";

import classes from "./OrderModal.module.css";

const Backdrop = (props) => {
  return <div className={classes.backdrop} onClick={props.onClick}></div>;
};

const ModalOverlay = () => {
  const customerName = useSelector((state) => state.cart.customerName);
  const customerFirstName =
    customerName.split(" ")[0][0].toUpperCase() +
    customerName.split(" ")[0].slice(1).toLowerCase();

  const hour = new Date().getHours();
  const minute = new Date().getMinutes();
  console.log(hour, minute);

  return (
    <div className={classes.modal}>
      <p>{/* Order Number: #<strong>{orderNumber}</strong> */}</p>
      <p>
        Thank you for your order, <strong>{customerFirstName}</strong>!
      </p>
      <p>Your food should be ready at approximately {}</p>
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
