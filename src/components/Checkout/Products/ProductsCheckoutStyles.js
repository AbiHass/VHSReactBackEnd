import styled from "styled-components";

export const ProductosContainerStyled = styled.div`
  padding-top: 120px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  background-color: var(--orange);
  h2 {
    font-size: 25px;
    font-family: var(--font);
    text-transform: uppercase;
  }
  p {
    font-family: var(--font);
  }
`;

export const ProductoItemContainerStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #e9ab38;
  width: 40%;
  padding: 10px;
  border-radius: 10px;
  box-shadow: 4px 5px 10px 1px #000000;
  img {
    height: 100px;
    width: 70px;
    margin-right: 10px;
    @media (max-width: 425px) {
      height: 90px;
      width: 60px;
    }
  }
  h3 {
    font-family: system-ui;
    font-size: 18px;
    @media (max-width: 425px) {
      font-size: 14px;
    }
  }
  span {
    display: flex;
    align-items: center;
  }
  @media (max-width: 700px) {
    width: 80%;
  }
`;

export const ItemInfoStyled = styled.div`
  display: flex;
  align-items: center;
  gap: 50px;
  margin-right: 10px;
  @media (max-width: 425px) {
    gap: 20px;
  }
  p {
    font-family: system-ui;
    font-weight: bold;
  }
  p:first-child {
    border-radius: 10px;
    border: 1px solid black;
    background-color: whitesmoke;
    padding: 4px 10px;
    font-size: 15px;
    @media (max-width: 425px) {
      font-size: 11px;
    }
  }
  p:last-child {
    font-size: 17px;
    @media (max-width: 425px) {
      font-size: 14px;
    }
  }
`;
export const PriceContainerStyled = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 18px;
  gap: 15px;
  margin: 15px 0;
  font-weight: 500;
  border: 1px solid black;
  padding: 25px;
  border-radius: 10px;
  background-color: #e9ab38;
  text-transform: uppercase;
  @media (max-width: 425px) {
      padding: 15px;
      font-size: 15px;
    }
  p:last-child {
    font-weight: bold;
    color: var(--green);
  }
`;
