import React, { Component } from 'react';
import { connect } from 'react-redux';
//import { Redirect } from 'react-router-dom';
import { 
    Container, 
    Card, 
    Title, 
    RightContainer, 
    CenterContainer,
    ScoreBox,
    ScoreTitle,
    Score,
    Total,
    Box
} from './styles';
import ImageCard from '../../components/ImageCard';

class LeaderBoard extends Component {
    render () {
        const { users } = this.props;
        const array = users ? Object.entries(users) : [];
        const userArray = array.map((item) => {return {...item[1], score: (Object.keys(item[1].answers).length + item[1].questions.length) }} );
        const userArrayOrdered = userArray.sort((a, b) => {return b.score - a.score});
        return (
            <Container>
                {userArrayOrdered.map((item) => (
                    <Card key={item.id}>
                        <ImageCard user={item} />
                        <CenterContainer>
                        <Title>{item.name}</Title>
                            <Total>Answered question {Object.keys(item.answers).length}</Total>
                            <Total>Created question {item.questions.length}</Total>
                        </CenterContainer>
                        <RightContainer>
                            <ScoreBox>
                                <ScoreTitle>Score</ScoreTitle>
                                <Box><Score>{item.score}</Score></Box>
                            </ScoreBox>
                        </RightContainer>
                    </Card>
                ))}
            </Container>
        )
    }
}

const mapStateToProps = ({ users }) => {
    return {
        users
    }
}

export default connect(mapStateToProps)(LeaderBoard);