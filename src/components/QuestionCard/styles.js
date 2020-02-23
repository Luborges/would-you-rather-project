import styled from 'styled-components';

export const Card = styled.div`
    display: flex;
    flex-wrap: wrap; 
    border: 1px solid #ccc;
`;

export const Author = styled.div`
    background-color: #ccc;
    font-weight: bold;
    padding: 10px;
`;

export const Title = styled.div`
    flex: 1;
    margin: 10px;
    font-weight: bold;
`;

export const Option = styled.div`
    flex: 1;
    margin: 10px;
`;

export const Button = styled.button`
    width: 93%;
    min-height: 30px;
    max-height: 30px;
    flex: 1;
    background: white;
    color: #0000cc;
    border: 1px solid #0000cc;
    margin: 10px;
    
    a{
        display: block;
        width: 100%;
    },
    a:link{
        color: #0000cc;
        text-decoration: none;
    },
    a:visited{
        color: #0000cc;
        text-decoration: none;
    },
    a:hover{
        color: #0000cc;
        text-decoration: none;
    }
`;

export const LeftContainer = styled.div`
    flex: 1;
    border-right: 1px solid #ccc;
    text-align: center;
`;

export const RightContainer = styled.div`
    display: flex;
    flex: 2;
    flex-direction: column;
`;

export const Container = styled.div`
    margin: 10px;
`;

export const UserImage = styled.img`
    max-width: 150px;
    max-height: 170px;
    margin: 5px;
`;