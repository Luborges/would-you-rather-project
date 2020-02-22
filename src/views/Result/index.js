import React, { Component } from 'react';
import { connect } from 'react-redux';
//import { Redirect } from 'react-router-dom';

import { Container } from './styles';

/*
    Result
	Percentage
	Total votes
*/

class Result extends Component {
    render () {
        return (
            <Container>
                Result
            </Container>
        )
    }
}

const mapStateToProps = ({ email }, props) => {
    return {
        email,
    }
}

export default connect(mapStateToProps)(Result);