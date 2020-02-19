import React, { Component } from 'react';
import { connect } from 'react-redux';
//import { Redirect } from 'react-router-dom';
import { Container } from './styles';

/*
    Answered Questions
	Unanswered Questions
*/

class Home extends Component {
    render () {
        return (
            <Container>
                Home
            </Container>
        )
    }
}

const mapStateToProps = ({ email }, props) => {
    return {
        email,
    }
}

export default connect(mapStateToProps)(Home);