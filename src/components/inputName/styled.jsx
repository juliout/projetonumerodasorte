import styled from "styled-components";

export const InputDiv = styled.div`
    width: 100%;
    height: 100%;
    
    input {
        border: ${p=> p.border ? '1px red solid' : 'none'};
    }
    p {
        color: red;
        font-size: 0.5em;
        margin-top: 5px;
    }
`