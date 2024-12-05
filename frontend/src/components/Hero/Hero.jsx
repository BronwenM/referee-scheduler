import React, {useEffect} from 'react'
import './hero.scss'
import useUtils from '../../hooks/useUtils';
import {useUserData} from '../../hooks/useUserData.jsx';


//use session to get user details
const Hero = (props) => {
  const {role, userFN} = props;
  const {convertDateString, toTitleCase} = useUtils();
  const {getAssignmentsByUser, userAssignments} = useUserData();
  const {userAcceptAssignment} = useUserData()

  useEffect(() => {
    getAssignmentsByUser()
  }, [])
  
  const nextGame = userAssignments.find(assignment => (new Date(assignment.game.date_time).getTime() >= new Date().getTime()));

  return (
    <div className='hero-banner'>
      <div className='hero-banner__content'>
        <div className='hero-banner__greeting'>Hi {userFN}!</div>
        <div className='hero-banner__today'>Today is {new Intl.DateTimeFormat('en-US', {weekday:"long", month:'long', day: "numeric", year: "numeric"}).format(new Date())}</div>
          { role === "official" && nextGame &&
            <div className='hero-banner__quick-info'>
              <h3>Upcoming Assignment</h3>
              <span className='hero-banner__next-teams'>{nextGame.game.home_team} vs {nextGame.game.away_team}</span><br/>
              <span className='hero-banner__next-date'>{convertDateString(nextGame.game.date_time).full}</span><br/>
              <span className='hero-banner__next-location'>Location: {nextGame.game.location}</span><br/>
              <span className='hero-banner__next-position'>Position: {toTitleCase(nextGame.assignment.position)}</span><br/>
              {console.log('next', nextGame)}
              {(nextGame.accepted === undefined) && 
                <>
                  <br/>
                  <span className='hero-banner__alert-msg'><em>You have not accepted this game! Please update your assignments</em></span>

                  <div className="hero-assignment__confirmation">
                    <button type="button" className="hero__pending-btn" onClick={() =>  userAcceptAssignment(nextGame.assignment.id, null)}>
                      <i class="fa-solid fa-question"></i> Mark Pending
                    </button>
                    <button type="button" className="hero__accept-btn" onClick={() =>  userAcceptAssignment(nextGame.assignment.id, true)}>
                      <i class="fa-solid fa-check"></i> Accept Assignment
                    </button>
                    <button type="button" className="hero__reject-btn" onClick={() =>  userAcceptAssignment(nextGame.assignment.id, false)}>
                      <i class="fa-solid fa-xmark"></i> Reject Assignment
                    </button>
                  </div>
                </>
              }
            </div>
          }

          { role === "official" && !nextGame &&
            <div className='hero-banner__quick-info'>
              <span>Your have no upcoming games!</span>
            </div>
          }


          { role === "assigner" &&
            <div className='hero-banner__quick-info'>
              <span>Unassigned Games</span><br/>
              <span>New Games</span>
            </div>
          }      
      </div>
    </div>
  )
}

export default Hero