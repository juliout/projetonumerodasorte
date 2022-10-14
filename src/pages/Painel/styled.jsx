import styled from 'styled-components'

export const PainelDiv = styled.div`
    display: flex;
    justify-content: center;
    padding-top: 3%;
    width: 100%;
    min-height: 88.2vh;
    background-color: #eeeeee;
`

export const PainelMain = styled.div`

    width: 97%;
    height: 70%;
    max-width: 1100px;

    .abaDiv {
        display: flex;
        h3 {
            display: flex;
            align-items: center;
            justify-content: center;
            background-color: white;
            width: 20%;
            min-width: 120px;
            max-width: 150px;
            height: 30px;

            border-radius: 10px 10px 0 0;
            margin-right: 5px;
            text-align: center;
            font-size: 0.9rem;
            color: #3eb54e;
            cursor: pointer;
            :hover  {
                background-color: #cce737;
                color: white;
            }
        }
        
        .Alarm {
            background-color: ${p=>p.colorH3 === 'Editar' ? '#cce737' : 'white' };
        }
        .Editar {
            background-color: ${p=>p.colorH3 === 'Alarme' ? '#cce737' : 'white' };;
        }


    }
`