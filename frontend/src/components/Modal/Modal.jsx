import React, { useEffect } from "react";
import { useModal } from "../../hooks/useModal";
import "./modal.scss";
import { useAuth } from "../../hooks/useAuth";
import useUtils from "../../hooks/useUtils";
import { Link } from "react-router-dom";

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
  const { game } = props.data;

  return (
    <>
      <header>
        <h1>{game.title}</h1>
        <h4>{game.home_team} vs {game.away_team}</h4>
      </header>
      <article>
        <p>Date and Time: {new Date(game.date_time).toLocaleString()}</p>
        <p>Location: {game.location}</p>
        <p>Field: {game.field}</p>
        <p>Officials Assigned: {game.officials_assigned ? 'Yes' : 'No'}</p>
        <p>Status: {game.status}</p>
        <p>Game Type: {game.game_type}</p>
      </article>
    </>
  );
};

const Modal = (props) => {
  const { toggleModal, modalData, showModal, view } = useModal();
  const { user } = useAuth();
  

  return (
    <div className="modal">
      <div className="modal__background" onClick={toggleModal}></div>
      <div className="modal__content">
        <div className="modal__buttons">
          <button className="modal__close-button" onClick={toggleModal}>
            ✖
          </button>
        </div>
        <div className="modal__content__children">
          {view === "assignment" && (
            <AssignmentModalView data={modalData} />
          )}
          {view === "game" && <GameModalView data={modalData} />}
        </div>
        {view === 'game' && user.role === 'admin' && 
            <Link className="modal__edit-button" onClick={toggleModal} to="new-game">
              ✎ Edit Game
            </Link>
          }
      </div>
    </div>
  );
};

export default Modal;
