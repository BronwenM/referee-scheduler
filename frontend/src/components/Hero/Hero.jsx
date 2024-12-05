import React, {useEffect} from 'react'
import './hero.scss'
import useUtils from '../../hooks/useUtils';
import {useUserData} from '../../hooks/useUserData.jsx';


//use session to get user details
const Hero = (props) => {
  const {role, userFN} = props;
  const {convertDateString, toTitleCase} = useUtils();
  const {getAssignmentsByUser, userAssignments} = useUserData();

  useEffect(() => {
    getAssignmentsByUser()
  }, [])
  
  const nextGame = userAssignments.find(assignment => assignment.assignment.accepted === true);
  
  return (
    <div className='hero-banner'>
      <div className='hero-banner__content'>
        <div className='hero-banner__greeting'>Hi {userFN}!</div>
        <div className='hero-banner__today'>Today is {new Intl.DateTimeFormat('en-US', {weekday:"long", month:'long', day: "numeric", year: "numeric"}).format(new Date())}</div>
          { role === "official" && nextGame &&
            <div className='hero-banner__quick-info'>
              <span>Your Next Game</span><br/><br/>
              <span className='hero-banner__next-date'>{nextGame.game.home_team} vs {nextGame.game.away_team}</span><br/>
              <span className='hero-banner__next-date'>{convertDateString(nextGame.game.date_time).full}</span><br/>
              <span className='hero-banner__next-date'>Location: {nextGame.game.location}</span><br/>
              <span className='hero-banner__next-date'>Position: {toTitleCase(nextGame.assignment.position)}</span><br/>
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