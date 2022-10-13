import styled from "styled-components";

export const MidiaDefault = styled.div`

@media (max-width: 620px) {
    .divlogo>h1 {
        font-size: 1rem !important;
    }
    .restBot{
        flex-direction: column;        
        height: 120px;
    }
    .restBot>.left{
        height: 50px;
        width: 90%;
        border-bottom: 5px #3eb54e solid;
        justify-content: space-between;
    }
    .restBot>.right{
        height: 50px;
        width: 90%;
        justify-content: space-between;
    }
}

@media (max-width: 560px) {

    .sc-jrcTuL {
        background-size: cover !important;
        background-position: center;
    }


    .bannerMain>.right{
        display: none !important;
    }
    .bannerMain>.left{
        width: 100% !important;
    }
    .bannerMain>.left>h1{
        font-size: 1rem !important;
    }
    .divUls{
        padding: 0 !important;
        width: 100% !important;
    }
    .divUls label{
        font-size: 0.8rem;
    }
    .divlogo {
        display: none !important;
    }
    .restMain {
        border-top: 4px solid #3eb54e;
    }
    .funcionaBottom {
        height: 550px !important;
        justify-content: space-around;
    }
    .funcionaCard {
        width: 45% !important;
        height: 49% !important;

        margin: 0 !important;
    }
    .funcionaCard p {
        font-size: 0.5rem !important;
    }
    .funcionaCard span {
        width: 25px !important;
        height: 25px !important;
    }

    .indicarLeft h1 {
        font-size: 1.2rem !important;
    }
 
    .restMain {
        width: 95% !important;
    }
    .restMain>.restTop {
        flex-direction: row !important;
        height: 250px !important;
        align-items: flex-start !important; 
        justify-content: space-around !important;
        padding-top: 5%;
    }
    .restTop>.list {
        width: 47% !important;
        height: 90% !important;
        flex-direction: column;
        align-items: flex-start !important;
    }
    .list>.divLeft {
    
        justify-content: left !important;
    }
    .restTop>.bot {
        margin: 0 !important;
        flex-direction: column;
        height: 60%;
        justify-content: space-around !important;
    
    }
    .hiddenmenu {
        display: flex !important;
        margin-left: 5%;
        font-size: 1rem;
        font-weight: 700;
    }
    .hidden {
        opacity: 1 !important;
    }
    .list>.restLogo{
        margin-top: 5px !important;
    }
    .restBot>.right {
        margin: 0 !important;
        height: 70px;
        justify-content: space-around;
        flex-direction: column !important;
    }
    .reservDiv {
        margin-right: 10px !important;
        width: 60%;
    }
    .reservDiv h3 {
        margin-left: 5px;
        font-size: 0.6rem !important;
    }

    .topCadas {
        height: 100px !important;
        margin-bottom: 10%;
        flex-wrap: wrap;
    }
    
}

@media (max-width: 426px) {
    .prontobtn {
        width: 70% !important;
    }
    .formTitle {
        
        width: 90% !important;
    }
    .divForm {
        width: 90% !important;
    }
    .cardRede>label>img{
        min-width: 35px !important;
    }
    #termos {
        min-width: 15px !important;
    }
    .logindiv {
        min-width: 320px !important;
    }
    .logindiv>input{
        width: 20% !important;
        min-width: 40px !important;
    }
    .hamburgerMenu{
        width: 30px;
        min-width: none !important;
        height: 30px !important;
        min-height: 30px !important;
        margin-left: 2px !important;
    }
    .logindiv>button{
        margin: 0 !important;
    }

    .bannerMain>.left>h1 {
        font-size: 0.8rem !important;
    }
    .leftOne>h3{
        font-size: 0.6rem !important;
    }
    .divUls {
        flex-direction: column;
        flex-wrap: wrap;
    }
    .divUls>ul{
 
        width: 100% !important;
        display: flex;
        
        justify-content: flex-start;
        flex-wrap: wrap;
        margin-bottom: 5px;
        
    }
    .divUls>ul>li{
        margin-right: auto;
        width: 47% !important;
        height: 30px;
   
        margin-top: 2px;
    }
    .divUls>ul>li>input{
        margin-right: 1px !important;
    }

    .funcionaBottom{
        height: 500px !important;
    }
    .funcionaCard {
        width: 49% !important;
        height: 47% !important;
    }
    .gcUYpE table {
        font-size: 0.7rem !important;
    }
}

@media (max-width: 321px) {
    .botCadas {
        margin-top: 20px !important;
        height: 150px !important;
        flex-wrap: wrap;
    }
    .sc-jrcTuL{
        height: 550px !important;
    }
    .divselection{
        flex-direction: column !important;
        height: 80% !important;
    }
    .leftOne{
        width: 100% !important;
        margin-bottom: 20px;
    }
    .receber {
        width: 100% !important;
 
    }
    .divUls>ul>li {
        height: 20px !important;
    }
}


`