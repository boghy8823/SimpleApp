import   React, { Component, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Container, Row, Col } from 'react-bootstrap';
import   LiveMatchesPage from './Components/LiveMatchesPage/';
import * as actions from './actions/liveMatchesActions';
import { Wrapper, Header, Logo, Nav, PageWrapper, Footer } from  "./globalStyles/global.styled";


const App = ({ liveMatches }) => {
  
  useEffect( () => actions.loadLiveMatches(), [] );
  
  return (
      <Wrapper>
        <Container>
          <Row>
            <Header>Logo</Header>
          </Row>
        </Container>
        <Container>
        <Row>
            <Nav>
              <ul>
                <li><a href="#">Test instructions</a></li>
              </ul>
            </Nav>
        </Row>  
        </Container>
        <Container>
          <Row>
            <PageWrapper>
              <LiveMatchesPage {...liveMatches.liveEvents[0]}/>
            </PageWrapper>
          </Row>
        </Container>
        <Footer>
             Footer
         </Footer>
      </Wrapper>
    );
};

App.propTypes = {
    liveMatches: PropTypes.object
};

function mapStateToProps(state, ownProps) {
  return {
    liveMatches: state.liveMatches.liveMatches
  }
}

function mapDispatchToProps(dispatch) {
  return {actions: bindActionCreators(actions, dispatch)}
}

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(App);