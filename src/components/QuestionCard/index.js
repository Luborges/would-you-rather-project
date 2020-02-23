import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { 
    Author,
    Button,
    Card, 
    Container, 
    Option, 
    RightContainer,
    Title,
} from './styles';
import ImageCard from '../ImageCard';

class QuestionCard extends Component {
    render () {
        const { user, question } = this.props;
        return (
            <Container>
                <Author>{user && user.name} asks:</Author>
                <Card>
                    <ImageCard user={user} />
                    <RightContainer>
                        <Title>Would you rather</Title>
                        <Option>...{question.optionOne.text}...</Option>
                        <Button>
                            <Link to={`/game/${question.id}`}>
                                View Pull
                            </Link>
                        </Button>
                    </RightContainer>
                </Card>
            </Container>
        )
    }
}

function mapStateToProps ({ users }, props) {
    return {
        question: props.question,
        user: users && users[props.question.author],
    }
}

export default connect(mapStateToProps)(QuestionCard);