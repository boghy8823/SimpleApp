import React from 'react';
import PropTypes from 'prop-types';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { LiveMatchesCard, LiveMatchInfoWrapper, LiveMatchScoreInfo, LiveMatchTeamInfo, LiveMatchTime, LiveMatchButton } from "./LiveMatchesCard.styled";
import formatEventStartDate from '../../utils/formatStartDate';


const LiveMatches = (liveMatch) => {

  const sportName = ['tennis', 'football', 'basketball'].indexOf(liveMatch.liveMatch.event.sport.toLowerCase()) !== -1 ?  liveMatch.liveMatch.event.sport.toLowerCase() : 'defaultSportNameIcon';
  const startDate =   formatEventStartDate(liveMatch.liveMatch.event.start);

  return (
  	 <TransitionGroup className="card-container">
        <CSSTransition
            key={liveMatch.liveMatch.event.id}
            timeout={500}
            classNames="slide"
        >
        <LiveMatchInfoWrapper>
            <LiveMatchScoreInfo>
            	{liveMatch.liveMatch.liveData.score ? liveMatch.liveMatch.liveData.score.home : ''} 
            	{ ' - ' }
            	{liveMatch.liveMatch.liveData.score ? liveMatch.liveMatch.liveData.score.away : ''}
            </LiveMatchScoreInfo>
            <LiveMatchTeamInfo>
            	<span className={ sportName }></span>
            	<div>{liveMatch.liveMatch.event.homeName} - {liveMatch.liveMatch.event.awayName}</div>
            </LiveMatchTeamInfo>
            <LiveMatchTime>
            	{startDate}
            </LiveMatchTime>
            <LiveMatchButton>Place a bet</LiveMatchButton>
        </LiveMatchInfoWrapper>
        </CSSTransition>
    </TransitionGroup>
  );
}


LiveMatches.propTypes = {
	liveMatches: PropTypes.object
}

export default LiveMatches;