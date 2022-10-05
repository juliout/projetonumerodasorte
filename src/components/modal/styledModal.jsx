import styled from 'styled-components'

export const ModalMain = styled.div`
    background-color: #00000049;
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100vh;
    z-index: 99;
    display: flex;
    align-items: center;
    justify-content: center;
`

export const DesDiv = styled.div`
    background-color: #71265b;

    width: 30%;
    min-width: 430px;
    min-height: 300px;
    display: flex;
    flex-direction: column;
    align-items: center;


    .btnClose {
        margin-left: auto;
        width: 25px;
        height: 25px;
        border-radius: 50%;
        color: silver;
        background-color: white;
        transform: scale(1.5);
        cursor: pointer;
        
        :hover {
            transform: scale(1.55);
            filter: drop-shadow(2px 2px 2px #02020239);
        }
    }

    #descadastrar {
        width: 90%;

        display: flex;
        flex-direction: column;
        align-items: center;

        h2 {
            color: #f4e29b;
            margin-bottom: 10px;
        }
        p {
            width: 80%;
            text-align: center;
            font-size: 0.9rem;
            color: silver;
            margin-bottom: 10px;
        }

        .firstDiv {

            width: 100%;
            display: flex;
            flex-direction: column;

            label {
                color: #f4e29b;
                margin-bottom: 5px;
            }
            
            input{
                height: 35px;
                border-radius: 7px;
                width: 100%;
            }
            
            input[type=date] {
                width: 70%;
            }
            .top {
                display: flex;
                width: 100%;
                justify-content: space-between;
                margin-bottom: 10px;
                
                .divinput {
                    display: flex;
                    flex-direction: column;
                    width: 47%;
                }
            }
            .botton {
                display: flex;
                width: 100%;
                justify-content: space-between;
                margin-bottom: 10px;

                .divinput {
                    display: flex;
                    flex-direction: column;
                    width: 47%;
                    
                }
                
            }

        }

        .btnDescadastrar {
            width: 40%;
            height: 50px;

            margin: 30px 0;
            border-radius: 7px;
            border: 1px solid white;

            background-color: #71265b;
            color: #f4e29b;
            font-size: 1rem;
            font-weight: 700;

            cursor: pointer;

            :hover {
                background-color: white;
                color: #71265b;
            }
        }
    }

    @media (max-width: 426px) {
        min-width: 395px;
    }

    @media (max-width: 376px) {
        min-width: 350px;
        font-size: 70%;

        button {
            font-size: 0.8rem !important;
        }
    }
    @media (max-width: 376px) {
        min-width: 305px;
        input[type=date] {
            width: 100% !important;
        }
    }
    
`

export const RepoDiv = styled.div`
    background-color: #71265b;

    width: 30%;
    min-width: 430px;
    min-height: 300px;
    display: flex;
    flex-direction: column;
    align-items: center;

    .btnClose {
        margin-left: auto;
        width: 25px;
        height: 25px;
        border-radius: 50%;
        color: silver;
        background-color: white;
        transform: scale(1.5);
        cursor: pointer;
        
        :hover {
            transform: scale(1.55);
            filter: drop-shadow(2px 2px 2px #02020239);
        }
    }

    #reportar {
        width: 90%;

        display: flex;
        flex-direction: column;
        align-items: center;

        h2 {
            color: #f4e29b;
            margin-bottom: 10px;
        }
        p {
            width: 80%;
            text-align: center;
            font-size: 0.8rem;
            color: silver;
            margin-bottom: 25px;
        }
        
        input {                
                height: 35px;
                border-radius: 7px;
                padding-left: 10px
        }
        .nameEmail{
            width: 90%;
            display: flex;
            justify-content: space-between;
            margin-bottom: 10px;
        }
        .linkinput {
            width: 90%;
            margin-bottom: 10px;
        }
        textarea {
            width: 90% !important;
            height: 100px !important;
            border-radius: 7px;
            resize: none;
            padding: 10px;
            font-weight: 700;
        }
        .btnEnviar {
            width: 50%;
            height: 40px;
            margin: 25px 0;
            border-radius: 7px;
            cursor: pointer;
            border: 1px solid white;

            background-color: #71265b;
            color: #f4e29b;
            font-size: 1rem;
            font-weight: 700;

            :hover {
                background-color: white;
                color: #71265b;
            }
        }
    }

    @media (max-width: 440px) {
        min-width: 400px;
        .nameEmail {
            justify-content: space-between;
            div {
                width: 100%;
            }
            input {
                width: 100% !important;
                margin-right: 10px;
            }
        }
    }
    @media (max-width: 376px) {
        min-width: 350px;
    }

    @media (max-width: 321px) {
        min-width: 310px;
    }


`