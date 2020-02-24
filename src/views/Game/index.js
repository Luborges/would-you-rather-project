import React, { Component } from 'react';
import { connect } from 'react-redux';
import { 
    Radio, 
    Description,
    Button, 
    Container, 
    Title, 
    Card,
    RightContainer,
    RadioDiv,
} from './styles';
import { handleVote } from '../../actions/questions';
import { Redirect } from 'react-router-dom';
import ImageCard from '../../components/ImageCard';
import Error404 from '../../components/Error/Error404';

class Game extends Component {
    constructor () {
        super();
        this.state = {
            toResult: false,
        }
    }

    handleVote () {
        const { dispatch, question } = this.props;
        const { optionOne, optionTwo } = this;
        if (optionOne.checked || optionTwo.checked) {
            dispatch(handleVote(
                optionOne.checked ? optionOne.value : optionTwo.value,
                question
            ));
        }

        this.setState({
            toResult: true,
        })
    }

    render () {
        const { question, selectedOption, user } = this.props;
        const { toResult } = this.state;

        if (toResult) {
            return <Redirect to={`/result/${question.id}`} />
        }

        return (
            <Container>
                {question &&
                    question ?    
                        <Card>
                            <ImageCard user={user} />
                            <RightContainer>
                                <Title>{user.name} asks:</Title>
                                <Description>Would you rather...</Description>
                                <RadioDiv><Radio type='radio' name='game' value={question.optionOne.text}
                                    defaultChecked={selectedOption===question.optionOne.text}
                                    ref={(input) => this.optionOne = input} />
                                    {question.optionOne.text}</RadioDiv>
                                <RadioDiv><Radio type='radio' name='game' value={question.optionTwo.text}
                                    defaultChecked={selectedOption===question.optionTwo.text}
                                    ref={(input) => this.optionTwo = input} />
                                    {question.optionTwo.text}</RadioDiv>
                                <Button onClick={evt => this.handleVote(evt)}>Send</Button>
                            </RightContainer>
                        </Card>
                    :
                    <Error404 message={'Question'} />
                }
            </Container>
        )
    }
}

const mapStateToProps = ({ questions, authedUser, users }, props) => {
    const { id } = props.match.params;
    const question = questions && questions[id];
    const selectedOption = question && (
        question.optionOne.votes.includes(authedUser) ? 
            question.optionOne.text : 
            question.optionTwo.votes.includes(authedUser) ? 
                question.optionTwo.text : 
                null);

    return {
        question,
        selectedOption,
        authedUser,
        user: question && users[question.author]
    }
}

export default connect(mapStateToProps)(Game);