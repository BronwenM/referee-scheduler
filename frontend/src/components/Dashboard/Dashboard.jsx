import React from 'react';
import './dashboard.scss'
import { useAuth } from '../../hooks/useAuth';

const Dashboard = (props) => {
  const {user} = useAuth();

  return (
    <section className='dashboard'>
      <div className='dashboard__content'>
        <h1>Dash</h1>
      </div>
    </section>
  )
}

export default Dashboard