import styled from 'styled-components';
import { Form as FormikForm } from 'formik';

export const LoginContainerStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 120px 10px 46px 10px;
  gap: 20px;
  font-family: var(--font);
  background-color: var(--orange);
 
`;

export const Form = styled(FormikForm)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
 /*  padding: 0 2rem; */
  gap: 20px;

`;
