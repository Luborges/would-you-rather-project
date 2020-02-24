import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import LoadingBar from 'react-redux-loading';
import Login from './views/Login/';
import Home from './views/Home/';
import Game from './views/Game/';
import LeaderBoard from './views/LeaderBoard';
import Nav from './components/Nav/';
import Error from './components/Error/';
import NewQuestion from './views/NewQuestion';
import Result from './views/Result';  
import { Wrapper } from './styles';

class App extends Component {
  render() {
    const { authedUser } = this.props;

    if (!authedUser && window.location.pathname!=='/') {
      return (
        <Wrapper>
          <Login />
        </Wrapper>
        )
    }

    return (
      <Router>
        <Fragment>
          <LoadingBar />
          <div>
            <Fragment>
              {authedUser && <Nav />}
              <Wrapper>
                <Route exact path="/" component={Login} />
                {authedUser && window.location.pathname==='/' && <Redirect to="/home" />}
                <Route path='/home' component={Home} />
                <Route path='/questions/:id' component={Game} />
                <Route path='/add' component={NewQuestion} />
                <Route path='/result/:id' component={Result} />
                <Route path='/leaderboard' component={LeaderBoard} />
              </Wrapper>
              <Error />
            </Fragment>
          </div>
        </Fragment>
      </Router>
    )
  }
}

function mapStateToProps ({ authedUser }) {
   return {
    loading: authedUser !== null,
    authedUser: authedUser !== null && authedUser !== undefined,
  }
}

export default connect(mapStateToProps)(App);