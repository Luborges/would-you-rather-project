import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { Ul, Li, ListItem, Navbar, LogoutButton, UserIcon, UserContainer } from './styles';
import { unsetAuthedUser } from '../../actions/authedUser';
//import { Redirect } from 'react-router-dom';

const Nav = (props) => {
    const { user, dispatch } = props;

    const logout = () => {
        dispatch(unsetAuthedUser);
        window.location.href = '/';
    }

    return (
        <Navbar>
            <Ul>
                <Li>
                    <NavLink to='/home' exact activeStyle={{
                            fontWeight: "bold",
                            color: "black"
                        }}>
                        Home
                    </NavLink>
                </Li>
                <Li>
                    <NavLink to='/add' exact activeStyle={{
                            fontWeight: "bold",
                            color: "black"
                        }}>
                        New Question
                    </NavLink>
                </Li>
                <Li>
                    <NavLink to='/leaderboard' exact activeStyle={{
                            fontWeight: "bold",
                            color: "black"
                        }}>
                        Leader Board
                    </NavLink>
                </Li>
                <ListItem>
                    Hello, {user && user.name} 
                    <UserContainer>
                        {user && <UserIcon src={user ? user.avatarURL : require('../../assets/images/empty.svg')} /> }
                    </UserContainer>
                </ListItem>
                <Li>
                    <LogoutButton onClick={() => logout()}>
                        Logout
                    </LogoutButton>
                </Li>
            </Ul>
        </Navbar>
    )
}

const mapStateToProps = ({ authedUser, users }) => {
    return {
        user: users && users[authedUser]
    }
}

export default connect(mapStateToProps)(Nav);