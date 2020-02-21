import React, { Component } from 'react';
import { connect } from 'react-redux';
//import { Redirect } from 'react-router-dom';
import { Radio, Submit } from './styles';
import { vote } from '../../actions/questions';

/*
    Person asking
	Would you rather...
	() Choice 1
	() Choice 2
	Submit
*/

class Game extends Component {
    handleSubmit (e) {
        e.preventDefault();
        const { dispatch, question, authedUser } = this.props;
        const { optionOne, optionTwo } = this;
        if (optionOne.checked || optionTwo.checked) {
            dispatch(vote(
                optionOne.checked ? optionOne.value : optionTwo.value,
                question,
                authedUser
            ));
        }
    }

    render () {
        const { question, selectedOption } = this.props;
        const { handleSubmit } = this;
        return (
            <div>
                Would you rather...
                {question &&
                    <div>
                        <Radio type='radio' name='game' value={question.optionOne.text}
                            defaultChecked={selectedOption===question.optionOne.text}
                            ref={(input) => this.optionOne = input} />
                            {question.optionOne.text}
                        <Radio type='radio' name='game' value={question.optionTwo.text}
                            defaultChecked={selectedOption===question.optionTwo.text}
                            ref={(input) => this.optionTwo = input} />
                            {question.optionTwo.text}
                    </div>
                }
                <Submit type='submit' onSubmit={handleSubmit} value='Send' /> 
            </div>
        )
    }
}

const mapStateToProps = ({ questions, authedUser }, props) => {
    const { id } = props.match.params;
    const question = questions && questions[id];
    const selectedOption = question && (
        question.optionOne.votes.includes(authedUser) ? 
            question.optionOne.text : 
            question.optionTwo.votes.includes(authedUser) ? 
                question.optionTwo.text : 
                null);

    return {
        question,
        selectedOption,
        authedUser
    }
}

export default connect(mapStateToProps)(Game);