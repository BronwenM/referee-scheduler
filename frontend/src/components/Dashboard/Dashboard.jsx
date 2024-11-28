import React from 'react';
import './dashboard.scss'
import AssignmentListItem from '../AssignmentListItem/AssignmentListItem';

const Dashboard = (props) => {
  const {userRole} = props;
  
  return (
    <section className='dashboard'>
      <div className='dashboard__content'>
        <AssignmentListItem />
      </div>
    </section>
  )
}

export default Dashboard