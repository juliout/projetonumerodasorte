import styled from "styled-components";

const pColor = '#3eb54e'
const h1Color = '#095e57'
const borderColor = '#3fb54f'
const fBtnColor = '#ffbb28'
const silverColor = '#838383'
const greenbtn = '#cce737'


export const BannerDiv = styled.div`
    
    width: 100%;
    height: 350px;
    background-image: url('./image/bannernumeros.png');
    background-repeat: no-repeat;
    background-size: 110% 100%;
    background-position: center;

    .bannerMain {
        width: 100%;
        height: 100%;
        max-width: 1100px;
        padding: 5px;
        display: flex;
        align-items: center;
        margin: 0 auto;

        .left {

            width: 70%;
            height: 100%;
            display: flex;
            flex-direction: column;
            h1 {
                text-align: left;
                font-size: 1.3em;
                color: ${h1Color};
                margin-bottom: 15px;
            }
        }

        .divselection {
            width: 100%;
            height: 70%;
            display: flex;
            justify-content: space-around;
        }

        .leftOne {
            display: flex;
            flex-direction: column;
            align-items: center;
            width: 55%;
            height: 100%;
            padding-right: 5px;
            border-right: 1px solid ${pColor};

            h3{
                display: flex;
                font-size: 0.8rem;
 
                text-align: center;
                color: ${pColor};
                font-weight: 700;
                p {
                    width: 25px;
                    min-width: 25px;
                    height: 25px;

                    margin-right: 5px;
                    background-color: ${pColor};
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    border-radius: 50%;
                    font-size: 1rem;
                    color: white;
                }
            }
        }
        .divUls {
            width: 85%;
            display: flex;
            padding: 5px;
            margin-top: 10px;

            ul {
               width: 50%;
            }
            li {
                align-items: center;
                color: ${h1Color};
                input {
                    border-radius: 30%;
                }
            }
        }
        .receber {
            width: 40%;
            height: 110%;
            display: flex;
            flex-direction: column;
            align-items: center;

            h3{
                display: flex;
                font-size: 0.8em;

                align-items : center;
                text-align: left;
                color: ${pColor};
                font-weight: 700;
                p {
                    width: 25px;
                    height: 25px;
                    margin-right: 15px;
                    background-color: ${pColor};
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    border-radius: 50%;
                    font-size: 1rem;
                    color: white;
                }
            }
            .redesSelect {
                display: flex;
                justify-content: space-around;
                width: 80%;
                margin-top: 10px;
            }
            .cardRede {
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: space-around;
                width: 30%;
                label{
                    cursor: pointer;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }
                img {
                    width: 80%;
                }
                input[type=radio]{
                    width: 17px;
                    height: 17px;
                    cursor: pointer;
                }
            }
            .redeDado {
                width: 75%;
                max-width: 200px;
                height: 37px;
                margin: 10px 0;
                border-radius: 10px;

                text-align: center;
               box-shadow: 1px 1px black;
            }
            .termosdiv {
                width: 80%;
                display: flex;
                align-items: center;
                justify-content: center;
                label {
                    margin-left: 5px;
                    font-size: 0.7rem;
                    a {
                        font-size: 0.7rem;
                    }
                }
                input {
                    border-radius: 40px;
                }
            }
            .cadastrarbtn {
                background-color: ${fBtnColor};
                width: 75%;
                max-width: 200px;
                height: 40px;
                border-radius: 7px;
                font-weight: 900;
                box-shadow: 1px 1px black;
                margin-top: 10px;
            }

        }

        .right {

            width: 30%;
            height: 100%;
            display: flex;
            align-items: center;

            .selo{
                position: absolute;
                z-index: 10;
                
            }
            .zap {
                width: 60%;
                max-width: 170px;
                transform: translateY(50px);
                margin-left: 40px;
            }
        }


    }

`

export const ComoFuncionaDiv = styled.div`
    
    width: 100%;
    min-height: 550px;
    height: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    
    .funcionaMain {
        width: 100%;
        max-width: 1100px;
        height: 100%;

        display: flex;
        flex-direction: column;
        padding: 25px 0px;
       

        .funcionaTop {
            h1 {
                width:19rem;
                color: ${pColor};
                border-bottom: 5px ${borderColor} solid;
                margin-bottom: 25px;
            }
            p {
                color: ${silverColor};
                font-weight: 700;
                font-size: 1rem;
                margin-bottom: 20px;
            }
        }

        .funcionaBottom {
            
            width: 100%;
            min-height: 400px;
            height: auto;
            
            display: flex;
            flex-wrap: wrap;
            justify-content: space-around;
            
            
            margin: 0 auto;
            
        }
    }
`

