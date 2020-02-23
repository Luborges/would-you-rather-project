import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Input, Submit, Form, Title, Subtitle, Container } from './styles';
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
            <Container>
                <Title>Welcome to the Would You Rather App!</Title>
                <Subtitle>Please sing-in to play</Subtitle>
                <Form>
                    <Input type='email' ref={(input) => this.email = input} />
                    <Input type='password' ref={(input) => this.password = input} />
                    <Submit onClick={evt => this.handleSubmit(evt)}>Send</Submit>
                </Form>
            </Container>
        )
    }
}

export default connect()(Login);