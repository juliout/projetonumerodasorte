import styled from 'styled-components'

export const Form = styled.form`
    width: 100%;
    min-height: 400px;
    height: auto;
    display: flex;
    flex-direction: column;

    span {
        font-size: 0.7rem;
        margin-left: 5px;
    }
    .btnSalvar {
        background-color: #3eb54e;
        width: 150px;
        height: 35px;
        margin: 5px 0;
        border-radius: 7px;
        color: white;
        font-size: 1rem;
        font-weight: 700;
        box-shadow: 2px 3px 4px #00000081;
        cursor: pointer;
    }
    
`
export const BtnCancel = styled.button`
    
    width: 140px;
    height: 35px;
    margin: 5px 0;
    border-radius: 7px;
    font-weight: 700;
    font-size: 0.7rem;
    color: #bd0505;
    text-decoration: underline;
    cursor: pointer;
    
`


export const PainelLembretes = styled.div`

    
    display: flex;
    justify-content: center;

    width: 100%;
    height: auto;
    background-color: white;

    border-radius: 0 10px 10px 10px ;
    padding: 20px 10px 40px 25px;
    margin-bottom: 15px;
    box-shadow: 4px 4px 5px #94949481;

    table {
        width: 100%;
        border-collapse: collapse;
    }
    .trhead {
        width: 100%;
        height: 35px;
        td {
            margin-left: auto;
            font-weight: 700;
            border: none !important;
            p {
                border: none !important;
            }
        }
    }
    .tbody{
        height: 400px;
  
    }
    .inpTd {
        box-shadow: inset 1px 1px 2px #000;
        filter: none;
        :checked {
            box-shadow:  1px 1px 2px #000;
        }
    }
    td {
        vertical-align: bottom;
        height: 35px;
        font-size: 0.8rem;
    }
    .tdName {
        width: 15%;
        border-bottom: 1px silver solid;
        text-align: left;
        input{
            width: 15px;
            height: 15px;
            margin-bottom: 5px;
            
        }
    }
    .tdDia {
        width: 25%;
        vertical-align: bottom;
        font-weight: 700;
        p{  
            margin-left: 10%;
            width: 90%;
            max-width: 150px;
            border-bottom: 1px silver solid;

        }
    }
    .tdRadio {
        width: 20%;
        text-align: center;

        p{
            font-size: 0.7rem;
        }
    }
    .tdAlarme {
        width: 14%;
        min-width: 50px;
        select {
            width: 100%;
            max-width: 120px;
            height: 70%;
            font-size: 0.7rem;
            text-align: center;
            border: 1px solid silver;
        }
    }


`