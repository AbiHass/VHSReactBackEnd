import styled from 'styled-components';

export const InputContainerStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 50%;
`;

export const InputLabel = styled.label`
 /*  display: flex; */
  margin: 10px 0;
 /*  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start; */
  width: 60%;
`;

export const InputStyled = styled.input`
  background-color: whitesmoke;
  /* outline: none; */
  border: ${({ isError }) => (isError ? '1px solid #fb103d ' : 'none')};
  border-radius: 8px;
  height: 30px;
  padding: 0.5rem 1rem;
 /*  color: white; */
  width: 70%;
  margin-top: 10px;

 /*  ::placeholder {
    opacity: 60%;
  }
  -webkit-text-fill-color: white;

  :-webkit-autofill,
  :-webkit-autofill:hover,
  :-webkit-autofill:focus {
    -webkit-box-shadow: 0 0 0px 1000px gray inset;
  } */
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

