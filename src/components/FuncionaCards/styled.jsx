import styled from 'styled-components'

export const FuncionaA = styled.a`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    

    width: 250px;
    height: 350px;
    margin: 0 10px;
    margin-top: 25px;
    
    background-color: #f7f7f7;

    .cardN {                    
        display: flex;
        align-items: center;
        justify-content: center;

        width: 35px;
        height: 35px;
        
        background-color: #fccfed;
        border: 10px solid #fccfed;
        border-radius: 60px;
        margin: 20px 0 10px 0;

        color: #71265b;
        font-weight: 700;
        font-family: 'Noto Sans', sans-serif;
    }

    .exclam {
        font-size: 1.2rem;
        color: #006f90;
        text-shadow: 1px 0px 3px #006f90;
    }
    p {
        width: 90%;
        max-width: 230px;
        font-size: 0.8rem;
        font-weight: 600;
        color: #919191;
        font-family: 'Poppins', sans-serif;
    }

    img {
        margin-top: auto;
        width: 70%;
        max-width: 200px;
        filter: grayscale(100%);
        filter: gray; /* IE */
        :hover {
            filter: grayscale(0%);
            filter: gray; /* IE */
        }
    }

`