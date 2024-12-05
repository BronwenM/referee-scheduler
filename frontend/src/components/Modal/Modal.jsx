import React, { useEffect } from "react";
import { useModal } from "../../hooks/useModal";
import "./modal.scss";
import "./assignmentModal.scss";
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
        <h4>
          {game.home_team} vs {game.away_team}
        </h4>
        <p>
          {game.location} - {game.field}
        </p>
        <p></p>
      </header>
        <div style={{cursor:"default", userSelect: "-moz-none"}}>
          <span title={assigner.email}><strong>Assigner</strong> <br /> {assigner.name}</span>
        </div>
        <br/>
        <div style={{cursor:"default", userSelect: "-moz-none"}}>
          <strong>Officials</strong> <br />
          {toTitleCase(assignment.position)}: {user.name} <br />
          {partners.map((partner) => (
            <span title={partner.email}>
              {toTitleCase(partner.position)}: {partner.name} <br />
            </span>
          ))}
        </div>
        <p>Pay Rate: ${pay.pay_rate}</p>
        
        <div className="modal-assignment__confirmation">
          <button type='button'><i class="fa-solid fa-question"></i> Mark Pending</button>
          <button type='button'><i class="fa-solid fa-check"></i> Accept Assignment</button>
          <button type='button'><i class="fa-solid fa-xmark"></i>  Reject Assignment</button>
        </div>
        <div className="modal-assignment__created-at">
          Assignment Created: {convertDateString(assignment.created_at).full}
        </div>
        <div className="modal-assignment__created-at">
          Assignment Updated: {convertDateString(assignment.updated_at).full}
        </div>
    </>
  );
};

const GameModalView = (props) => {
  const { game } = props.data;

  return (
    <>
      <header>
        <h1>{game.title}</h1>
        <h4>
          {game.home_team} vs {game.away_team}
        </h4>
      </header>
      <article>
        <p>Date and Time: {new Date(game.date_time).toLocaleString()}</p>
        <p>Location: {game.location}</p>
        <p>Field: {game.field}</p>
        <p>Officials Assigned: {game.officials_assigned ? "Yes" : "No"}</p>
        <p>Status: {game.status}</p>
        <p>Game Type: {game.game_type}</p>
        <div className="modal-assignment__created-at">
          Game Created: {convertDateString(game.created_at).full}
        </div>
        <div className="modal-assignment__created-at">
          Game Updated: {convertDateString(game.updated_at).full}
        </div>
      </article>
    </>
  );
};

const Modal = (props) => {
  const { toggleModal, modalData, showModal, view } = useModal();
  const { user } = useAuth();
  const { convertDateString, toTitleCase } = useUtils();

  return (
    <div className="modal">
      <div className="modal__background" onClick={toggleModal}></div>
      <div className="modal__content">
        <div className="modal__buttons">
          <h1>{toTitleCase(view)} Details</h1>
          <button className="modal__close-button" onClick={toggleModal}>
            ✖
          </button>
        </div>
        <div className="modal__content__children">
          {view === "assignment" && <AssignmentModalView data={modalData} />}
          {view === "assignment" && console.log("modal data", modalData)}
          {view === "game" && <GameModalView data={modalData} />}
        </div>
        {view === "game" && user.role === "admin" && (
          <Link
            className="modal__edit-button"
            onClick={toggleModal}
            to="new-game"
          >
            Edit Game <i class="fa-solid fa-pen-to-square"></i>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Modal;
