import styled from 'styled-components'

export const HeaderDiv = styled.header`

    display: flex;
    align-items: center;
    justify-content: space-around;

    background-color: black;
    width: 100%;
    height: 55px;
    color: white;
    border-bottom: 7px solid #ad39b6;
    
    .divlogo {
        display: flex;
        align-items: center;
       
        img {
            width: 30px;
            margin-right: 10px;
        }
        span {
            font-size: 15px;
        }
    }

    .hamburgerMenu {
        
        fill: white;
        width: 35px;
        height: 35px;

        cursor: pointer;
    }
`