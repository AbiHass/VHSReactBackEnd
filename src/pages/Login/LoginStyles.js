import styled from 'styled-components';
import { Form as FormikForm } from 'formik';

export const LoginContainerStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
  padding: 110px 0 70px 0;
  background-color: var(--orange);
  h1{
    font-family: var(--font);
    font-size: 30px;
  }
`;

export const Form = styled(FormikForm)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
 /*  padding: 0 10px; */
  gap: 20px;
`;

export const LoginPasswordStyled = styled.p`
  color: black;
  text-decoration: underline;
  font-family: var(--font);
  font-size: 17px;
`;
export const LoginRegisterStyled = styled.p`
  font-family: var(--font);
  font-size: 23px;
  font-weight: bold;
`;
export const LinkRegisterStyled = styled.p`
  font-family: var(--font);
  color: black;
  font-size: 23px;
`;

