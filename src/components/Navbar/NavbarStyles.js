import { styled } from "styled-components";

export const NavbarContainerStyled = styled.div`
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: space-around;
  position: fixed;
  top: 0;
  width: 100%;
  height: 80px;
  z-index: 1;
  box-shadow: 4px 5px 10px 5px #000000;
  @media (max-width: 425px) {
    img {
      width: 220px;
    }
  }
`;

export const LoginContainerStyled = styled.div`
  display: none;
  position: relative;
  font-size: 25px;
  @media (max-width: 515px){
    display: block;
  }
`;

export const LinksContainerStyled = styled.div`
  display: flex;
  align-items: center;
  gap: 35px;
  padding: 0 5px;
  @media (max-width: 425px) {
    gap: 17px;
  }
`;

export const LinkContainerStyled = styled.div`
  font-size: 16px;
  font-family: system-ui;
  font-weight: bold;
  background: var(--orange);
  border-radius: 5px;
  padding: 5px 10px;
  cursor: pointer;
  @media (max-width: 515px) {
    display: none;
  }
`;

export const CartNavStyled = styled.div`
  position: relative;
  font-size: 27px;
  cursor: pointer;
  @media (max-width: 425px) {
    font-size: 25px;
  }
  span {
    display: flex;
    justify-content: center;
    align-items: center;
    background: var(--orange);
    position: absolute;
    top: -10px;
    right: -10px;
    font-size: 15px;
    height: 20px;
    width: 20px;
    border-radius: 50%;
    @media (max-width: 425px) {
      font-size: 12px;
      height: 18px;
      width: 18px;
    }
  }
`;
