import styled from 'styled-components'

export const HeaderDiv = styled.header`

    display: flex;
    align-items: center;
    justify-content: space-evenly;

    background-color: #3eb54e;
    width: 100%;
    height: 55px;
    color: white;
    border-bottom: 7px solid #cce737;
    
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
    .logindiv {
        width: 30%;
        min-width: 400px;        
        display: flex;
        justify-content: space-around;
        align-items: center;
        

        input {
            width: 32%;
            min-width: 70px;
            height: 25px;
            padding-left: 10px;
            margin-left: 1%;
            border-radius: 7px;
        }
        button {
            width: 15%;
            min-width: 50px;
            height: 25px;
            border-radius: 7px;
            margin: 0 5px;
            background-color: #cce737;
            color: black;
            font-weight: 700;
            border: none;
        }
        .iconH {
            width: 25px;
            min-width: 25px;
            height: 25px;
            min-height: 25px;
            color: #cce737;
            margin-left: 5px;
        }
    }

    .hamburgerMenu {
        
        fill: #cce737;
        width: 40px;
        min-width: 40px;
        min-height: 40px;
        height: 40px;
        margin-left: 20px;
        cursor: pointer;
    }
`