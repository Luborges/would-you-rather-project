import React, { Component } from 'react';
import { connect } from 'react-redux';
import { 
    LeftContainer, 
    UserImage,
} from './styles';

class ImageCard extends Component {
    render () {
        const { user } = this.props;
        return (
            <LeftContainer>
                <UserImage src={user ? user.avatarURL : require('../../assets/images/empty.svg')} />
            </LeftContainer>
        )
    }
}

export default connect()(ImageCard);