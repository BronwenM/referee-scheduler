import React from 'react';
import './dashboard.scss'
import AssignmentListItem from '../AssignmentListItem/AssignmentListItem';

const Dashboard = (props) => {
  const {userRole} = props;
  
  return (
    <section className='dashboard'>
      <div className='dashboard__content'>
        <AssignmentListItem gameDate={{day: 26, month: "June", year: 2024}} gameTime="6:30 PM" level="U17A" gameName="Islanders 09 vs Fury 08" field="Diamond 2" position="Plate"/>
      </div>
    </section>
  )
}

export default Dashboard