import styled from 'styled-components';

export const Navbar = styled.div`
    height: 30px;
    border-bottom: 1px solid #00b9bc;
`;

export const Ul = styled.ul`
    flex-wrap: wrap; 
    display: flex;
`;

export const Li = styled.li`
    flex: 1;
    list-style-type: none;
    cursor: pointer;
    a:link{
        color: black;
        text-decoration: none;
    },
    a:visited{
        color: black;
        text-decoration: none;
    },
    a:hover{
        color: black;
        text-decoration: none;
    }
`;

export const ListItem = styled.div`
    flex: 2;
`;

export const LogoutButton = styled.button`
    font-weight: bold;
    color: black;
    background: white;
    border: 0px;
    cursor: pointer;
`;

export const UserContainer = styled.span`
    margin-left: 5px;
`;

export const UserIcon = styled.img`
    width: 15px;
    height: 15px;
    border-radius: 20px;
`;