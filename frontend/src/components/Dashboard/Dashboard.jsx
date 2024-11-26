import React from 'react';
import './dashboard.scss'
import Button from '../Button/Button';

const Dashboard = (props) => {
  const {userRole} = props;
  
  return (
    <section className='dashboard'>
      <div className='dashboard__content'>
        <h3>Section</h3>
        <div className='dashboard__actions'>
          <Button name="Button" className="dashboard__button"/>
          <Button name="Button" className="dashboard__button"/>
          <Button name="Button" className="dashboard__button"/>
          <Button name="Button" className="dashboard__button"/>
        </div>
      </div>
    </section>
  )
}

export default Dashboard