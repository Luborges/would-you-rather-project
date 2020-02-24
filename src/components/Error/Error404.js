import React, { Component } from 'react';
import { connect } from 'react-redux';
import { 
    Title,
    Message, 
} from './styles-404';

class Error extends Component {
    render() {
        const { error } = this.props;
        return (
            <div>
                <Title>Error 404</Title>
                <Message>{error} not found.</Message>
            </div> 
        )
    }
}

function mapStateToProps ({error}, props) {
    return {
        error: props.message,
    }
  }

export default connect(mapStateToProps)(Error);