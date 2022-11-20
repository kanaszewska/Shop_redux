import React from "react";
import "../styles/Modal.css";

import { FaCheckCircle, FaExclamationCircle } from "react-icons/fa";

export function ModalOrder(props) {
  if (!props.show) {
    return null;
  }
  return (
    <div className="modal" onClick={props.onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="model-header">
          <h4 className="modal-title">
            <p>
              <span>
                <FaCheckCircle />
              </span>
              Success
            </p>
          </h4>
        </div>
        <div className="modal-body">
          <p>Order accepted</p>
        </div>
        <div className="modal-footer">
          <button className="modal-button" onClick={props.onClose}>
            Close
          </button>
        </div>
      </div>
    </div>
  );
}

export function ModalBasket(props) {
  if (!props.show) {
    return null;
  }
  return (
    <div className="modal" onClick={props.onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="model-header">
          <h4 className="modalbasket-title">
            <p>
              <span>
                <FaExclamationCircle />
              </span>
              Ooops!
            </p>
          </h4>
        </div>
        <div className="modal-body">
          <p>The basket is empty!</p>
        </div>
        <div className="modal-footer">
          <button className="modal-button" onClick={props.onClose}>
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
