import React, { Component } from 'react';

const Modal = ({ closeModal, show }) => {
  const showHideClassName = show ? "modal display-block" : "modal display-none";

  return (
    <div className={showHideClassName}>
      <section className="modal-main">
        <div className="modal-header">
          <a onClick={closeModal} className="modal-close waves-effect waves-green btn-flat right">
            <i className="material-icons">close</i>
          </a>
        </div>
        <div className="modal-content">
          <h4> Our services are no longer available at this time</h4>
          <h6> We apologize for the inconvenience </h6>
        </div>
      </section>
    </div>
  );
};


export default Modal;

