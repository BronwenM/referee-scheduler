import React, { useEffect } from "react";
import { useModal } from "../../hooks/useModal";
import "./modal.scss";
import { useAuth } from "../../hooks/useAuth";
import useUtils from "../../hooks/useUtils";

const AssignmentModalView = (props) => {
  const { assigner, assignment, game, partners, pay } = props.data;
  const { user } = useAuth();
  const { convertDateString, toTitleCase } = useUtils();

  //TODO: Move Officials list to table. Fix information hierarchy
  return (
    <>
      <header>
        <h1>Assignment</h1>
      </header>
      <article>
        <ul>
          <li>Assigner: {assigner.name}</li>
          <li>
            Game: {game.home_team} vs {game.away_team}
          </li>
          <li>Officials</li>
          <ul>
            <li>
              {toTitleCase(assignment.position)}: {user.name}
            </li>
            {partners.map((partner) => (
              <li key={partner.id}>
                {toTitleCase(partner.position)}: {partner.name}
              </li>
            ))}
          </ul>
          <li>Pay Rate: ${pay.pay_rate}</li>
          <li> Assignment Created: {convertDateString(assignment.created_at).full} </li>
          <li> Game Created: {convertDateString(game.created_at).full} </li>
        </ul>
      </article>
    </>
  );
};

const GameModalView = (props) => {
  const { data } = props;

  return (
    <>
      <header>
        <h1>Game</h1>
      </header>
      <article>
        {Object.keys(data).map((key) => (
          <div>{key}</div>
        ))}
      </article>
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
          {viewType === "assignment" && (
            <AssignmentModalView data={modalData} />
          )}
          {viewType === "game" && <GameModalView data={modalData} />}
        </div>
      </div>
    </div>
  );
};

export default Modal;
