import React from 'react';
import './dashboard.scss'

const Dashboard = (props) => {
  const {userRole} = props;
  
  return (
    <section className='dashboard'>
      <div className='dashboard__content'>
        Section
      </div>
    </section>
  )
}

export default Dashboard