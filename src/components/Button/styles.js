import styled from "styled-components";

export const ButtonContainer = styled.button`
  display: none;
  
  @media(max-width: 800px) {
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: space-evenly;
    width: 50px;
    height: 50px;
    color: white;
    background-color: #3e3e3e;
    border-radius: 25px;
    border: none;
  }
`