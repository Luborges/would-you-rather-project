import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Input, Submit } from './styles';
//import { Redirect } from 'react-router-dom';
import { handleAddQuestion } from '../../actions/questions';

/*
    Complete the questions
	Input 1
	Input 2
	Submit
*/

class NewQuestion extends Component {
    addQuestion () {
        const { dispatch } = this.props;
        const { optionOne, optionTwo } = this;

        if (optionOne && optionTwo) {
            dispatch(handleAddQuestion({
                optionOneText: optionOne.value,
                optionTwoText: optionTwo.value,
            }));
        }

    }

    render () {
        return (
            <div>
                <h3>Create New Question</h3>
                <Input placeholder={'Choice 1'} ref={(input) => this.optionOne = input} />
                <Input placeholder={'Choice 2'} ref={(input) => this.optionTwo = input} />
                <Submit onClick={evt => this.addQuestion(evt)}>Send</Submit>
            </div>
        )
    }
}

const mapStateToProps = ({ email }, props) => {
    return {
        email,
    }
}

export default connect(mapStateToProps)(NewQuestion);