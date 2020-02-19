import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Input, Submit } from './styles';
//import { Redirect } from 'react-router-dom';

/*
    Complete the questions
	Input 1
	Input 2
	Submit
*/

class NewQuestion extends Component {
    render () {
        return (
            <div>
                <h3>Create New Question</h3>
                <Input placeholder={'Choice 1'} />
                <Input placeholder={'Choice 2'} />
                <Submit>Send</Submit>
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