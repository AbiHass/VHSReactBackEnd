import { styled } from "styled-components";


export const FooterContainerStyled = styled.footer`
  background-color: var(--orange);
  font-family: monospace;
  font-size: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;
  flex-direction: column;
  padding: 20px 0 20px 0;
  @media(max-width: 425px){
    font-size: 14px;
  }
`;
export const Divider = styled.div`
border: 1px solid black;
width: 70%;
margin: 20px 0;
`;