import React, {useEffect} from "react";
import { useModal } from "../../hooks/useModal";
import "./modal.scss";

const AssignmentModalView = (props) => {
  const {data} = props;

  return (
    <>
      <header>
        <h1>Assignment</h1>
      </header>
      <article>{Object.values(data).map(val => <div key={val}>{val.toString()}</div>)}</article>
    </>
  );
};

const GameModalView = (props) => {
  const {data} = props;

  return (
    <>
      <header>
        <h1>Game</h1>
      </header>
      <article>{Object.keys(data).map(key => <div>{key}</div>)}</article>
    </>
  );
};

const Modal = (props) => {
  const { toggleModal, modalData, showModal } = useModal();
  const { viewType } = props;

  
  
  return (
    <div className="modal">
      <div className="modal__background" onClick={toggleModal}></div>
      <div className="modal__content">
        <button className="modal__close-button" onClick={toggleModal}>
          Close
        </button>
        <div className="modal__content__children">
          {viewType === "assignment" && <AssignmentModalView data={modalData}/>}
          {viewType === "game" && <GameModalView data={modalData}/>}
        </div>
      </div>
    </div>
  );
};

export default Modal;
