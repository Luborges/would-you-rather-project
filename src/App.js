import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { handleInitialData } from './actions/login';
import LoadingBar from 'react-redux-loading';
import Login from './views/Login/';
import Home from './views/Home/';
import Nav from './components/Nav/';

class App extends Component {
  componentDidMount () {
    //this.props.dispatch(handleInitialData());
  }

  render() {
    const { authedUser, loading } = this.props;
    
    return (
      <Router>
        <Fragment>
          <LoadingBar />
          <div className='container'>      
            {loading && 
            <Fragment>
              {authedUser && <Nav />}
              <div>
                <Route exact path="/" component={Login}>
                  {authedUser ? <Redirect to="/home" /> : <Login />}
                </Route>
                <Route path='/home' component={Home} />
              </div>
            </Fragment>}
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