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
      </div>
    </section>
  )
}

export default Dashboard