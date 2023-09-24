import { motion } from "framer-motion";
import { styled } from "styled-components";

export const CategoriasContainerStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  padding: 30px 5px;
  background-color: var(--orange);
  @media (max-width: 718px) {
    gap: 12px;
    padding: 18px 5px;
  }
`;
export const CategoriaContainerStyled = styled(motion.div)`
  padding: 10px 15px;
  font-family: system-ui;
  font-size: 10px;
  color: white;
  border-radius: 10px;
  cursor: pointer;
  background-color: ${({ selected }) =>
    selected ? "var(--green)" : " var(--red) "};
  border-radius: 15px;
  box-shadow: 4px 5px 10px 5px #000000;

  @media (max-width: 718px) {
    box-shadow: 2px 3px 5px 2px #000000;
  }
  @media (max-width: 549px) {
    font-size: 9px;
    padding: 7px 10px;
  }

  @media (max-width: 460px) {
    font-size: 7px;
    padding: 7px 8px;
  }
  @media(max-width: 425px){
    padding: 5px 4px;
  }
`;
