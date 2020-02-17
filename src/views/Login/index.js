import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Input, Submit } from './styles';
import { Redirect } from 'react-router-dom';

class Login extends Component {
    render () {
        return (
            <div>
                <Input type='email' />
                <Input type='password' />
                <Submit>Entrar</Submit>
            </div>
        )
    }
}

const mapStateToProps = ({ email }, props) => {
    return {
        email,
    }
}

export default connect()(Login);