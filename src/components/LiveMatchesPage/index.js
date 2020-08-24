import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from 'react-bootstrap';
import LiveMatchesCard from '../LiveMatchesCard';
import { ArticleHeader, ArticleContent } from "./LiveMatchesPage.styled";

export default function LiveMatchesPage(liveMatch) {
  return (
     		<div>
	        <Row>
	        	<ArticleHeader>
	        		<h1>Live matches</h1>
		            <p className="preamble">
		                Here is a list of matches that are live right now.
		            </p>
	        	</ArticleHeader>
	        </Row>
	        <Row>
	        	<Col sm={8} >
              		<LiveMatchesCard liveMatch={ liveMatch }/>
        		</Col>
	            <Col sm={4} >
	                <ArticleContent>
		              <h2>Live betting</h2>
		              <p>Place your bets as the action unfolds. We offer a wide selection of live betting events and you can place both single and combination bets.</p>
		              <p>You will be able to see an in-play scoreboard with the current result and match stats, while on selected events you will also be able to watch the action live with Unibet TV on the desktop site.</p>
	               </ArticleContent>
	          </Col>
	        </Row>	 
       </div>
  );
}


LiveMatchesPage.propTypes = {
	liveMatch: PropTypes.object
}