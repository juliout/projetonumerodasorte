import styled from 'styled-components'

export const ModalDiv = styled.div`
    width: 100%;
    height: 100vh;

    position: fixed;
    display: flex;
    justify-content: center;
    background-color: #00000049;
    z-index: 99;

    .error-toast {
        background-color: #ffa2a2;
        color: white;
    }

    .modalMain {
        width: 90%;
        min-width: 310px;
        max-width: 700px;
        height: 400px;
        min-height: 250px;
        max-height: 700px;
        margin-top: 10%;
        background-color: #f4f4f4;
        border-radius: 40px;

        display: flex;
        flex-direction: column;

        .btnClose {
            margin-left: auto;
            width: 25px;
            height: 25px;
            border-radius: 30px;
            transform: scale(1.5);
            cursor: pointer;
        }
        #formSendCadastro {
            margin: 0 auto;
            width: 90%;
            max-width: 900px;
            height: 350px;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: flex-start;

            .formTitle {
                color: #3fb54f;
                width: 100%;
                font-weight: 700;
                text-align: center;
                margin-top: 5%;
                margin-bottom: 5px;
                font-size: 1rem;
            }
            .divForm {
                height: 400px;
                width: 80%;
                min-width: 315px;
                max-width: 600px;
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
            }
            .input  {
                display: flex;
                flex-direction: column;
                width: 31%;
                                
                label {
                    color: #9c9c9c;
                    margin-bottom: 5px;
                    @media (max-width: 770px)  {
                        font-size: 0.7rem;
                    }
                }
                input {
                    padding-left: 10px;
                    width: 100%;
                    height: 30px;
                    
                    border-radius: 10px;
                    box-shadow: inset 1px 1px 2px #919191;
                }
                input[type=email] {
                    padding-left: 10px;
                    width: 100%;
                    height: 30px;
                    border-radius: 10px;
                }
                input[type=date]{
                    font-size: 0.7rem;
                }
                input[type=password] {
                    padding-left: 10px;
                    width: 100%;
                    height: 30px;
                    border-radius: 10px;
                    
                }    
            }
            .select {
                
                width: 30%;
                display: flex;
                flex-direction: column;
                label {
                    color: silver;
                    margin-bottom: 5px;
                    @media (max-width: 770px)  {
                        font-size: 0.7rem;
                    }
                }
                select {
                    height: 30px;
                    border-radius: 17px;
                    padding-left: 10px;
                    box-shadow: inset 1px 1px 2px #7a7a7a;
                }
            }
            .sone {
                width: 80%;
                display: flex;
                justify-content: space-around;
                .input {
                    width: 46%;
                }
            }
            .stwo {
                width: 95%;
                height:auto;
                min-height: 70px;
                margin-bottom: 10px;
                display: flex;
                align-items: center;
                justify-content: space-between;
       
            }
            .pform {
                font-family: 'Poppins', sans-serif;
                width: 100%;
                color: silver;
                font-size: 0.8rem;
                font-weight: 600;
                line-height: 1.2rem;
                letter-spacing: 0.08rem;

                text-align: center;
            }
            .divtemos {
                display: flex;
                align-items: center;
                margin: 20px 0;

                input {
                    margin-right: 5px;
                }
                label {
                    color: silver;
                    font-weight: 500;
                }
                span {
                    color: #3fb54f;
                }
                
            }
            .prontobtn {
                background-color: #ffbb28;
                width: 90%;
                height: 35px;
                border-radius: 10px;
                font-size: 1rem;
                font-weight: 700;
                color: #71265b;
                letter-spacing: 0.05rem;
                box-shadow: 1px 1px black;
                cursor: pointer;
            }
        }
        
        @media (max-width: 450px) {
            width: 100%;
            #formSendCadastro {
                width: 100%;
            }
                .stwo {
                    height: 80px;
                    flex-wrap: wrap;
                    justify-content: center;
                    align-items: center;
                }
                
        }
    
    }


`