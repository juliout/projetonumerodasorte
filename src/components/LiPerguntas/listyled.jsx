import styled from "styled-components";

const pColor = '#3eb54e'

export const ListDiv = styled.div`
    
            display: flex;
            flex-direction: column;
            padding-top: 10px;

            width: 100%;
            min-height: 70px;
            height: auto;
            margin-top: 5px;
            margin-left: 10px;
            border-bottom: 2px #f3f3f3 solid;
            cursor: pointer;
            margin-bottom: 10px;

            .top {
                display: flex;
                margin-bottom: 5px;

            }
            .bot {
                border-top: 2px #f3f3f3 solid;
                display: ${p=> p.hidden === false ? 'none' : 'flex'};
                padding: 10px 10px;
                text-align: left;
                background-color: #f5f5f5;
                font-size: 0.8rem;
            }

            h3{
                font-size: 1rem;
                color: ${p=> p.colorx === false ? '#858585' : pColor };
                font-weight: ${p=> p.colorx === false ? 400 : 700 };
            }
            
            .arrowIcon {

                width: 30px;
                height: 30px;
                fill: #858585;
                margin: 0 20px 0 auto;
                cursor: pointer;
                transform: ${p=> p.hidden === false ? 'none' : 'rotate(180deg)'};
            }
`