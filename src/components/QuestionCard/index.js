import React, { Component } from 'react';
import { connect } from 'react-redux';
//import { Redirect } from 'react-router-dom';
import { Card } from './styles';

class QuestionCard extends Component {
    render () {
        const { question } = this.props;
        //console.log(question);
        return (
            <Card>
                Home
                {question.id}
            </Card>
        )
    }
}

/*function mapStateToProps ({ questions }, props) {
    return {
        question: questions && questions[props.id],
    }
}*/

export default connect()(QuestionCard);