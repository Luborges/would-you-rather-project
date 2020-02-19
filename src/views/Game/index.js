import React, { Component } from 'react';
import { connect } from 'react-redux';
//import { Redirect } from 'react-router-dom';
import { Select, Option } from './styles';

/*
    Person asking
	Would you rather...
	() Choice 1
	() Choice 2
	Submit
*/

class Game extends Component {
    render () {
        return (
            <div>
                Game
                <Select>
                    <Option></Option>
                    <Option></Option>
                </Select>
            </div>
        )
    }
}

const mapStateToProps = ({ email }, props) => {
    return {
        email,
    }
}

export default connect(mapStateToProps)(Game);