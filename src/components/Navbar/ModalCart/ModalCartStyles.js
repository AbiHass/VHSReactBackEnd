import styled from "styled-components";
import { motion } from "framer-motion";

export const CartProductsContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  overflow: scroll;
  padding: 10px 0;
  font-family: system-ui;
  font-size: 14px;

  &::-webkit-scrollbar {
    background: transparent;
  }

  &::-webkit-scrollbar:horizontal {
    display: none;
  }
`;
export const CartContainerStyled = styled(motion.div)`
  display: flex;
  flex-direction: column;
  position: fixed;
  top: 80px;
  right: 0;
  z-index: 99;
  gap: 30px;
  width: 450px;
  height: 86%;
  padding: 20px;
  background-color: var(--orange);
  border-radius: 60px 0 0 60px;
  box-shadow: 4px 5px 8px 5px #000000;
  @media (max-width: 455px){
    width: 100%;
    border-radius: 0;
    padding: 0;
  }
`;
export const CartItemContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 95%;
  background-color: #e9ab38;
  padding: 10px;
  border-radius: 10px;
  box-shadow: 4px 3px 6px 1px #000000;
  img {
    height: 90px;
    width: 60px;
    margin-right: 10px;
  }
  @media (max-width: 455px){
    img {
    height: 80px;
    width: 50px;
  }
  }
  h3 {
    font-family: system-ui;
    font-size: 14px;

  }
  span {
    display: flex;
    align-items: center;
    width: 55%;
  }
`;

export const Price = styled.div`
    font-family: system-ui;
    font-size: 18px;
    font-weight: bold;
 
`;

export const ItemHandler = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  font-family: system-ui;
  font-size: 17px;
  font-weight: bold;

  span {
    background-color: #e1960b;
    border-radius: 7px;
    height: 20px;
    width: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 20px;
  }
`;
export const ItemValor = styled.span`
  font-family: system-ui;
  font-size: 14px;
  font-weight: bold;
  margin-right: 50px;
`;
export const QuantityHandlerDown = styled.span`
  border-radius: 5px;
  color: black;
  font-weight: 400;
  cursor: pointer;
  font-weight: bold;
`;
export const QuantityHandlerUp = styled.span`
  border-radius: 5px;
  color: black;
  font-weight: 400;
  cursor: pointer;
  font-weight: bold;
`;
export const ItemQuantity = styled.span`
  font-weight: bold;
  font-size: 13px;
  font-family: system-ui;
`;

export const PriceContainer = styled.div`
  display: flex;
  align-items: flex-end;
  flex-direction: column;
  font-family: system-ui;
  font-weight: bold;
  gap: 5px;
  padding: 0 20px;
`;
export const ButtonContainer = styled.div`
  display: flex;
  gap: 10px;
  padding: 0 20px;
`;
export const ButtonCart = styled.button`
  cursor: pointer;
  padding: 8px 25px;
  margin-bottom: 5px;
  border-radius: 10px;
  border: none;
  text-transform: uppercase;
  font-size: 14px;
  background: var(--red);
  width: 100%;
  @media (max-width: 425px){
    padding: 5px 25px;
    font-size: 12px;
    margin-bottom: 20px;
  }
`;
