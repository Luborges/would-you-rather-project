import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Input, Submit } from './styles';
import { loginUser } from '../../actions/login';

class Login extends Component {
    handleSubmit (e) {
        e.preventDefault();
        const { dispatch } = this.props;
        const { email, password } = this;
        dispatch(loginUser(
            email.value,
            password.value,
        ));
    }

    render () {
        return (            
            <div>
                <Input type='email' ref={(input) => this.email = input} />
                <Input type='password' ref={(input) => this.password = input} />
                <Submit onClick={evt => this.handleSubmit(evt)}>Entrar</Submit>
            </div>
        )
    }
}

export default connect()(Login);