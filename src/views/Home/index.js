import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

class Home extends Component {
    render () {
        return (
            <div>
                Home
            </div>
        )
    }
}

const mapStateToProps = ({ email }, props) => {
    return {
        email,
    }
}

export default connect(mapStateToProps)(Home);