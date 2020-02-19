import React, { Component } from 'react';
import { connect } from 'react-redux';
//import { Redirect } from 'react-router-dom';
import { Container } from './styles';

/*
    User:
		Answered Questions
		Created Questions
		Score
*/

class LeaderBoard extends Component {
    render () {
        return (
            <Container>
                Leader Board
            </Container>
        )
    }
}

const mapStateToProps = ({ email }, props) => {
    return {
        email,
    }
}

export default connect(mapStateToProps)(LeaderBoard);