import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Input, Submit, Title, Container, Description, Question, Or } from './styles';
import { Redirect } from 'react-router-dom';
import { handleAddQuestion } from '../../actions/questions';

class NewQuestion extends Component {
    constructor () {
        super();
        this.state = {
            toHome: false,
        }
    }

    addQuestion () {
        const { dispatch } = this.props;
        const { optionOne, optionTwo } = this;

        if (optionOne && optionTwo) {
            dispatch(handleAddQuestion({
                optionOneText: optionOne.value,
                optionTwoText: optionTwo.value,
            }));
        }

        this.setState({
            toHome: true,
        });
    }

    render () {
        const { toHome } = this.state;

        if (toHome) {
            return <Redirect to={`/home`} />
        }

        return (
            <Container>
                <Title>Create New Question</Title>
                <Description>Complete the question:</Description>
                <Question>Would you rather...</Question>
                <Input placeholder={'Choice 1'} ref={(input) => this.optionOne = input} />
                <Or>Or</Or>
                <Input placeholder={'Choice 2'} ref={(input) => this.optionTwo = input} />
                <Submit onClick={evt => this.addQuestion(evt)}>Send</Submit>
            </Container>
        )
    }
}

export default connect()(NewQuestion);