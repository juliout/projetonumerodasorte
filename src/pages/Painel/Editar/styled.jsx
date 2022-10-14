import styled from 'styled-components'


export const Form = styled.form`
    width: 100%;
    min-height: 300px;
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
    background-color    
`

export const PainelLembretes = styled.div` 
    display: flex;
    flex-direction: column;
    justify-content: space-around;

    width: 100%;
    min-height: 200px;
    height: auto;

    background-color: white;

    border-radius: 0 10px 10px 10px ;
    padding: 20px 10px 10% 25px;
    margin-bottom: 15px;
    box-shadow: 4px 4px 5px #94949481;

    flex-wrap: wrap;

    .topCadas {
        display: flex;
        justify-content: flex-start;
        min-height: 70px;
        height: auto;
        margin-bottom: 20px;
        
        .inputName {
            width: 100%;
            height: 30px;
            input {
                border-radius: 12px;
                vertical-align: middle;
                padding-top: 5px;
            }
            p{
                position: absolute;
                transform: translateY(15px);
            }
        }

        div {
            width: 23%;
            max-width: 220px;
            min-width: 120px;
            display: flex;
            flex-direction: column;
            justify-content: end;
            margin-bottom: 5px;

            margin-right: auto;
            label {
                margin-bottom: 5px;
                margin-left: 2px;
                font-weight: 500;
                font-size: 0.85rem;
            }
            input {
                width: 100%;
                height: 30px;
                min-height: 30px;
                border-radius: 12px;
                padding-left: 10px;
                vertical-align: middle;
                padding-top: 5px;
                box-shadow: inset 1px 1px 2px #838383 !important;
            }
        }
    }
    .botCadas {
        display: flex;
        justify-content: space-around;
        height: 60px;
        width: 100%;
        margin-top: 15px;
        .binput {
            width: 25%;
            max-width: 220px;
            margin-right: 5%;
            display: flex;
            flex-direction: column;
            justify-content: end;
            
            label {
                margin-bottom: 5px;
                margin-left: 2px;
                font-weight: 500;
                font-size: 0.85rem;
            }
            input {
                width: 100%;
                height: 30px;
                border-radius: 12px;
                padding-left: 10px;
                padding-top: 5px;
                vertical-align: middle;
                box-shadow: inset 1px 1px 2px #838383 !important;
            }
        }
        .tipEnvio {
            width: 50%;
            height: 90px;
            margin-top: 5px;
            
            p {
                font-size: 0.8rem;
            }
            .divC {
                display: flex;
                flex-direction: row;
                justify-content: space-around;
                width: 25%;
                min-width: 130px;
                
                div {                    
                    width: 30%;
                    height: 100%;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    input {
                        -webkit-appearance: inherit;
                        margin: 5px 0;
                        width: 17px;
                        height: 17px;
                        box-shadow: inset 1px 1px 2px #838383 !important;
                        border-radius: 50%;
                        cursor: pointer;
                        :checked {
                            background-color: green;
                            border: 2px solid white;
                            box-shadow:  1px 1px #838383 !important;
                        }
                    }
                    img {
                        margin-top: 5px;
                        width: 40px;
                    }
                }
            }
        }
    }
`