export const PerguntasDiv = styled.div`

    display: flex;
    justify-content: center;

    padding: 20px 0 50px 0;

    width: 100%;
    min-height: 410px;
    height: auto;
    
    .perguntasMain {
        width: 100%;
        max-width: 1100px;
        padding: 0 10px;

        h1{
            border-bottom: 5px ${borderColor} solid;
            width: 19rem;
            color: ${pColor};
            margin-bottom: 20px;
        }
        .perguntasContainer {
            width: 100%;
            display: flex;
            flex-direction: column;
        }

    }


`
export const IndicarBannerDiv = styled.div`
    
    width: 100%;
    min-height: 200px;
    height: auto;

    display: flex;
    align-items: center;
    justify-content: center;

    background-image: url('./image/indicarbg.png');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;

    .indicaMain {
        width: 100%;
        max-width: 1100px;
        display: flex;
        align-items: center;
        justify-content: space-evenly;


        .indicarLeft {
        display: flex;
        flex-direction: column;
        align-items: left;
        justify-content: center;
        

        width: 50%;
        min-width: 200px;
        height: 100%;
        padding: 10px;
        
        h1{
            font-size: 1.4rem;
            color: ${h1Color};
        }

        button{
            width: 50%;
            height: 40px;
            max-width: 250px;
            min-width: 150px;
            font-weight: 600;

            display: flex;
            align-items: center;
            justify-content: center;

            margin-top: 10px;
            border-radius: 13px;

            background-color: ${pColor};
            color: white;
            
            .shareIcon {
                width: 20px;
                height: 20px;
                margin-left: 10px;
                fill: ${greenbtn};
            }
        }

    }

    .indicarRight{ 
        width: 50%;
        height: 100%;
        
        display: flex;
        justify-content: center;
        align-items: center;


        img{
            width: 100%;
            max-width: 400px;
            height: 70%;
            max-height: 200px;

        }
    }

    }
`
export const RestInfoDiv = styled.div`
    
    width: 100%;
    min-height: 220px;
    height: auto;

    display: flex;
    justify-content: center;

    .restMain {
        width: 100%;
        max-width: 1100px;
        
        min-height: 220px;
        height: auto;

        display: flex;
        flex-direction: column;
        
        .restTop {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            
            width: 100%;
            height: 140px;
            
            border-bottom: 5px ${pColor} solid;

            .list {
                display: flex;
                align-items: center;
                justify-content: space-between;
                width: 100%;
                height: 30%;
                max-width: 1100px;

                .hidden {
                    display: flex;
                    opacity: 0;
                }

                .hiddenmenu {
                    display: none;
                    font-size: 600;
                    font-size: 0.9rem;
                }

                .divLeft {
                    display: flex;
                    align-items: center;
                    width: 100%;
                    max-width: 200px;
                    justify-content: space-around;
                }

                .restLogo {
                    max-width: 150px;
                    height: 20px;
                }


            }
            .bot {    
                margin-top: 10px;
                font-weight: 700;
                font-size: 0.9rem;
                width: 47% !important;
                display: flex;
                align-items: baseline;
                justify-content: space-around;
                
            }
        }
        .restBot {
            width:100%;
            min-height: 80px;
            display: flex;
            align-items: center;
            padding-right: 5px;
            justify-content: space-between;


            .left {
                display: flex;
                
                div {
                    display: flex;
                    align-items: center;
                    margin-right: 10px;

                    span {
                        font-family: 'Poppins', sans-serif;
                        font-size: 0.7rem;
                        font-weight: 700;
                        margin-left: 10px;
                    }
                }
                .lIcon {
                    width: 25px;
                    height: 25px;
                }
            }

            .right {
                display: flex;
                align-items: center;
                div {
                    display: flex;
                    align-items: center;
                }
                span {
                    font-size: 0.8rem;
                    font-weight: 700;
                }
                .socialIcons {
                    width: 35px;
                    height: 35px;
                    margin-left: 10px;
                    :hover {
                        transform: scale(1.3);
                        cursor: pointer;
                    }
                }
            }
        }
    }
`
