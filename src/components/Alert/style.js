import styled from "styled-components";

export const AlertTag = styled.div`
    position: absolute;
    top: 80px;
    background-color: ${props => props.type === 'success' ? '#040' : '#A00'};
    height: 30px;
    width: 300px;
    color: white;
    padding: 8px;
    border-radius: 8px;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
`