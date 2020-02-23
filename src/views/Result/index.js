import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Progress } from 'semantic-ui-react';
import { 
    Container,
    RightContainer,
    Card,
    Title,
    BoxOption,
    Question,
    Vote
} from './styles';
import ImageCard from '../../components/ImageCard';
import 'semantic-ui-css/semantic.min.css';

class Result extends Component {
    render () {
        const { question, authedUser, user } = this.props;
        const { optionOne, optionTwo } = question || {optionOne: {votes: []}, optionTwo: {votes: []}};
        let total = 0;
        let percentageOne = 0;
        let percentageTwo = 0;
        if (question) {
            total = optionOne.votes.length + optionTwo.votes.length;
            percentageOne = (optionOne.votes.length*100/total).toFixed(2);
            percentageTwo = (optionTwo.votes.length*100/total).toFixed(2);
        }
        
        return (
            <Container>
                <Card>
                <ImageCard user={user} />
                    <RightContainer>
                        <Title>Results:</Title>
                        <BoxOption>
                            {optionOne.votes.includes(authedUser) && <Vote>Your<br />vote</Vote>}
                            <Question>Would you rather {optionOne.text}?</Question>
                            <Progress percent={percentageOne} progress />
                            {optionOne.votes.length} out of {total} votes

                        </BoxOption>
                        <BoxOption>
                            {optionTwo.votes.includes(authedUser) && <Vote>Your<br />vote</Vote>}
                            <Question>Would you rather {optionTwo.text}?</Question>
                            <Progress percent={percentageTwo} progress />
                            {optionTwo.votes.length} out of {total} votes
                        </BoxOption>
                    </RightContainer>
                </Card>
            </Container>
        )
    }
}

const mapStateToProps = ({ questions, authedUser, users }, props) => {
    const { id } = props.match.params;
    return {
        question: questions && questions[id],
        user: users && users[questions[id].author],
        authedUser
    }
}

export default connect(mapStateToProps)(Result);