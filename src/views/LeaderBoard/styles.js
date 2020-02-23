import styled from 'styled-components';

export const Container = styled.div`
    width: 500px;
    margin: 2% 10px 10px 10px;
`;

export const Card = styled.div`
    display: flex;
    flex-wrap: wrap; 
    border: 1px solid #ccc;
    margin: 5px;
`;

export const Title = styled.div`
    flex: 1;
    padding: 10px;
    font-weight: bold;
    width: 100%;
`;

export const RightContainer = styled.div`
    flex: 1;
    margin: 10px;
`;

export const CenterContainer = styled.div`
    flex: 2;
    flex-direction: column;
`;

export const ScoreBox = styled.div`
    height: 100%;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    border: 1px solid #ccc;
`;

export const ScoreTitle = styled.div`
    width: 100%;
    flex: 1;
    background-color: #ccc;
    justify-content: center;
    align-items: center;
    border: 1px solid #ccc;
`;

export const Box = styled.div`
    display: flex;
    flex: 4;
    justify-content: center;
    align-items: center;
`;

export const Score = styled.div`
    width: 60px;
    height: 60px;
    display: flex;
    font-size: 22px;
    border: 1px solid #00b9bc;
    border-radius: 40px;
    background-color: #00b9bc;
    justify-content: center;
    align-items: center;
    line-height: 1;
    color: white;
`;

export const Total = styled.div`
    flex: 1;
    margin: 10px;
    font-weight: bold;
`;