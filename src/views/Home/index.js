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
        console.log(this.props.questionsId);
        return (
            <Container>
                Home
            </Container>
        )
    }
}

function mapStateToProps ({ questions }) {
    return {
        questionsId: Object.keys(questions).sort((a, b) => questions[b].timestamp - questions[a].timestamp),
    }
}

export default connect(mapStateToProps)(Home);