import styled from 'styled-components';
import { motion } from 'framer-motion';

export const ButtonSubmitStyled = styled(motion.button)`
  padding: 15px 25px;
  outline: none;
  border: none;
  border-radius: 10px;
  background: var(--red);
  color: white;
  text-transform: uppercase;
  cursor: pointer;
  margin: 15px 96px;

  &:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }
  @media (max-width: 375px){
    padding: 10px;
  }
`;