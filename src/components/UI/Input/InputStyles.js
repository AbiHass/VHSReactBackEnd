import styled from 'styled-components';

export const InputContainerStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 50%;
`;

export const InputLabel = styled.label`
  margin: 10px 0;
  width: 60%;
`;

export const InputStyled = styled.input`
  background-color: whitesmoke;
  border: ${({ isError }) => (isError ? '1px solid #fb103d ' : 'none')};
  border-radius: 8px;
  height: 30px;
  padding: 0.5rem 1rem;
  width: 70%;
  margin-top: 10px;
  @media (max-width: 425px){
    width: 270px;
  }
`;

export const ErrorMessageStyled = styled.p`
  margin: 0;
  margin-top: 5px;
  color: #fb103d;
  font-size: 14px;
`;

