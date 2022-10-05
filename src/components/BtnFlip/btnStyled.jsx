import styled from "styled-components";




export const BtnDiv = styled.div`

  box-sizing: border-box;

div {
  color: #71265b;
  text-decoration: none;
  transition: color 0.2s;
  width: 100%;
  outline: none;
  font-family: 'Poppins', sans-serif;
  font-size: 0.8rem;
  font-weight: 700;
}

div:hover,
div:focus {
  color: #71265b;
}

  div.flip-animate {
  span {
    position: relative;
    display: inline-block;
    padding: 0;    
    transition: transform 0.2s;
    transform-origin: 50% 0;
    transform-style: preserve-3d;
  }

  span:before {
    position: absolute;
    top: 100%;
    left: 0;
    width: 100%;
    height: 100%;
    content: attr(data-back);
    transition: color 0.2s;
    transform: rotateX(-90deg);
    transform-origin: 50% 0;
    text-align: center;
  }

  &:hover {
    cursor: pointer;
  }

  &:hover span,
  &:focus span {
    transform: rotateX(90deg) translateY(-22px);
  }

  &:hover span:before,
  &:focus span:before {
    color: #71265b;
  }
  }


`
