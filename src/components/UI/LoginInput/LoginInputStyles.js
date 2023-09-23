import styled from 'styled-components';

export const InputContainerStyled = styled.div`
  display: flex;
  flex-direction: column;
  background-color: var(--orange);
  align-items: center;
`;

export const LoginInputStyled = styled.input`
  width: 350px;
  padding: 20px;
  margin: 10px 0;
  border-radius: 15px;
  border: ${({ isError }) => (isError ? '1px solid #fb103d ' : 'none')};
  outline: none;
  @media (max-width: 425px){
    width: 290px;
    height: 45px;
    padding: 10px;
  }
`;

export const ErrorMessageStyled = styled.p`
  margin-top: 3px;
  color: #fb103d;
  font-size: 14px;
`;