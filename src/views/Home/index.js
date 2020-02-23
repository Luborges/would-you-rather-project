import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import QuestionCard from '../../components/QuestionCard';
import { Container, SelectQuestions } from './styles';

/*
    Answered Questions
	Unanswered Questions
*/

class Home extends Component {
    constructor() {
        super();
        this.state = {
            answeredSelect: false,
        }
    }

    render () {
        const { questionsAnswered, questionsUnanswered } = this.props;
        const { answeredSelect } = this.state;
        return (
            <Container>
                <SelectQuestions style={{
                    backgroundColor: answeredSelect ? '#ddd' : '#fff',
                    color: answeredSelect ? 'blue' : 'black',
                }} onClick={() => this.setState({answeredSelect: true})}>Answered</SelectQuestions>
                <SelectQuestions style={{
                    backgroundColor: !answeredSelect ? '#ddd' : '#fff',
                    color: !answeredSelect ? 'blue' : 'black',
                }} onClick={() => this.setState({answeredSelect: false})}>Unanswered</SelectQuestions>
                {answeredSelect ?
                    questionsAnswered.map((item, i) => 
                        <QuestionCard key={'answered_card_'+i} question={item} />)
                    :
                    questionsUnanswered.map((item, i) => 
                        <QuestionCard key={'unanswered_card_'+i} question={item} />)}
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

export default withRouter(connect(mapStateToProps)(Home));