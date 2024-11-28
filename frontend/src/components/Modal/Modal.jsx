import React from "react";
import { useModal } from "../../hooks/useModal";
import './modal.scss';

const Modal = (props) => {
  const { modalData, toggleModal } = useModal();
  const { content } = props;
  
  return (
    <>
      <div className="modal__background" onClick={toggleModal}></div>
      <div className="modal__content">
        <button className="modal__close-button" onClick={toggleModal}>
          Close
        </button>
        <div className="modal__content__children">
          {content ? content : modalData}
        </div>
      </div>
    </>
  );
};

export default Modal;
