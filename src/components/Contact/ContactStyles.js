import { styled } from "styled-components";

export const ContactContainerStyled = styled.div`
  background-color: var(--orange);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 10px;
  h1 {
    font-family: var(--font);
    font-size: 25px;
    padding: 10px;
    text-transform: uppercase;
    @media (max-width: 425px) {
      font-size: 20px;
      padding: 5px;
    }
  }
  span {
    font-size: 35px;
    display: flex;
    gap: 20px;
    @media(max-width: 425px){
    font-size: 30px;
  }
  }
`;
export const Divider = styled.div`
  border: 1px solid black;
  width: 70%;
  margin: 10px;
`;
