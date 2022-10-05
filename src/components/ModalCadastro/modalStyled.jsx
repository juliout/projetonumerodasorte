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
        max-width: 600px;
        min-height: 400px;
        max-height: 700px;
        margin-top: 10%;
        background-color: #71265b;

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
            height: auto;
            display: flex;
            flex-direction: column;
            align-items: center;

            .formTitle {
                color: #f4e29b;
                width: 100%;
                font-weight: 700;
                text-align: center;
                margin-top: 5%;
                margin-bottom: 20px;
            }
            .divForm {
                min-height: 400px;
                min-width: 315px;
                max-width: 600px;
                display: flex;
                flex-direction: column;
                justify-content: space-around;
                align-items: center;
            }
            .input  {
                display: flex;
                flex-direction: column;
                width: 31%;
                
                label {
                    color: white;
                    margin-bottom: 7px;
                    @media (max-width: 770px)  {
                        font-size: 0.7rem;
                    }
                }
                input {
                    padding-left: 10px;
                    width: 100%;
                    height: 40px;
                    border-radius: 10px;
                }
                input[type=email] {
                    padding-left: 10px;
                    width: 100%;
                    height: 40px;
                    border-radius: 10px;
                }
                input[type=password] {
                    padding-left: 10px;
                    width: 100%;
                    height: 40px;
                    border-radius: 10px;
                }    
            }
            .fullname {
                width: 95%;            
            }

            .stwo {
                width: 95%;
                height:auto;
                min-height: 70px;
                display: flex;
                align-items: center;
                justify-content: space-between;    
            }
            .pform {
                font-family: 'Poppins', sans-serif;
                width: 100%;
                color: #f4e29b;
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
                    color: #f4e29b;
                    font-weight: 500;
                }
                
            }
            .prontobtn {
                background-color: #f4e29b;
                width: 90%;
                height: 35px;
                border-radius: 10px;
                font-size: 1rem;
                font-weight: 700;
                color: #71265b;
                letter-spacing: 0.05rem;
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