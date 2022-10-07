import styled from 'styled-components'

export const PainelDiv = styled.div`
    display: flex;
    justify-content: center;
    padding-top: 3%;
    width: 100%;
    height: 88vh;
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
            min-width: 50px;
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
                color: #095e57;
            }
        }
    }
`
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
    .btncCadastro {
        width: 140px;
        height: 35px;
        margin: 5px 0;
        border-radius: 7px;
        font-weight: 700;
        font-size: 0.7rem;
        color: #bd0505;
        text-decoration: underline;
        cursor: pointer;
    }
`

export const PainelLembretes = styled.div`
    
    display: flex;
    justify-content: center;

    width: 100%;

    background-color: white;

    border-radius: 0 10px 10px 10px ;
    padding: 20px 10px 40px 25px;
    margin-bottom: 15px;
    box-shadow: 2px 2px 5px #00000081;

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
        input {
            width: 15px;
            height: 15px;
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

    .switch {
        position: relative;
        display: inline-block;
        width: 40px;
        height: 15px;

        input {
            opacity: 0;
            width: 0;
            height: 0;
            :checked + .slider {
            background-color: #2196F3;
        }

        :focus + .slider {
            box-shadow: 0 0 1px #2196F3;
        }

        :checked + .slider:before {
            -webkit-transform: translateX(26px);
            -ms-transform: translateX(26px);
            transform: translateX(26px);
        }
        }


        .slider {
            position: absolute;
            cursor: pointer;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background-color: #ccc;
            -webkit-transition: .4s;
            transition: .4s;
            
        }

        .slider:before {
            position: absolute;
            content: "";
            height: 16px;
            width: 16px;
            left: -2px;
            bottom: 0px;
            background: rgb(72,186,88);
            background: linear-gradient(311deg, rgba(72,186,88,1) 51%, rgba(255,255,255,1) 100%);
            -webkit-transition: .4s;
            transition: .4s;
            border: 1px solid #48ba58;
            box-shadow: 1px 1px 1px black;

        }


        .slider.round {
            border-radius: 34px;
        }

        .slider.round:before {
            border-radius: 50%;
        }
    }
`