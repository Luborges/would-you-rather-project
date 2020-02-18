import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import LoadingBar from 'react-redux-loading';
import Login from './views/Login/';
import Home from './views/Home/';
import Nav from './components/Nav/';
import Error from './components/Error/';

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