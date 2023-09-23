import styled from 'styled-components';
import { Form as FormikForm } from 'formik';

export const ForgotContainerStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
  margin-top: 40px;
  /* height: calc(100vh - 400px); */
  background-color: var(--orange);
  height: 418px;
  font-family: var(--font);
  font-size: 10px;
  
`;

export const Form = styled(FormikForm)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  /* padding: 0 2rem; */
  gap: 25px;
`;
