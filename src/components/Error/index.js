import React, { Component } from 'react';
import { connect } from 'react-redux';

class Error extends Component {
    render() {
        const { error } = this.props;
        return (
            <div>
                {error}
            </div> 
        )
    }
}

function mapStateToProps ({ error }) {
    console.log(error);
    return {
      error,
    }
  }

export default connect(mapStateToProps)(Error);