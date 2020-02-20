import React, { Component } from 'react';
import { connect } from 'react-redux';
//import { Redirect } from 'react-router-dom';
import QuestionCard from '../../components/QuestionCard';
import { Container } from './styles';

/*
    Answered Questions
	Unanswered Questions
*/

class Home extends Component {
    render () {
        const { questionsAnswered, questionsUnanswered } = this.props;
        return (
            <Container>
                Answered
                {questionsAnswered.map((item, i) => 
                    <QuestionCard key={'question_card_'+i} question={item} />)}

                Unanswered
                {questionsUnanswered.map((item, i) => 
                <QuestionCard key={'question_card_'+i} question={item} />)}
            </Container>
        )
    }
}

function mapStateToProps ({ questions, authedUser }) {
    const answered = questions ? Object.entries(questions).map((item) => { return item[1] }).filter((item) => { return (item.optionOne.votes.includes(authedUser) || item.optionTwo.votes.includes(authedUser))}) : [];
    const unanswered = questions ? Object.entries(questions).map((item) => { return item[1] }).filter((item) => { return !(item.optionOne.votes.includes(authedUser) || item.optionTwo.votes.includes(authedUser))}) : [];

    return {
        questionsAnswered: answered ? answered.sort((a, b) => b.timestamp - a.timestamp) : [],
        questionsUnanswered: unanswered ? unanswered.sort((a, b) => b.timestamp - a.timestamp) : [],
        authedUser
    }
}

export default connect(mapStateToProps)(Home);