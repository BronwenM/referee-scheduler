import React from 'react';
import './dashboard.scss'
import AssignmentListItem from '../AssignmentListItem/AssignmentListItem';
import Modal from '../Modal/Modal';
import { useModal } from '../../hooks/useModal';
// import AssignmentModalView from '../ModalView/AssignmentModalView';

const Dashboard = (props) => {
  const {userRole} = props;
  const {showModal} = useModal();

  return (
    <section className='dashboard'>
      <div className='dashboard__content'>
        {showModal && <Modal viewType="assignment" />}
        <AssignmentListItem gameDate={{day: 26, month: "June", year: 2024}} gameTime="6:30 PM" level="U17A" gameName="Islanders 09 vs Fury 08" field="Diamond 2" position="Plate"/>
        <AssignmentListItem gameDate={{day: 30, month: "July", year: 2025}} gameTime="8:30 PM" level="Women's B" gameName="Islanders vs Ravens" field="Diamond 1" position="Base"/>
        <AssignmentListItem gameDate={{day: 15, month: "May", year: 2025}} gameTime="6:30 PM" level="U19B" gameName="Islanders vs Ravens" field="Diamond 1" position="Base"/>
      </div>
    </section>
  )
}

export default Dashboard