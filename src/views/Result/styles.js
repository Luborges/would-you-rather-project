import styled from 'styled-components';

export const Container = styled.div`
    width: 500px;
    margin: 12% 10px 10px 10px;
`;

export const RightContainer = styled.div`
    display: flex;
    flex: 2;
    flex-direction: column;
`;

export const Card = styled.div`
    display: flex;
    flex-wrap: wrap; 
    border: 1px solid #ccc;
`;

export const Title = styled.h3`
    border-bottom: 1px solid #ccc;
    margin: 2px 10px;
`;

export const BoxOption = styled.div`
    border: 1px solid #ccc;
    margin: 10px;
    padding: 10px;
`;

export const Question = styled.div`
    margin-bottom: 10px;
`;

export const Vote = styled.div`
    position: absolute;
    width: 30px;
    height: 30px;
    text-align: center;
    justify-content: center;
    align-items: center;
    background-color: #e3c41e;
    border: 1px solid #e3c41e;
    border-radius: 30px;
    display: flex;
    margin-left: 275px;
    margin-top: -15px;
    font-size: 11px;
    line-height: 1;
`;