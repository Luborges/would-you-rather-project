import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import LoadingBar from 'react-redux-loading';
import Login from './views/Login/';
import Home from './views/Home/';
import Game from './views/Game/';
import Nav from './components/Nav/';
import Error from './components/Error/';
import NewQuestion from './views/NewQuestion';

class App extends Component {
  render() {
    const { authedUser } = this.props;
    
    return (
      <Router>
        <Fragment>
          <LoadingBar />
          <div className='container'>
            <Fragment>
              {authedUser && <Nav />}
              <div>
                <Route exact path="/" component={Login}>
                  {authedUser ? <Redirect to="/home" /> : <Login />}
                </Route>
                <Route path='/home' component={Home} />
                <Route path='/game/:id' component={Game} />
                <Route path='/new' component={NewQuestion} />
              </div>
              <Error />
            </Fragment>
          </div>
        </Fragment>
      </Router>
    )
  }
}

function mapStateToProps ({ authedUser, error }) {
  return {
    loading: authedUser !== null,
    authedUser: authedUser !== null && authedUser !== undefined,
  }
}

export default connect(mapStateToProps)(App);