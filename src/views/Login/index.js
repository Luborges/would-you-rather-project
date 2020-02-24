import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Input, Submit, Form, Title, Subtitle, Container } from './styles';
import { loginUser } from '../../actions/login';

class Login extends Component {
    handleSubmit (e) {
        e.preventDefault();
        const { dispatch } = this.props;
        const { username, password } = this;
        dispatch(loginUser(
            username.value,
            password.value,
        ));
    }

    render () {
        return (       
            <Container>
                <Title>Welcome to the Would You Rather App!</Title>
                <Subtitle>Please sing-in to play</Subtitle>
                <Form>
                    <Input type='text' ref={(input) => this.username = input} placeholder={'Username'} />
                    <Input type='password' ref={(input) => this.password = input} placeholder={'Password'} />
                    <Submit onClick={evt => this.handleSubmit(evt)}>Send</Submit>
                </Form>
            </Container>
        )
    }
}

export default connect()(Login);