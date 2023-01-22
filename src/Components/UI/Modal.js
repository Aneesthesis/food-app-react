import React, { Fragment } from "react";
import ReactDOM from "react-dom";

const Backdrop = (props) => {
  return (
    <div
      onClick={props.onClick}
      className="backrop fixed top-0 left-0 w-full h-screen z-20 bg-black opacity-90"
    ></div>
  );
};

const ModalOverlay = (props) => {
  return (
    <div>
      <div className="modalOverlay fixed z-30 bg-white left-[35%] top-[20vh] w-1/3 p-4 rounded-[14px]">
        {props.children}
      </div>
    </div>
  );
};

const Modal = (props) => {
  return (
    <Fragment>
      {ReactDOM.createPortal(
        <Backdrop onClick={props.onHideCart} />,
        document.getElementById("overlays")
      )}
      {ReactDOM.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        document.getElementById("overlays")
      )}
    </Fragment>
  );
};

export default Modal;
